import axios from "axios";
import { Route } from "react-router";

const URL = "https://spotify-higher-lower-backend.herokuapp.com/"

//Sends post request to backend to create new user
export const createUser= async function(userObj){
    const Route = "user/create"
    axios
    .post(`${URL+Route}`, userObj)
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });
}

export const addUserScore= async function(userObj){
  const Route = "user/update"
  axios
  .post(`${URL+Route}`, userObj)
  .then((res) => {
    console.log(res);
    console.log(res.data);
  });
}

export const getUserScores= async function(userObj){
  const Route = "user/scores"
  const Response = await axios
  .post(`${URL+Route}`, userObj)
  .then((res) => {
    console.log(res.data)
    return res.data
  });
 return await Response
}
