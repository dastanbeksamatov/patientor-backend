/* eslint-disable @typescript-eslint/no-explicit-any */
import {Gender, PatientEntry, Entry, DiagnoseEntry, Discharge, SickLeave } from '../types';

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isNumber = (r: number): r is number => {
  return typeof r === 'number' || r instanceof Number; 
};

const parseDate = (date: any): string =>{
  if(!date || !isDate(date) || !isString(date)){
    throw new Error('missing or invalid date' + date);
  }
  return date;
};

const parseGender = (gender: any): Gender => {
  if(!gender || !isGender(gender)){
    throw new Error('missing or invalid gender value' + gender);
  }
  return gender;
};

const parseName = (name: any): string => {
  if(!name || !isString(name)){
    throw new Error('missing name or invalid');
  }
  return name;
};

const parseSsn = (ssn: any): string => {
  if(!ssn || !isString(ssn)){
    throw new Error('missing or invalid ssn' + ssn);
  }
  return ssn;
};

const parseOccupation = (occ: any): string => {
  if(!occ || !isString(occ)){
    throw new Error('missing or invalid occupation value' + occ);
  }
  return occ;
};


export const toNewPatientEntry = (object: any): PatientEntry => {
  const newEntry = {
    id: Math.random().toString(36).substring(2, 20),
    name: parseName(object.name),
    dateOfBirth: parseDate(object.dateOfBirth),
    ssn: parseSsn(object.ssn),
    occupation: parseOccupation(object.occupation),
    gender: parseGender(object.gender)
  };
  return newEntry;
};

const parseCodes = (codes: Array<DiagnoseEntry['code']>): Array<DiagnoseEntry['code']> => {
  if(!codes){
    throw new Error('contains invalid or missing codes ' + codes);
  }
  return codes;
};

const isDischarge = (d: Discharge): boolean => {
  if(!d || !d.date || !d.criteria || !isDate(d.date) || !isString(d.criteria)){
    return false;
  }
  return true;
};

const parseDischarge = (d: Discharge): Discharge => {
  if(!d || !isDischarge(d)){
    throw new Error('invalid or missing discharge ' + JSON.stringify(d));
  }
  return d;
};

const isSickLeave = (s: SickLeave): boolean => {
  if(!s || !s.startDate || !s.endDate || !isDate(s.startDate) || !isDate(s.endDate)){
    return false;
  }
  return true;
};

const parseSickLeave = (s: SickLeave): SickLeave => {
  if(!s || !isSickLeave(s)){
    throw new Error('missing or invalid values of SickLeave ' + s);
  }
  return s;
};

const parseRating = (r: number): number => {
  if(!r || !isNumber(r) || r>4 || r<0){
    throw new Error('rating is missing or invalid '+ r);
  }
  return r;
};

export const toNewHospitalEntry = (object: any): Entry => {
  const newEntry ={
    id: Math.random().toString(36).substring(2, 20),
    type: "Hospital",
    description: parseName(object.description),
    date: parseDate(object.date),
    specialist: parseName(object.specialist),
    diagnosisCodes?: parseCodes(object.diagnosisCodes? object.diagnosisCodes: null),
    discharge: parseDischarge(object.discharge)
  };
  return newEntry;
};

export const toNewHealtcheckEntry = (object: any): Entry => {
  const newEntry ={
    id: Math.random().toString(36).substring(2, 20),
    type: "HealthCheck",
    description: parseName(object.description),
    date: parseDate(object.date),
    specialist: parseName(object.specialist),
    diagnosisCodes?: parseCodes(object.diagnosisCodes),
    healthCheckRating: parseRating(object.healthCheckRating)
  };
  return newEntry;
};

export const toNewOccupationalHealthcareEntry = (object: any): Entry => {
  const newEntry ={
    id: Math.random().toString(36).substring(2, 20),
    type: "OccupationalHealthcare",
    description: parseName(object.description),
    date: parseDate(object.date),
    specialist: parseName(object.specialist),
    diagnosisCodes?: parseCodes(object.diagnosisCodes),
    employerName: parseName(object.employerName),
    sickLeave: parseSickLeave(object.sickLeave)
  };
  return newEntry;
};