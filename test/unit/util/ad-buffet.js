import { AdBuffet } from '../../../src/util/ad-buffet'
import { AdPod } from '../../../src/util/ad-pod'
import { SortedList } from '../../../src/util/sorted-list'

export default (createInstance) => {
  describe('AdBuffet', () => {
    const createInstance = () => {
      const inst = new AdBuffet()
      return inst
    }

    describe('#ads', () => {
      it('gets ads', () => {
        const inst = createInstance()
        expect(inst.ads).to.be.an.instanceof(SortedList)
      })
    })

    describe('#adPod', () => {
      it('sets adPod', () => {
        const inst = createInstance()
        const value = new AdPod()
        inst.adPod = value
        expect(inst.adPod).to.equal(value)
      })
    })

    describe('#$type', () => {
      it('is AdBuffet', () => {
        const inst = createInstance()
        expect(inst.$type).to.equal('AdBuffet')
      })
    })
  })
}
