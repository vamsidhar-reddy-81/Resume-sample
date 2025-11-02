import { Router } from 'express';
import { getProjectSuggestions } from '../controllers/resumeController';

const router = Router();

// Route to fetch project suggestions based on user skills
router.post('/suggestions', async (req, res) => {
    try {
        const { skills } = req.body;
        const suggestions = await getProjectSuggestions(skills);
        res.status(200).json(suggestions);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching suggestions.' });
    }
});

export default router;