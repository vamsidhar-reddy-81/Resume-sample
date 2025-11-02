# Career Toolkit

Welcome to the Career Toolkit project! This comprehensive web-based application is designed to assist users in enhancing their career prospects through various features, including resume processing, personalized email template generation, real-time project suggestions, and resume improvement recommendations with ATS scoring.

## Features

- **Resume Uploading**: Users can upload their resumes, which will be processed using AI to extract relevant information.
- **Personalized Email Templates**: The application generates customized cold email templates based on the user's resume and career goals.
- **Real-Time Project Suggestions**: Users receive project suggestions tailored to their skills and interests, helping them to enhance their portfolios.
- **Resume Improvement Recommendations**: The toolkit provides feedback on resumes, including an ATS (Applicant Tracking System) scoring system to ensure compatibility with job application systems.

## Project Structure

The project is organized into several key components:

- **Web Application**: Located in the `web` directory, this part of the project is built using Next.js and Tailwind CSS for a responsive user interface.
- **API Service**: The `api` directory contains the backend service that handles resume processing, project suggestions, and email template generation.
- **Worker Service**: The `worker` directory is responsible for background processing tasks, such as generating email templates and processing resumes.
- **Shared Libraries**: The `libs` directory contains shared utilities and types used across the project.
- **Testing**: The `tests` directory includes unit and end-to-end tests to ensure the reliability of the application.
- **Infrastructure**: The `infra` directory contains Docker and Kubernetes configurations for deploying the application.

## Getting Started

To get started with the Career Toolkit project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd career-toolkit
   ```

2. Install dependencies for the web application:
   ```
   cd web
   npm install
   ```

3. Install dependencies for the API service:
   ```
   cd ../api
   npm install
   ```

4. Install dependencies for the worker service:
   ```
   cd ../worker
   npm install
   ```

5. Set up the environment variables by copying the example file:
   ```
   cp .env.example .env
   ```

6. Start the development environment:
   ```
   cd ../scripts
   ./start-dev.sh
   ```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.