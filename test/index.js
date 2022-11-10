import { expect } from 'chai';
import dotenv from 'dotenv';
import CLWAPI from '../dist/index.js';

dotenv.config();
const url = process.env.CLW_URL;
const username = process.env.CLW_USERNAME;
const password = process.env.CLW_PASSWORD;

// console.log({ url, username, password });

const x = new CLWAPI(url, username, password);

describe('# Exports a class', () => {
  it('should provide a CLWAPI class', () => {
    expect(typeof x).to.equal('object');
  });
  it('should provide a login method', () => {
    const x = new CLWAPI();
    expect(typeof x.login).to.equal('function');
  });
});

describe('# API functionality', () => {
  it('can fetch a login token', async () => {
    const tokenCall = await x.login();
    console.log(x.token);
    expect(tokenCall).to.equal(true);
  });
  it('# has an expiry Date', async () => {
    console.log(x.expires);
    expect(x.expires instanceof Date).to.equal(true);
  });
  it('will reuse login tokens if not expired', async () => {
    const tokenCall = await x.login();
    expect(tokenCall).to.equal(true);
  });
});
