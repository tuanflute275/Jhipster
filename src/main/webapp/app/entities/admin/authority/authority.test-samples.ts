import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '6526c305-dddb-4251-9ba9-0c8e38821f94',
};

export const sampleWithPartialData: IAuthority = {
  name: 'f3402f4b-52ec-436c-93f6-bfd4f7270abb',
};

export const sampleWithFullData: IAuthority = {
  name: '1b98c762-9c28-4cf5-9055-d9e7be59e0f4',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
