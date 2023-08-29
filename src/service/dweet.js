export default class DweetService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async getDweets(username) {
    const query = username ? `?username=${username}` : '';
    return this.http.fetch(`/dweets${query}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });
  }

  async postDweet(text) {
    return this.http.fetch(`/dweets`, {
      method: 'POST',
      headers: this.getHeaders(),
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
      headers: this.getHeaders(),
    });
  }

  async updateDweet(dweetId, text) {
    return this.http.fetch(`/dweets/${dweetId}`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify({
        text,
      }),
    });
  }

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
