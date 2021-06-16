import axios from "axios";

//Watchmode API key 

const key ="HvQeYWF8egyTqO4MLNzG4SUy7NPg0om3WPMGUXTt"
const BASEURL = "";

export default {
  getEmployee: function () {
      return axios.get(BASEURL);
  }
};


