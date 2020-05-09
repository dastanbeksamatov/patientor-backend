"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const types_1 = require("../types");
const isGender = (param) => {
    return Object.values(types_1.Gender).includes(param);
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const parseDate = (date) => {
    if (!date || !isDate(date) || !isString(date)) {
        throw new Error('missing or invalid date' + date);
    }
    return date;
};
const parseGender = (gender) => {
    if (!gender || !isGender(gender)) {
        throw new Error('missing or invalid gender value' + gender);
    }
    return gender;
};
const parseName = (name) => {
    if (!name || !isString(name)) {
        throw new Error('missing name or invalid');
    }
    return name;
};
const parseSsn = (ssn) => {
    if (!ssn || !isString(ssn)) {
        throw new Error('missing or invalid ssn' + ssn);
    }
    return ssn;
};
const parseOccupation = (occ) => {
    if (!occ || !isString(occ)) {
        throw new Error('missing or invalid occupation value' + occ);
    }
    return occ;
};
exports.toNewEntry = (object) => {
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
