import patientsData from '../data/patients';
import { PatientEntry, Patient, newPatient } from '../types';
import { toNewEntry } from './utils';

const patients: Array<PatientEntry> = patientsData;

const getPatients = (): PatientEntry[] => {
  return patients;
};

const getSensitivePatients = (): Patient[]  => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return {
      id,
      name,
      dateOfBirth,
      gender,
      occupation
    };
  });
};

const findById = (id: string): Patient | undefined => {
  const patient = patients.find(patient => patient.id === id);
  return patient;
};

const addPatient = (patient: newPatient): PatientEntry => {
  const newPatient = toNewEntry(patient);
  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  getSensitivePatients,
  addPatient,
  findById
};