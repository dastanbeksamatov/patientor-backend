import express from 'express';
import patientsService from '../services/patients';
const router = express.Router();

router.get('/', (_req, res)=> {
  res.send(patientsService.getSensitivePatients());
});

router.get('/:id', (req, res) => {
  const patient = patientsService.findById(req.params.id);
  if(patient){
    res.send(patient);
  }
  else{
    res.status(400).send('not found');
  }
});

router.post('/', (req, res)=> {
  try{
    const newPatient = patientsService.addPatient(req.body);
    res.send(newPatient);
  }
  catch (e){
    res.status(400).send(e.message);
  }
});

router.post('/:id/entries', (req, res) => {
  try{
    console.log(req.body);
    const newEntry = patientsService.addEntry(req.body);
    const id = req.params.id;
    const patient = patientsService.getPatients().find(p => p.id === id);
    patient.entries.push(newEntry);
    console.log(newEntry);
    res.send(newEntry);
  }
  catch(e){
    res.status(400).send(e.message);
  }
});

export default router;