import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl font-bold">Career Toolkit</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/upload" className="hover:underline">Upload Resume</a></li>
                    <li><a href="/suggestions" className="hover:underline">Project Suggestions</a></li>
                    <li><a href="/email-templates" className="hover:underline">Email Templates</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;