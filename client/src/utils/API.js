import axios from 'axios';
// axios.defaults.baseURL = 'http//localhost:3001';


export default {
  saveUser(data) {
    return axios.post("/api/user/signin", data)
  }
}

