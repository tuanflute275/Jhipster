import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 31340,
  login: 'Mte7w4',
};

export const sampleWithPartialData: IUser = {
  id: 28638,
  login: 'VMFj',
};

export const sampleWithFullData: IUser = {
  id: 1424,
  login: 'r',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
