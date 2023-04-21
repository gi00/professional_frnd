import axios from "axios";

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
    'http://localhost:3100/paciente/login',
    data
  );

  return res.data
  
  }catch(err){
    console.error(err);
  }
};


