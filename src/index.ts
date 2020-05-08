import express from 'express';
import cors from 'cors';
import diagnoseRouter from './routers/diagnoseRouter';
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('app running');
  res.send('initialized');
});

app.use('/api/diagnoses', diagnoseRouter);

app.listen(PORT, () => {
  console.log('running on port 3000');
});