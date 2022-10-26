import { expect } from 'chai';
import CLWAPI from '../dist/index.js';

describe('# Exports a class', () => {
  it('should provide a CLWAPI class', () => {
    const x = new CLWAPI();
    expect(typeof x).to.equal('object');
  });
});
