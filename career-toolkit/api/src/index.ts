import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import uploadsRouter from './routes/uploads';
import resumesRouter from './routes/resumes';
import suggestionsRouter from './routes/suggestions';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/uploads', uploadsRouter);
app.use('/api/resumes', resumesRouter);
app.use('/api/suggestions', suggestionsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});