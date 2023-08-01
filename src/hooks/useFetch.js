import axios from "axios";
import { useState } from "react";


export default function useFetch(url) {

 const [infoApi, setInfoApi] = useState()
 
 const getApi = () => {
  axios.get(url)
  .then(resp => setInfoApi(resp.data))
  .catch(error => console.error(error))

 }

 const getTypeApi = urlType => {
    axios.get(urlType)
    .then(resp => {
        const obj = {
            results: resp.data.pokemon.map(e => e.pokemon)
        }
        setInfoApi(obj)
    })
    .catch(error => console.error(error))
 }

 return [infoApi, getApi, getTypeApi]
}
