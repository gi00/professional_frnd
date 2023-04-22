import axios from "axios";

export const postSignIn = async (data) => {

  try{
    const axiosConfig = axios.create({
    withCredentials: true,
    credentials: "include",
    baseURL: 'http://localhost:3100',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const res = await axiosConfig.post(
    'http://localhost:3100/psicologo/login',
    data
  );

  return res.data
  
  }catch(err){
    console.error(err);
  }
};


export const postSignUp = async (data) => {
  try{
    const axiosConfig = axios.create({
    withCredentials: true,
    credentials: "include",
    baseURL: 'http://localhost:3100',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const res = await axiosConfig.post(
    'http://localhost:3100/psicologo/sigin/',
    data
  );

  return res.data
  
  }catch(err){
    console.error(err);
  }
}


