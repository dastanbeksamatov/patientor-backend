export interface DiagnoseEntry {
  code: string;
  name: string;
  latin?: string;
}

interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<DiagnoseEntry['code']>;
}

export enum HealthRating {
  "Healthy"=0,
  "LowRisk"=1,
  "HighRisk"=2,
  "CriticalRisk"=2,
}

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthRating;
}

interface Discharge {
  date: string;
  criteria: string;
}

interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge: Discharge;
}

interface SickLeave {
  startDate: string;
  endDate: string;
}

interface OccupationalHealthcare extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave: SickLeave;
}

export type Entry = BaseEntry | HealthCheckEntry | HospitalEntry | OccupationalHealthcare;


export interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries: Entry[];
}


export type newPatient = Omit<PatientEntry, 'id'>;

export type Patient = Omit<PatientEntry, "ssn"|"id">;

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

