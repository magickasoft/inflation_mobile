import {createSyncStoragePersister} from '@tanstack/query-sync-storage-persister';
import {QueryClient} from '@tanstack/react-query';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import React, {FC} from 'react';

import {useFirebaseAuth} from './hooks/useFirebaseAuth';
import {storage} from './storage.mmkv';

const syncStorage = {
  setItem: (key: string, value: string | number | boolean | Uint8Array) => {
    storage.set(key, value);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return value === undefined ? null : value;
  },
  removeItem: (key: string) => {
    storage.delete(key);
  },
};

const syncStoragePersister = createSyncStoragePersister({
  storage: syncStorage,
});

export const QueryClientProvider: FC<{
  children: JSX.Element | JSX.Element[];
}> = ({children}) => {
  const {setUser} = useFirebaseAuth();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 60 * 24, // 24 hours
        onError: (error: any) => {
          const unauthorised =
            error?.response?.data?.message === 'unauthorised';
          if (unauthorised) {
            setUser(undefined);
          }
        },
      },
    },
  });
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{persister: syncStoragePersister}}>
      {children}
    </PersistQueryClientProvider>
  );
};
