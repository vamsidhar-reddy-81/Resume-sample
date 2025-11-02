import { Resume } from '../types/index';
import { atsScorer } from '../services/atsScorer';
import { resumeParser } from '../services/resumeParser';
import { projectSuggester } from '../services/projectSuggester';

export class ResumeProcessor {
    private resume: Resume;

    constructor(resume: Resume) {
        this.resume = resume;
    }

    public analyzeResume() {
        const parsedData = resumeParser.parse(this.resume);
        const atsScore = atsScorer.calculateScore(parsedData);
        const projectSuggestions = projectSuggester.suggestProjects(parsedData.skills);

        return {
            parsedData,
            atsScore,
            projectSuggestions,
        };
    }

    public improveResume() {
        // Logic for improving the resume based on ATS scoring and feedback
        // This could involve suggesting changes to the content or format
    }
}