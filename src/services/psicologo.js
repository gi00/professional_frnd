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
     const res = await axiosConfig.get('http://localhost:3100/psicologo/crearcitas/${data.id}',
     data
    );

    return res.data
    }catch(err){
        console.error(err);
    }

};

export const postCitaCreadaData = async(data, cliente)=>{

  try{
      const axiosConfig = axios.create({
      withCredentials: true,
      credentials: "include",
      baseURL: 'http://localhost:3100',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const res = await axiosConfig.get('localhost:3100/psicologo/citas/pendientes/${cliente}',
    data
  );

    return res.data
  }catch(err){
    console.error(err);
  }
} 




module.exports = router;
