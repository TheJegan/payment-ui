export class Organization{
    name: String;
    address: String;
    city: String;
    state: String;
    zip: String
}

export class Payment{
    userId: string;
    propertyId: string;
    amount: string;
}

export class User{
    name: string;
    address: string;
}