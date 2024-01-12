import { QueryClient } from "react-query";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";

import { CASH_TIME, STALE_TIME } from "../../helper/constants/config";

// ___________config React query ___________

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      retry: false,
      staleTime: STALE_TIME,
      cacheTime: CASH_TIME,
      enabled: true,
    },
  },
});

const localStoragePersister = createWebStoragePersistor({
  storage: window.localStorage,
});

void persistQueryClient({
  queryClient,
  persistor: localStoragePersister,
});
