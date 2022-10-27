import axios from "axios";
import { Route } from "react-router";

const URL = "http://localhost:5000/"
export const createUser= async function(userObj){
    const Route = "user/create"
    axios
    .post(`${URL+Route}`, userObj)
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });
}
