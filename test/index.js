import { expect } from 'chai';
import dotenv from 'dotenv';
import CLWAPI from '../dist/index.js';

dotenv.config();
const url = process.env.CLW_URL;
const username = process.env.CLW_USERNAME;
const password = process.env.CLW_PASSWORD;

console.log({ url, username, password });

const x = new CLWAPI(url, username, password);

describe('# Exports a class', () => {
  it('should provide a CLWAPI class', () => {
    expect(typeof x).to.equal('object');
  });
  it('should provide a getToken method', () => {
    const x = new CLWAPI();
    expect(typeof x.getToken).to.equal('function');
  });
});

describe('# API functionality', () => {
  it('can fetch a login token', async () => {
    console.log(await x.getToken());
    expect(typeof x.getToken).to.equal('string');
  });
});
