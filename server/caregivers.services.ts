import admin from "firebase-admin";
import QuerySnapshot = admin.firestore.QuerySnapshot;

const db = admin.firestore()

const refCaregivers = db.collection('caregivers');

export async function getAllCaregivers(): Promise<CaregiverModel[]> {
    const caregiverQuerySnap: QuerySnapshot = await refCaregivers.get();
    const caregivers: CaregiverModel[] = [];
    caregiverQuerySnap.forEach(caregiverSnap => caregivers.push(caregiverSnap.data() as CaregiverModel));
    return caregivers
}