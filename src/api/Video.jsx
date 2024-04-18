export default class Video {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getVideoList(keyword) {
    // return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    return this.#searchByKeyword(keyword);
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .getVideoList({
        params: {
          part: "snippet",
          maxResults: 25,
          q: keyword,
        },
      })
      .then((res) => res.data.items);
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
