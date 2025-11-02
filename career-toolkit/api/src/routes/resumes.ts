import express from 'express';
import { ResumeController } from '../controllers/resumeController';

const router = express.Router();
const resumeController = new ResumeController();

// Route for processing uploaded resumes
router.post('/process', resumeController.processResume);

// Route for getting resume improvement recommendations
router.get('/recommendations', resumeController.getRecommendations);

// Route for getting ATS score
router.get('/ats-score', resumeController.getAtsScore);

export default router;