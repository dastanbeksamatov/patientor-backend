import patientsData from '../data/patients';
import { PatientEntry, Patient, newPatient, newEntry } from '../types';
import { toNewPatientEntry, toNewHealtcheckEntry, toNewHospitalEntry, toNewOccupationalHealthcareEntry } from './utils';

const patients: Array<PatientEntry> = patientsData;

const getPatients = (): PatientEntry[] => {
  return patients;
};

const getSensitivePatients = (): Patient[]  => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => {
    return {
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      entries
    };
  });
};

const findById = (id: string): Patient | undefined => {
  const patient = patients.find(patient => patient.id === id);
  return {
    name: patient.name,
    dateOfBirth: patient.dateOfBirth,
    gender: patient?.gender,
    occupation: patient?.occupation,
    entries: patient.entries
  };
};

const addPatient = (patient: newPatient): PatientEntry => {
  const newPatient = toNewPatientEntry(patient);
  patients.push(newPatient);
  return newPatient;
};

const addEntry = (entry: newEntry): Entry => {
  switch(entry.type){
    case "HealthCheck":
      const e = toNewHealtcheckEntry(entry);
      return e;
    case "Hospital":
      const h = toNewHospitalEntry(entry);
      return h;
    case "OccupationalHealthcare":
      const o = toNewOccupationalHealthcareEntry(entry);
      return o;
    default:
      return null;
  }
};

export default {
  getPatients,
  getSensitivePatients,
  addPatient,
  findById,
  addEntry
};