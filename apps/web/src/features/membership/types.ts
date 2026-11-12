export type MembershipApplication = {
  givenName: string;
  middleName: string;
  familyName: string;
  birthDate: string;
  country: string;
  gender: 'male' | 'female';
  height: string;
  weight: string;
  email: string;
  mobile: string;
  facebook: string;
  style: string;
  organization: string;
  president: string;
  rank: string;
  membershipId: string;
};

export const initialMembershipApplication: MembershipApplication = {
  givenName: '',
  middleName: '',
  familyName: '',
  birthDate: '',
  country: '',
  gender: 'male',
  height: '',
  weight: '',
  email: '',
  mobile: '',
  facebook: '',
  style: '',
  organization: '',
  president: '',
  rank: '',
  membershipId: '',
};
