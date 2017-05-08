var expect = require('chai').expect
import passwordMeter from '../app/lib/passwordMeter'

describe('passwordMeter', () => {
  it('should return weak by default', () => {
    expect(passwordMeter('')).to.be.equal('worst')
  })
})
