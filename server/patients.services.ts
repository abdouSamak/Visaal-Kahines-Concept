import admin from "firebase-admin";
import QuerySnapshot = admin.firestore.QuerySnapshot;
import DocumentReference = admin.firestore.DocumentReference;
import DocumentData = admin.firestore.DocumentData;
import DocumentSnapshot = admin.firestore.DocumentSnapshot;

const db = admin.firestore();

const refPatients = db.collection('patients');

export async function getAllPatients(): Promise<PatientModel[]> {
    const patientQuerySnap: QuerySnapshot = await refPatients.get();
    const patients: PatientModel[] = [];
    patientQuerySnap.forEach(patientSnap => patients.push(patientSnap.data() as PatientModel));
    return patients;
}
async function testIfPatientExistsById(patientId: string): Promise<DocumentReference> {
    const patientRef: DocumentReference = refPatients.doc(patientId);
    const snapPatientToFind: DocumentSnapshot = await patientRef.get();
    const patientToFind: PatientModel | undefined = snapPatientToFind.data() as PatientModel | undefined;
    if (!patientToFind) {
        throw new Error(`${patientId} does not exists`);
    }
    return patientRef;
}
export async function postNewPatient(newPatient: PatientModel): Promise<PatientModel> {
    if (!newPatient) {
        throw new Error(`new product must be filled`);
    }
    const addResult: DocumentReference<DocumentData> = await refPatients.add(newPatient);
    const createNewPatient: DocumentReference = refPatients
        .doc(addResult.id);
    await createNewPatient.set({...newPatient, ref: createNewPatient, id: createNewPatient.id});

    return {...newPatient, id: createNewPatient.id};
}

export async function deletePatientById(patientId: string): Promise<any> {
    if (!patientId) {
        throw new Error('patientId is missing');
    }
    const patientToDeleteRef: DocumentReference = await testIfPatientExistsById(patientId);
    await patientToDeleteRef.delete();
    return {response : `${patientId} -> delete ok` };
}
