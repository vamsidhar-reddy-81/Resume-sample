import fs from 'fs';
import path from 'path';
import { parse } from 'some-resume-parser-library'; // Replace with actual library

interface ParsedResume {
    name: string;
    email: string;
    phone: string;
    skills: string[];
    experience: Array<{
        jobTitle: string;
        company: string;
        startDate: string;
        endDate: string;
        description: string;
    }>;
    education: Array<{
        degree: string;
        institution: string;
        graduationDate: string;
    }>;
}

class ResumeParser {
    static parseResume(filePath: string): ParsedResume {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const parsedData = parse(fileContent); // Use the actual parsing logic

        return {
            name: parsedData.name,
            email: parsedData.email,
            phone: parsedData.phone,
            skills: parsedData.skills,
            experience: parsedData.experience.map((exp: any) => ({
                jobTitle: exp.jobTitle,
                company: exp.company,
                startDate: exp.startDate,
                endDate: exp.endDate,
                description: exp.description,
            })),
            education: parsedData.education.map((edu: any) => ({
                degree: edu.degree,
                institution: edu.institution,
                graduationDate: edu.graduationDate,
            })),
        };
    }
}

export default ResumeParser;