import { Request, Response } from 'express';
import { ResumeParser } from '../services/resumeParser';
import { ATSScorer } from '../services/atsScorer';
import { ProjectSuggester } from '../services/projectSuggester';
import { LLMClient } from '../ai/llmClient';

export class ResumeController {
    private resumeParser: ResumeParser;
    private atsScorer: ATSScorer;
    private projectSuggester: ProjectSuggester;
    private llmClient: LLMClient;

    constructor() {
        this.resumeParser = new ResumeParser();
        this.atsScorer = new ATSScorer();
        this.projectSuggester = new ProjectSuggester();
        this.llmClient = new LLMClient();
    }

    public async uploadResume(req: Request, res: Response): Promise<void> {
        try {
            const file = req.file;
            if (!file) {
                res.status(400).send('No file uploaded.');
                return;
            }

            const parsedData = await this.resumeParser.parse(file);
            const atsScore = this.atsScorer.calculateScore(parsedData);
            const projectSuggestions = this.projectSuggester.suggestProjects(parsedData.skills);
            const emailTemplate = await this.llmClient.generateEmailTemplate(parsedData);

            res.status(200).json({
                parsedData,
                atsScore,
                projectSuggestions,
                emailTemplate,
            });
        } catch (error) {
            res.status(500).send('Error processing resume: ' + error.message);
        }
    }
}