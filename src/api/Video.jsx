import axios from "axios";

export default class Video {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  async getVideoList(keyword) {
    // return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    return this.#searchByKeyword(keyword);
  }

  async #searchByKeyword(keyword) {
    return this.httpClient
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          q: keyword,
        },
      })
      .then((res) => res.data.items);
  }

  async #mostPopular() {
    return axios.get(`/videos/search.json`).then((res) => res.data.items);
  }
}

// export const getVideoList = async (keyword) => {
//   // const data = await res.json(); // Response 객체를 한 번만 json으로 변환
//   // return data.items;
//   return axios
//     .get(
//       `/search?part=snippet&maxResults=25&q=${keyword}&key=`
//     )
//     .then((res) => res.data.items);
// };
