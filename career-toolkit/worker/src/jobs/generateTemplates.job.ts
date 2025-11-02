import { Job } from 'bull';
import { llmClient } from '../ai/llmClient';
import { resumeParser } from '../services/resumeParser';
import { EmailTemplate } from '../types';

export const generateEmailTemplate = async (job: Job) => {
    const { resumeFile } = job.data;

    // Parse the resume to extract relevant information
    const parsedResume = await resumeParser.parse(resumeFile);

    // Generate a personalized email template using the AI client
    const emailTemplate: EmailTemplate = await llmClient.generateTemplate(parsedResume);

    return emailTemplate;
};