import { ProjectSuggestion } from '../types/index';
import { getSkillsFromResume } from '../services/resumeParser';
import { fetchProjectSuggestions } from '../ai/llmClient';

export class ProjectSuggester {
    async suggestProjects(resume: File): Promise<ProjectSuggestion[]> {
        const skills = await getSkillsFromResume(resume);
        const suggestions = await fetchProjectSuggestions(skills);
        return suggestions;
    }
}