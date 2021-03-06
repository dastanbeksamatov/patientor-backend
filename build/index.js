"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const diagnoseRouter_1 = __importDefault(require("./routes/diagnoseRouter"));
const patients_1 = __importDefault(require("./routes/patients"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
const PORT = 3001;
app.get('/api/ping', (_req, res) => {
    console.log('app running');
    res.send('initialized');
});
app.use('/api/diagnoses', diagnoseRouter_1.default);
app.use('/api/patients', patients_1.default);
app.listen(PORT, () => {
    console.log('running on port 3000');
});
