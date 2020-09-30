import {cert} from "./cred/cert";
import admin from "firebase-admin";
admin.initializeApp({
    credential: admin.credential.cert(cert),
    databaseURL: "https://mini-projet-b1aee.firebaseio.com"
});
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {getAllPatients} from "./patients.services";
// @ts-ignore
import {getAllCaregivers} from './caregivers.services';
import {getAllpatientData} from "./patientData.services";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cors());

app.get('/api/patients', async (req, res) => {
    try {
        const patients = await getAllPatients();
        return res.send(patients);
    } catch (e) {
        return res.status(500).send({error: 'erreur serveur :' + e.message});
    }
});
app.get('/api/caregivers', async (req, res) => {
    try {
        const caregivers = await getAllCaregivers();
        return res.send(caregivers);
    } catch (e) {
        return res.status(500).send({error: 'erreur serveur :' + e.message});
    }
});
app.get('/api/patientsData', async (req, res) => {
    try {
        const patientsData = await getAllpatientData();
        return res.send(patientsData);
    } catch (e) {
        return res.status(500).send({error: 'erreur serveur :' + e.message});
    }
})

app.listen(3015, function () {
    console.log('API listening on http://localhost:3015/api/ !');
});
