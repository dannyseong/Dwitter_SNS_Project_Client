export default class AuthService {
  constructor(http) {
    this.http = http;
  }
  async login(username, password) {
    console.log('login success!');
    return {
      username: 'sdh742',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2OTMyNjk3MjksImV4cCI6MTY5MzQ0MjUyOX0.2w25zV9z6AzMoo9au6LKh5_zGqwJLtaWsCYs77-X_QA',
    };
  }

  async me() {
    return {
      username: 'sdh742',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2OTMyNjk3MjksImV4cCI6MTY5MzQ0MjUyOX0.2w25zV9z6AzMoo9au6LKh5_zGqwJLtaWsCYs77-X_QA',
    };
  }

  async logout() {
    console.log('logout success!');
    return;
  }

  async signup(username, password, name, email, url) {
    console.log(
      `username: ${username}, password: ${password}, name: ${name}, email: ${email}, url: ${url}`
    );
    return {
      username: 'sdh742',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2OTMyNjk3MjksImV4cCI6MTY5MzQ0MjUyOX0.2w25zV9z6AzMoo9au6LKh5_zGqwJLtaWsCYs77-X_QA',
    };
  }
}
