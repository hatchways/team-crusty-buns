import { ListingsApiData } from '../../interface/ListingsApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const fetchCurrentListings = async (): Promise<ListingsApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/profile/all`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default fetchCurrentListings;
