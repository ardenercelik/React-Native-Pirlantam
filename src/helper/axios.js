import axios from 'axios';

import auth from '@react-native-firebase/auth';

const axiosInstance = axios.create({
  timeout: 1000,
  headers: {'Content-Type': 'application/json; charset=utf-8'},
});

export async function axiosPut(url, data, token) {
  try {
    const response = await axiosInstance.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('👉 Returned data:', response);
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
}

export async function axiosPost(url, data, token) {
  try {
    const response = await axiosInstance.post(url, JSON.stringify(data), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('👉 Returned data:', response);
    return {magazaLoading};
  } catch (e) {
    let a = e.response;
    console.log({a});
    console.log(`😱 Axios request failed: ${e.response}`);
  }
}

axiosInstance.interceptors.response.use(null, async (error) => {
  const status = error.response ? error.response.status : null;
  if (status === 401) {
    return await auth()
      .currentUser.getIdToken()
      .then((token) => {
        error.config.headers['Authorization'] = 'Bearer ' + token;
        return axiosInstance.request(error.config);
      });
  }
  return Promise.reject(error);
});

//set magaza
export async function useMagazaLoading(url, data, token, setMagazaLoading) {
  try {
    const response = await axiosInstance.post(url, JSON.stringify(data), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('👉 Returned data:', response);
    setMagazaLoading(false);
  } catch (e) {
    setMagazaLoading(false);
    let a = e.response;
    console.log({a});
    console.log(`😱 Axios request failed: ${e.response}`);
  }
}
export async function deleteItem(url, token) {
  try {
    const response = await axiosInstance.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('👉 Returned data:', response);
  } catch (e) {
    let a = e.response;
    console.log({a});
    console.log(`😱 Axios request failed: ${e.response}`);
  }
}
