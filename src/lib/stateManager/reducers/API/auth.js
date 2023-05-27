import axios from "axios";
import { toast } from 'react-toastify';
import { urlAPI } from "../../../../data/fixData";

export const login = async (email, password, setAuthenticated) => {
  await axios
    .get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
      withCredentials: true,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

  axios
    .post(
      `${urlAPI.base}/login`,
      {
        email: email,
        password: password,
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      axios
        .get(`${urlAPI.base}/get-user`, {
          headers: {
            Authorization: `Bearer ${response.data.token}`,
          },
        })
        .then((dataUser) => {
          console.log(dataUser.data.user, "GetUser API");
          setAuthenticated({
            token: response.data.token,
            isLogin: true,
            data: {
              name: dataUser.data.user.name,
              email: dataUser.data.user.email,
            },
          });
          localStorage.setItem(
            "Authorization",
            JSON.stringify({
              token: response.data.token,
              isLogin: true,
              data: {
                name: dataUser.data.user.name,
                email: dataUser.data.user.email,
              },
            })
          );
          if (response?.data?.status === 'success') {
            toast.success('Berhasil login');
          } else toast.error('Gagal login');
        });
    });
}

export const logout = async (setAuthenticated) => {
  await axios.post(`${urlAPI.base}/logout`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
    },
  });

  localStorage.removeItem("Authorization");
  setAuthenticated({
    token: null,
    isLogin: false,
    data: null,
  });
  window.href("dashboard");
}

export const register = async (form) => {
  const response = await axios.post(
    `${urlAPI.base}/register`,
    form
  ); // Laravel API

  if (response?.data?.status === 'success') {
    toast.success('Berhasil register admin');
  } else toast.error('Gagal register admin');
  return response.data.data;
}