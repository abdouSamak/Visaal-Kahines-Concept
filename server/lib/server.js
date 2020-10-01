"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cert_1 = require("./cred/cert");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(cert_1.cert),
    databaseURL: "https://mini-projet-b1aee.firebaseio.com"
});
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const patients_services_1 = require("./patients.services");
// @ts-ignore
const caregivers_services_1 = require("./caregivers.services");
const patientData_services_1 = require("./patientData.services");
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.get('/api/patients', async (req, res) => {
    try {
        const patients = await patients_services_1.getAllPatients();
        return res.send(patients);
    }
    catch (e) {
        return res.status(500).send({ error: 'erreur serveur :' + e.message });
    }
});
app.get('/api/caregivers', async (req, res) => {
    try {
        const caregivers = await caregivers_services_1.getAllCaregivers();
        return res.send(caregivers);
    }
    catch (e) {
        return res.status(500).send({ error: 'erreur serveur :' + e.message });
    }
});
app.get('/api/patientsData', async (req, res) => {
    try {
        const patientsData = await patientData_services_1.getAllpatientData();
        return res.send(patientsData);
    }
    catch (e) {
        return res.status(500).send({ error: 'erreur serveur :' + e.message });
    }
});
app.listen(3015, function () {
    console.log('API listening on http://localhost:3015/api/ !');
});
//# sourceMappingURL=server.js.map