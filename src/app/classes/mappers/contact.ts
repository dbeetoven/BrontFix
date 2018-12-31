export class ContactRequest {
  personalData: PersonalData
  requestType: string
  text: string
}

export class PersonalData {
  email: string
  mobile: string
  country: string
}
