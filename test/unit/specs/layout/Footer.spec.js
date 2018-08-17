// /* eslint-disable spaced-comment*/
// /* eslint-disable no-undef*/
// /* eslint-disable no-unused-expressions*/

// import { shallow, createLocalVue } from '@vue/test-utils'
// import Vuex from 'vuex'
// import Footer from '@/components/layout/Footer'

// const localVue = createLocalVue()
// localVue.use(Vuex)

// describe('Footer.vue', () => {
//   let store
//   let getters

//   beforeEach(() => {
//     getters = {
//       'issuer/issuerConfiguration': () => {
//         return {
//           footerLinks: [
//             { name: 'Home', url: '/home' },
//             { name: 'About', url: '/about' },
//             { name: 'Companies', url: '/companies' },
//             { name: 'Privacy', url: '/privacy' },
//             { name: 'Legal Notice', url: '/legal' }
//           ]
//         }
//       }
//     }
//     store = new Vuex.Store({
//       getters
//     })
//   })

//   it('Has navbar menu', () => {
//     // const wrapper = shallow(Footer, { store, localVue })
//     const wrapper = shallow(Footer, { store, localVue })

//     return wrapper.vm.$nextTick().then(() => {
//       expect(wrapper.findAll('.navbar-menu').length).to.equal(1)
//     })
//   })

//   it('Has links in the navbar', () => {
//     const wrapper = shallow(Footer, { store, localVue })

//     return wrapper.vm.$nextTick().then(() => {
//       expect(wrapper.findAll('a.navbar-item').length).to.be.at.least(1)
//     })
//   })
// })
