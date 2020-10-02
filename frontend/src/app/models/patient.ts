export interface PatientModel {
  id: string;
  lastName: string;
  firstName: string;
  service: string;
  numberOfRoom: number;
  numberOfBed: number;
  floor: number;
  sex: string;
  stateOfRinsingLiquid: string;
  stateOfUrinaryCollector: string;
  dateOfBirthday: number;
  numberOfDevice: number
}
