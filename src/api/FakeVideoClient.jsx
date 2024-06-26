import axios from "axios";

export default class FakeVideoClient {
  async getVideoList({ params }) {
    return params.relatedToVideoId
      ? axios.get(`/videos/related.json`)
      : axios.get(`/videos/search.json`);
  }

  async videos() {
    return axios.get(`/videos/popular.json`);
  }

  async channels() {
    return axios.get(`/videos/channels.json`);
  }
}
