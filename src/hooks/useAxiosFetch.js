import React, {useState, useEffect} from 'react';

import axios from 'axios';

//input olarak search geliyor. search false arama yapmıyor, bir şey ile search true olduğunda çalışır. useeffect ile search false yapmak lazım dış fonksiyonda.
//asenkron olarak çekiyor input search: bool url:çekeceğinurl
const useAxiosFetch = (search, url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log('search: ' + search);
  //console.log(data);
  console.log('generated query in func: ' + url);
  //console.log(data);
  useEffect(() => {
    async function fetchData(source, unmounted) {
      console.log('query: ' + url);
      await axios
        .get(url, {
          cancelToken: source.token,
        })
        .then((a) => {
          if (!unmounted) {
            setData(a.data);
            setLoading(false);
          }
        })
        .catch(function (e) {
          if (!unmounted) {
            console.log('error');
            setError(true);
            setErrorMessage(e.message);
            setLoading(false);
            if (axios.isCancel(e)) {
              console.log(`request cancelled:${e.message}`);
            } else {
              console.log('error');
            }
          }
        });
    }
    let unmounted = false;
    let source = axios.CancelToken.source();
    if (search) {
      fetchData(source, unmounted);
    }
    return function () {
      unmounted = true;
      source.cancel('Cancelling in cleanup');
    };
  }, [search]);

  return {data, loading, error, errorMessage};
};

export default useAxiosFetch;
