import { Worker, isMainThread, parentPort } from 'worker_threads';
import { processResumeJob } from './jobs/processResume.job';
import { generateTemplatesJob } from './jobs/generateTemplates.job';

if (isMainThread) {
    const worker = new Worker(__filename);
    worker.on('message', (message) => {
        console.log('Message from worker:', message);
    });
    worker.on('error', (error) => {
        console.error('Worker error:', error);
    });
    worker.on('exit', (code) => {
        console.log(`Worker exited with code: ${code}`);
    });
} else {
    // Start processing jobs
    processResumeJob();
    generateTemplatesJob();
}