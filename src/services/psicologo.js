import axios from "axios";

export const  postCitaPsico =  async(data) => {

    try{
        const axiosConfig = axios.create({
        withCredentials: true,
        credentials: "include",
        baseURL: 'http://localhost:3100',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
     const res = await axiosConfig.post('http://localhost:3100/psicologo/crearcitas',
     data
    );

    return res.data
    }catch(err){
        console.error(err);
    }

};