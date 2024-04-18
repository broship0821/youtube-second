import axios from "axios";

export default class FakeVideoClient {
  async getVideoList() {
    return axios.get(`/videos/search.json`);
  }

  async videos() {
    return axios.get(`/videos/popular.json`);
  }
}
