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
