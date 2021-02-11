import React, {useState, useEffect} from 'react';

import axios from 'axios';

//input olarak search geliyor. search false arama yapmıyor, bir şey ile search true olduğunda çalışır. useeffect ile search false yapmak lazım dış fonksiyonda.
//asenkron olarak çekiyor input search: bool url:çekeceğinurl

// search : search auto açıksa toggle, değilse kontrol
// auto: sayfa açınca direk arar, düğmeli olacaksa koyma
// url: komple url,
// token: auth varsa header

const useAxiosFetch = (search, url, token, auto) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData(source, unmounted, idToken) {
      console.log('query: ' + url);
      await axios
        .get(url, {
          cancelToken: source.token,
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
          timeout: 1000,
        })
        .then((a) => {
          if (!unmounted) {
            setData(a.data);
            setLoading(false);
          }
        })
        .catch(function (e) {
          if (!unmounted) {
            //console.log('error status: ' + e.response.status);
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
    if (search || auto) {
      fetchData(source, unmounted, token);
    }
    return function () {
      unmounted = true;
      source.cancel('Cancelling in cleanup');
    };
  }, [search, token, auto]);

  return {data, loading, error, errorMessage};
};

export default useAxiosFetch;

async function fetchData(url, idToken) {
  console.log('query: ' + url);
  axios.get(url, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
    timeout: 1000,
  });
}
