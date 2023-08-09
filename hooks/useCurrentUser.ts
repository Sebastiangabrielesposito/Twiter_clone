import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher,{
    // revalidateOnMount: false,
    // shouldRetryOnError: false
  });

  // const currentUser = data ? data.currentUser : null;
  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useCurrentUser;