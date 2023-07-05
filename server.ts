import { config as dotenv } from 'dotenv';
import express, { Errback, NextFunction, Request, Response } from 'express';
import fileUpload from 'express-fileupload';
import helmet from 'helmet';

import file from './src/routes/fileRoute.js';

dotenv({
  path: process.env.NODE_ENV === 'production' ? './.env' : '.env.example',
});

const server = express();
const port = process.env.PORT;
const host = process.env.HOST;

server.use(fileUpload());
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded());

server.use('/file', file);

server.use(
  (error: Errback, req: Request, res: Response, next: NextFunction) => {
    console.log(new Date().toISOString(), ' - ', error);
    res.status(500).send('Internal Server Error');
  },
);

server.listen(port, () =>
  console.log(
    new Date().toISOString(),
    ` -  ⚡️ Server is running at ${host}:${port}`,
  ),
);
