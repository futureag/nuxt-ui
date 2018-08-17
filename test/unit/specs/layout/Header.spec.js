// /* eslint-disable spaced-comment*/
// /* eslint-disable no-undef*/
// /* eslint-disable no-unused-expressions*/

// import { mount, createLocalVue } from '@vue/test-utils'
// import Vuex from 'vuex'
// import Header from '@/components/layout/Header'

// const localVue = createLocalVue()
// localVue.use(Vuex)

// describe('Header.vue', () => {
//   let store
//   let actions
//   let getters

//   beforeEach(() => {
//     actions = {
//       'user/getUserData': sinon.spy()
//     }
//     getters = {
//       'user/getName': () => 'Max Mustermann',
//       'user/getInvestorId': () => 1234567,
//       'issuer/issuerConfiguration': () => {
//         return {
//           headerLinks: [
//             { name: 'Home', url: '/home' },
//             { name: 'About', url: '/about' },
//             { name: 'Companies', url: '/companies' }
//           ]
//         }
//       }
//     }
//     store = new Vuex.Store({
//       getters,
//       actions
//     })
//   })

//   it('Has issuer logo', () => {
//     const wrapper = mount(Header, { store, localVue })

//     return wrapper.vm.$nextTick().then(() => {
//       expect(wrapper.findAll('.issuer-logo').length).to.equal(1)
//     })
//   })

//   it('Has mobile menu hamburger', () => {
//     const wrapper = mount(Header, { store, localVue })

//     return wrapper.vm.$nextTick().then(() => {
//       expect(wrapper.findAll('.burger').length).to.equal(1)
//     })
//   })

//   it('Has UserControl component', () => {
//     const wrapper = mount(Header, { store, localVue })

//     return wrapper.vm.$nextTick().then(() => {
//       expect(wrapper.findAll('.user-control-container').length).to.equal(1)
//     })
//   })
// })
