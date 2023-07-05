import { Request, Response, Router } from 'express';

import { postFileController } from '../controllers/fileController.js';
import { handleReq } from '../utils/handleReq.js';

const router = Router();

router.post('/', async (req: Request, res: Response) =>
  handleReq(req, res, postFileController),
);

export default router;
