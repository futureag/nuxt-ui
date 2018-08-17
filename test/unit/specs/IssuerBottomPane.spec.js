// /* eslint-disable spaced-comment*/
// /* eslint-disable no-undef*/
// /* eslint-disable no-unused-expressions*/
// import { mount, createLocalVue } from '@vue/test-utils'
// import Vuex from 'vuex'
// import IssuerBottomPane from '../../../components/IssuerBottomPane'

// const localVue = createLocalVue()
// localVue.use(Vuex)

// describe('IssuerBottomPane.vue', () => {
//   let store
//   let getters

//   beforeEach(() => {
//     getters = {
//       'issuer/issuerConfiguration': () => ({
//         'issuer-bottom-pane-background': ''
//       })
//     }
//     store = new Vuex.Store({
//       getters
//     })
//   })
//   it('contains text left slot', () => {
//     const wrapper = mount(IssuerBottomPane, { store, localVue })
//     return wrapper.vm.$nextTick().then(() => {
//       expect(wrapper.findAll('.text-container')).not.to.be.null
//     })
//   })
// })
