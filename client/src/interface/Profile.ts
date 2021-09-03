export interface UserProfile {
  isAvailable?: boolean;
  firstName?: string;
  lastName?: string;
  gender?: string;
  birthDate?: Date;
  hourlyRate?: number;
  email?: string;
  address?: Address;
  availability?: Availability;
  description?: string;
}

export interface Address {
  city?: string;
  province?: string;
}

interface Availability {
  days: {
    [key: string]: boolean;
  };
  hours: {
    end: string;
    start: string;
  };
}
