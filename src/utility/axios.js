import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:3001/user',
    timeout: 3000,
    //headers: {'X-Custom-Header': 'foobar'}
  });
  export default instance;