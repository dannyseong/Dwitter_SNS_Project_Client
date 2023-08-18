export default class DweetService {
  dweets = [
    {
      id: 1,
      text: '드림코딩에서 강의 들으면 너무 좋으다',
      createdAt: '2021-05-09T04:20:57.000Z',
      name: 'Bob',
      username: 'bob',
      url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
    {
      id: 2,
      text: '드림코딩에서 강의 들으면 너무 좋으다',
      createdAt: '2021-05-09T04:20:57.000Z',
      name: 'John',
      username: 'john',
      url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
  ];

  async getDweets(username) {
    return username
      ? this.dweets.filter((d) => d.username === username)
      : this.dweets;
  }

  async postDweet(text) {
    const dweet = {
      id: Date.now(),
      createdAt: new Date(),
      name: 'danny',
      username: 'danny',
      text,
    };
    this.dweets.push(dweet);
    return dweet;
  }

  async deleteDweet(dweetId) {
    this.dweets = this.dweets.filter((d) => d.id !== dweetId);
  }

  async updateDweet(dweetId, text) {
    const dweet = this.dweets.find((d) => d.id === dweetId);
    if (!dweet) {
      throw new Error('tweet not found!');
    }
    dweet.text = text;
    return dweet;
  }
}
