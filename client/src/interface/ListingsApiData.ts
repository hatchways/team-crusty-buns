import { UserProfile } from '../interface/Profile';
export interface ListingsApiDataSuccess {
  message: string;
  profiles: UserProfile[];
  token: string;
}
export interface ListingsApiData {
  error?: { message: string };
  success?: ListingsApiDataSuccess;
}
