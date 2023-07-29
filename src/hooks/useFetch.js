import axios from "axios";
import { useState } from "react";


export default function useFetch(url) {

 const [infoApi, setInfoApi] = useState()
 
 const getApi = () => {
  axios.get(url)
  .then(resp => setInfoApi(resp.data))
  .catch(error => console.error(error))
 }

 return [infoApi, getApi]
}
