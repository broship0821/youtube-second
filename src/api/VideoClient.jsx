import axios from "axios";

export default class VideoClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  async getVideoList(params) {
    return this.httpClient.get("search", params);
  }

  async videos(params) {
    return this.httpClient.get("search", params);
  }

  async channels(params) {
    return this.httpClient.get("channels", params);
  }
}
