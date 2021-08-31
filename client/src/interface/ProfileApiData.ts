import { UserProfile } from '../interface/Profile';
export interface ProfileApiDataSuccess {
  message: string;
  profile: UserProfile;
  token: string;
}
export interface ProfileApiData {
  error?: { message: string };
  success?: ProfileApiDataSuccess;
}
// export interface UserProfile {
//   isAvailable?: boolean | null | undefined;
//   firstName?: string | null | undefined;
//   lastName?: string | null | undefined;
//   gender?: string | null | undefined;
//   birthDate?: Date | null | undefined;
//   hourlyRate?: number | null | undefined;
//   email?: string | null | undefined;
//   address?: Address | null | undefined;
//   description?: string | null | undefined;
// }

// export interface Address {
//   city?: string | null | undefined;
//   province?: string | null | undefined;
// }
