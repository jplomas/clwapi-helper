import axios from 'axios';
class CLWAPI {
  constructor (url, username, password) {
    this.url = url;
    this.username = username;
    this.password = password;
    this.lastStatus = null;
    this.lastData = null;
    this.expires = null;
    this.token = null;
    this.lastCallTime = null;
  }

  async login () {
    try {
      const callTime = new Date();
      if (this.expires && this.expires > callTime) {
        // already logged in
        console.log('already logged in');
        return true;
      }
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
      this.token = response.data.token;
      this.lastStatus = response.data.status;
      if (response.status === 200) {
        /* provides access for 15 minutes, docs state:
        The authentication token will allow:
          - requests at a rate of no more than one request every 20 seconds
          - up to 50 requests per token
          - access for up to 20 minutes
        The token must be re-used for subsequent calls within the 10 minute window
        */
        const now = new Date();
        this.expires = new Date(now.getTime() + 15 * 60000);
        this.lastCallTime = null;
        return true;
      } else {
        this.lastStatus = 403;
        this.token = null;
        this.expires = null;
        return false;
      }
    } catch (error) {
      /*
      // MOCK success:
      console.log('mocking success');
      this.token = 'token here';
      this.lastStatus = 200;
      const now = new Date();
      this.expires = new Date(now.getTime() + 15 * 60000);
      this.lastData = { data: 'mock data' };
      this.lastCallTime = null;
      return true;
      */
      this.lastStatus = 403;
      this.token = null;
      this.expires = null;
      return false;
    }
  }

  async get (path) {
    try {
      const callTime = new Date();
      if (this.expires && this.expires > callTime) {
        // already logged in
        console.log('already logged in');
      } else {
        const login = await this.login();
        if (!login) {
          return false;
        }
      }
      const now = new Date();
      if (this.lastCallTime && now - this.lastCallTime < 20000) {
        await this.wait(20000 - (now - this.lastCallTime));
      }
      this.lastCallTime = now;
      const response = await axios.get(`${this.url}/publicapi/${this.token}/${path}`);
      this.lastStatus = response.status;
      this.lastData = response.data;
      return true;
    } catch (error) {
      this.lastStatus = 403;
      this.lastData = null;
      return false;
    }
  }

  async wait (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default CLWAPI;
