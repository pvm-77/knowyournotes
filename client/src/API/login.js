import axios from "axios";

const baseUrl='http://localhost:3002/api/login'

const login=async(crendentials)=>{
    const response=await axios.post(baseUrl,crendentials)
    console.log(response.data);
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login
}