import axios from 'axios';
class CLWAPI {
  constructor (url, username, password) {
    this.url = url;
    this.username = username;
    this.password = password;
  }

  async getToken () {
    const response = await axios.post(
      `${this.url}/publicapi/login/`,
      `username=${this.username}&password=${this.password}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json'
        }
      }
    );
    const data = await response;
    console.log(data);
    return data.token;
  }
}

export default CLWAPI;
