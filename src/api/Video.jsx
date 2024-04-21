export default class Video {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getVideoList(keyword) {
    // return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    return this.#searchByKeyword(keyword);
  }

  async channelImgURL(id) {
    return this.apiClient
      .channels({ params: { part: "snippet", id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
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
