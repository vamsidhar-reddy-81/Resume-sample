import { Resume } from '../types/index';

export class AtsScorer {
    private static readonly ATS_KEYWORDS = [
        'JavaScript',
        'Python',
        'Project Management',
        'Data Analysis',
        'Machine Learning',
        // Add more relevant keywords as needed
    ];

    public static scoreResume(resume: Resume): number {
        let score = 0;

        // Check for the presence of ATS keywords in the resume
        for (const keyword of this.ATS_KEYWORDS) {
            if (resume.content.includes(keyword)) {
                score += 10; // Increment score for each keyword found
            }
        }

        // Normalize score to a percentage (assuming a maximum score based on keywords)
        const maxScore = this.ATS_KEYWORDS.length * 10;
        return (score / maxScore) * 100;
    }
}