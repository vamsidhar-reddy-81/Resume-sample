import React from 'react';
import Header from '../components/Header';
import ResumeUploader from '../components/ResumeUploader';
import EmailTemplateEditor from '../components/EmailTemplateEditor';
import useRealtime from '../hooks/useRealtime';

const Page = () => {
  const { suggestions } = useRealtime();

  return (
    <div className="container mx-auto p-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Career Toolkit</h1>
      <ResumeUploader />
      <EmailTemplateEditor suggestions={suggestions} />
    </div>
  );
};

export default Page;