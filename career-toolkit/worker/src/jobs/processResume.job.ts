import { Job } from 'bull';
import { resumeParser } from '../services/resumeParser';
import { atsScorer } from '../services/atsScorer';
import { projectSuggester } from '../services/projectSuggester';
import { llmClient } from '../ai/llmClient';

export const processResumeJob = async (job: Job) => {
    const { resumeFile } = job.data;

    try {
        // Parse the uploaded resume
        const parsedResume = await resumeParser.parse(resumeFile);

        // Calculate ATS score
        const atsScore = await atsScorer.calculate(parsedResume);

        // Generate project suggestions based on parsed resume
        const projectSuggestions = await projectSuggester.suggest(parsedResume.skills);

        // Generate personalized email template
        const emailTemplate = await llmClient.generateEmailTemplate(parsedResume);

        return {
            parsedResume,
            atsScore,
            projectSuggestions,
            emailTemplate,
        };
    } catch (error) {
        throw new Error(`Failed to process resume: ${error.message}`);
    }
};