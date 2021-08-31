import { ProfileApiData } from '../../interface/ProfileApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const fetchUserProfile = async (): Promise<ProfileApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/profile`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default fetchUserProfile;
