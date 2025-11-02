import React, { useState } from 'react';

const EmailTemplateEditor: React.FC = () => {
    const [template, setTemplate] = useState<string>('');
    const [subject, setSubject] = useState<string>('');

    const handleTemplateChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTemplate(event.target.value);
    };

    const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubject(event.target.value);
    };

    const handleSave = () => {
        // Logic to save the email template
        console.log('Template saved:', { subject, template });
    };

    return (
        <div className="email-template-editor">
            <h2>Email Template Editor</h2>
            <div>
                <label htmlFor="subject">Subject:</label>
                <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={handleSubjectChange}
                    placeholder="Enter email subject"
                />
            </div>
            <div>
                <label htmlFor="template">Template:</label>
                <textarea
                    id="template"
                    value={template}
                    onChange={handleTemplateChange}
                    placeholder="Write your email template here"
                />
            </div>
            <button onClick={handleSave}>Save Template</button>
        </div>
    );
};

export default EmailTemplateEditor;