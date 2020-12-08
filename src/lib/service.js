import axios from "axios";

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
    });
  }

  allExperiences() {
    return this.service
      .get("/full-experience", { })
      .then(({ data }) => data);
  }

  allProjects() {
    return this.service
      .get("/full-project", { })
      .then(({ data }) => data);
  }

}

const axiosRequestFunctions = new Service();

export default axiosRequestFunctions;
