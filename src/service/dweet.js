export default class DweetService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getDweets(username) {
    const query = username ? `?username=${username}` : '';
    const response = await fetch(`${this.baseURL}/dweets${query}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  }

  async postDweet(text) {
    const response = await fetch(`${this.baseURL}/dweets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
        username: 'danny',
        name: 'danny',
        url: 'https://avatars.githubusercontent.com/u/99000722?v=4',
      }),
    });
    const data = await response.json();
    if (response.status !== 201) {
      throw new Error(data.message);
    }
    return data;
  }

  async deleteDweet(dweetId) {
    const response = await fetch(`${this.baseURL}/dweets/${dweetId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status !== 204) {
      throw new Error('An unexpected error has occurred');
    }
  }

  async updateDweet(dweetId, text) {
    const response = await fetch(`${this.baseURL}/dweets/${dweetId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
      }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  }
}
