import express from 'express';
import cors from 'cors';
import diagnoseRouter from './routes/diagnoseRouter';
import patientRouter from './routes/patients';
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3001;
// for json indentation
app.set('json spaces', 2);

app.get('/api/ping', (_req, res) => {
  console.log('app running');
  res.send('initialized');
});

app.use('/api/diagnoses', diagnoseRouter);

app.use('/api/patients', patientRouter);

app.listen(PORT, () => {
  console.log('running on port 3000');
});