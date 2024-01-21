export class User {
  firstName: string;
  lastName: string;
  birthDate: Date | null;
  street: string;
  zipCode: number;
  city: string;

  constructor(obj?: any) {
    this.firstName = obj?.firstName ?? '',
    this.lastName = obj?.lastName ?? '',
    this.birthDate = obj ? new Date(obj.birthDate) : null,
    this.zipCode = obj?.zipCode ?? '',
    this.street = obj?.street ?? '',
    this.city = obj?.city ?? ''
  }
}

