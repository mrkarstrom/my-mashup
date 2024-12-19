import e from 'express';
import axios from 'axios';
import { handleErrors } from '../utils/ErrorHandler.js';

const router = e.Router();

router.get(
  ':/mbid?',
  asyncWrapper(async (req, res) => {
    // const { mbid } = req.params.mbid;
    if (!mbid) {
      throw new ErrorHandler(400, 'mbid is required');
    }
  })
);
