export class Organization{
    _id: string;
    name: String;
    address: String;
    city: String;
    state: String;
    zip: String;
    createdDate: string;
}

export class Payment{
    _id: string;
    _user: string;
    _property: string;
    amount: string;
    createdDate: string;
}

export class User{
    _id: string;
    name: string;
    address: string;
}