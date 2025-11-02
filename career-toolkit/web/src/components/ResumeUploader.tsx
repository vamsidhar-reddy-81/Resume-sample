import React, { useState } from 'react';

const ResumeUploader: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (validTypes.includes(selectedFile.type)) {
                setFile(selectedFile);
                setError(null);
            } else {
                setError('Please upload a valid resume file (PDF or Word document).');
            }
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('resume', file);

        try {
            const response = await fetch('/api/uploads/resumes', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload resume');
            }

            // Handle successful upload (e.g., show success message, reset state)
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="resume-uploader">
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
            {error && <p className="error">{error}</p>}
            <button onClick={handleUpload} disabled={!file}>Upload Resume</button>
        </div>
    );
};

export default ResumeUploader;