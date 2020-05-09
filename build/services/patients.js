"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../data/patients"));
const utils_1 = require("./utils");
const patients = patients_1.default;
const getPatients = () => {
    return patients;
};
const getSensitivePatients = () => {
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
const findById = (id) => {
    const patient = patients.find(patient => patient.id === id);
    return patient;
};
const addPatient = (patient) => {
    const newPatient = utils_1.toNewEntry(patient);
    patients.push(newPatient);
    return newPatient;
};
exports.default = {
    getPatients,
    getSensitivePatients,
    addPatient,
    findById
};
