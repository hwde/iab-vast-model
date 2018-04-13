export default (createInstance) => {
  describe('#clickThrough', () => {
    it('sets clickThrough', () => {
      const inst = createInstance()
      const value = 'https://example.com/clickthrough'
      inst.clickThrough = value
      expect(inst.clickThrough).to.equal(value)
    })
  })

  describe('#clickTrackings', () => {
    it('gets clickTrackings', () => {
      const inst = createInstance()
      expect(inst.clickTrackings).to.be.an.instanceof(Array)
    })
  })
}
