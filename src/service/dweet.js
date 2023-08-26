export default class DweetService {
  constructor(http) {
    this.http = http;
  }

  async getDweets(username) {
    const query = username ? `?username=${username}` : '';
    return this.http.fetch(`/dweets${query}`, {
      method: 'GET',
    });
  }

  async postDweet(text) {
    return this.http.fetch(`/dweets`, {
      method: 'POST',
      body: JSON.stringify({
        text,
        username: 'danny',
        name: 'danny',
        url: 'https://avatars.githubusercontent.com/u/99000722?v=4',
      }),
    });
  }

  async deleteDweet(dweetId) {
    return this.http.fetch(`/dweets/${dweetId}`, {
      method: 'DELETE',
    });
  }

  async updateDweet(dweetId, text) {
    return this.http.fetch(`/dweets/${dweetId}`, {
      method: 'PUT',
      body: JSON.stringify({
        text,
      }),
    });
  }
}
