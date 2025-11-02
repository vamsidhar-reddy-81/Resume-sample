export interface Resume {
    id: string;
    name: string;
    email: string;
    phone: string;
    skills: string[];
    experience: Experience[];
    education: Education[];
}

export interface Experience {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
}

export interface Education {
    degree: string;
    institution: string;
    graduationYear: number;
}

export interface EmailTemplate {
    subject: string;
    body: string;
}

export interface ProjectSuggestion {
    title: string;
    description: string;
    skillsRequired: string[];
}

export interface ATSScore {
    score: number;
    feedback: string[];
}