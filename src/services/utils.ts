/* eslint-disable @typescript-eslint/no-explicit-any */
import {Gender, PatientEntry } from '../types';

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
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


export const toNewEntry = (object: any): PatientEntry => {
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