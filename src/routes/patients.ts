import express from 'express';
import { Patient, newPatient } from '../types';
import patientsService from '../services/patients';
const router = express.Router();

router.get('/', (_req, res): Array<Patient> => {
  res.send(patientsService.getSensitivePatients());
});

router.get('/:id', (req, res): Patient => {
  const patient = patientsService.findById(req.params.id);
  if(patient){
    res.send(patient);
  }
  else{
    res.status(400).send('not found');
  }
});

router.post('/', (req, res): newPatient => {
  try{
    const newPatient = patientsService.addPatient(req.body);
    res.send(newPatient);
  }
  catch (e){
    res.status(400).send(e.message);
  }
});

export default router;