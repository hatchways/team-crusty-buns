import { useState, useContext, createContext, FunctionComponent, useEffect, useCallback } from 'react';
import { ListingsApiData, ListingsApiDataSuccess } from '../interface/ListingsApiData';
import { UserProfile } from '../interface/Profile';
import fetchCurrentListings from '../helpers/APICalls/fetchListings';

interface IListingsContext {
  currentListings: UserProfile[] | null | undefined;
  updateListingsContext: (data: ListingsApiDataSuccess) => void;
}

export const ListingsContext = createContext<IListingsContext>({
  currentListings: undefined,
  updateListingsContext: () => null,
});

export const ProfileProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [currentListings, setCurrentListings] = useState<UserProfile[] | null | undefined>();

  // update listings
  const updateListingsContext = useCallback((data: ListingsApiDataSuccess) => {
    setCurrentListings(data.profiles);
  }, []);

  useEffect(() => {
    const fetchListings = async () => {
      await fetchCurrentListings().then((data: ListingsApiData) => {
        if (data.success) {
          updateListingsContext(data.success);
        } else {
          setCurrentListings(null);
        }
      });
    };
    fetchListings();
  }, [updateListingsContext]);

  return (
    <ListingsContext.Provider value={{ currentListings, updateListingsContext }}>{children}</ListingsContext.Provider>
  );
};

export function useListings(): IListingsContext {
  return useContext(ListingsContext);
}
