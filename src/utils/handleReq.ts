import { Request, Response } from 'express';
import { ValidationError } from 'yup';

export async function handleReq(
  req: Request,
  res: Response,
  controllerFunction: (req: Request) => void,
) {
  try {
    const response = await controllerFunction(req);
    res.json(response);
  } catch (error) {
    console.log(error);
    if (error instanceof ValidationError) {
      res.status(400).json(error.errors);
    } else {
      res.status(500).send('Internal Server Error');
    }
  }
}
