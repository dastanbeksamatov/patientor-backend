"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patients_1 = __importDefault(require("../services/patients"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(patients_1.default.getSensitivePatients());
});
router.get('/:id', (req, res) => {
    const patient = patients_1.default.findById(req.params.id);
    if (patient) {
        res.send(patient);
    }
    else {
        res.status(400).send('not found');
    }
});
router.post('/', (req, res) => {
    try {
        const newPatient = patients_1.default.addPatient(req.body);
        res.send(newPatient);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
exports.default = router;
