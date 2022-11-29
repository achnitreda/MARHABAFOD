// 4 
import { useState, useCallback} from 'react';

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setIsLoading(true);
      // const httpAbortCtrl = new /* A way to cancel a request. */
      // AbortController();
      // activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          // signal: httpAbortCtrl.signal
        });

        const responseData = await response.json();

        // activeHttpRequests.current = activeHttpRequests.current.filter(
        //   reqCtrl => reqCtrl !== httpAbortCtrl
        // );

        if (!response.ok) { /* A boolean that indicates whether the response was successful (status in the range 200-299) or not. */
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        // console.log(responseData);
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  // useEffect(() => {
  //   return () => {
  //     activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
  //   };
  // }, []);

  return { isLoading, error, sendRequest, clearError };
};
