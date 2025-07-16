import express from 'express';
import { createReport ,getAllReports, getHigh, confirmedRiport} from './ctrls/reportCTRL.js';

export const router = express.Router();

router.get('/', getAllReports);
router.post('/', createReport);
router.get('/high', getHigh);
router.put('/:id/confirm', confirmedRiport);
