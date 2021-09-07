import { useState, useContext, createContext, FunctionComponent, useEffect, useCallback } from 'react';
import { ProfileApiData, ProfileApiDataSuccess } from '../interface/ProfileApiData';
import { UserProfile } from '../interface/Profile';
import fetchUserProfile from '../helpers/APICalls/fetchUserProfile';

interface IProfileContext {
  currentUserProfile: UserProfile | null | undefined;

  updateProfileContext: (data: ProfileApiDataSuccess) => void;
}

export const ProfileContext = createContext<IProfileContext>({
  currentUserProfile: undefined,
  updateProfileContext: () => null,
});

export const ProfileProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [currentUserProfile, setCurrentUserProfile] = useState<UserProfile | null | undefined>();

  // update current user's profile
  const updateProfileContext = useCallback((data: ProfileApiDataSuccess) => {
    setCurrentUserProfile(data.profile);
  }, []);

  useEffect(() => {
    const fetchCurrentUserProfile = async () => {
      await fetchUserProfile().then((data: ProfileApiData) => {
        if (data.success) {
          updateProfileContext(data.success);
        } else {
          setCurrentUserProfile(null);
        }
      });
    };
    fetchCurrentUserProfile();
  }, [updateProfileContext]);

  return (
    <ProfileContext.Provider value={{ currentUserProfile, updateProfileContext }}>{children}</ProfileContext.Provider>
  );
};

export function useProfile(): IProfileContext {
  return useContext(ProfileContext);
}
