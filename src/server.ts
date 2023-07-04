import { config as dotenv } from 'dotenv';
import express, { Errback, NextFunction, Request, Response } from 'express';
import helmet from 'helmet';

const server = express();
const port = process.env.PORT;
const host = process.env.HOST;

dotenv({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.example',
});

server.use(helmet());
server.use(express.json());

server.use(
  (error: Errback, req: Request, res: Response, next: NextFunction) => {
    console.log(new Date().toISOString(), ' - ', error);
    res.status(500).send('Internal Server Error');
  },
);

server.listen(port, () =>
  console.log(
    new Date().toISOString(),
    ` - ⚡️ Server is running at ${host}:${port}`,
  ),
);
