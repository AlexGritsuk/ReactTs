import axios from "axios";


axios.defaults.baseURL = "https://fakestoreapi.com/";

const httpService = {
  get: axios.get,
}; 

export default httpService;
