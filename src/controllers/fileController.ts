import { Request } from 'express';
import { ValidationError } from 'yup';

import { postFileService } from '../services/fileService.js';

export async function postFileController(req: Request) {
  if (!req.files || Object.keys(req.files).length === 0)
    throw new ValidationError('file is required');
  return postFileService(req.files);
}
