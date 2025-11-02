import axios from 'axios';

const LLM_API_URL = process.env.LLM_API_URL || 'http://localhost:5000/api/generate-template';

export class LLMClient {
    async generateEmailTemplate(resumeData: object): Promise<string> {
        try {
            const response = await axios.post(LLM_API_URL, { resume: resumeData });
            return response.data.template;
        } catch (error) {
            console.error('Error generating email template:', error);
            throw new Error('Failed to generate email template');
        }
    }
}