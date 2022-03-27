interface UserDto {
  name: string;
  username: string;
  website: string;
  phone: string;
  email: string;
  address: Address;
  company: Company;
}

interface Address {
  city: string;
  geo: Geolocation;
  street: string;
  suite: string;
  zipcode: string;
}

interface Geolocation {
  lat: number;
  lng: number;
}

interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

export type { UserDto, Address, Company, Geolocation };
