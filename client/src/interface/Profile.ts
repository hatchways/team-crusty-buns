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
  province: string;
}

interface Availability {
  days?: {
    Monday?: boolean;
    Tuesday?: boolean;
    Wednesday?: boolean;
    Thursday?: boolean;
    Friday?: boolean;
    Saturday?: boolean;
    Sunday?: boolean;
  };
  hours: {
    end: string;
    start: string;
  };
}
