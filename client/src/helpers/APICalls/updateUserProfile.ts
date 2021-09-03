import { ProfileApiData } from '../../interface/ProfileApiData';
import { FetchOptions } from '../../interface/FetchOptions';
import { UserProfile } from '../../interface/Profile';

const updateUserProfile = async (data: UserProfile): Promise<ProfileApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    credentials: 'include',
  };
  return await fetch(`/profile`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default updateUserProfile;
