import diagnoseData from '../data/diagnoses.ts';
import { DiagnoseEntry } from '../types';

const getDiagnoses = (): Array<DiagnoseEntry> => {
  return diagnoseData;
};

export default{
  getDiagnoses
};