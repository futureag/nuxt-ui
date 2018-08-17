// /* eslint-disable spaced-comment*/
// /* eslint-disable no-undef*/
// /* eslint-disable no-unused-expressions*/

// import { mount, createLocalVue } from '@vue/test-utils'
// import Vuex from 'vuex'
// import QuickContact from '@/components/QuickContact'

// const localVue = createLocalVue()
// localVue.use(Vuex)

// describe('QuickContact.vue', () => {
//   let getters
//   let store

//   beforeEach(() => {
//     getters = {
//       'issuer/issuerConfiguration': () => ({
//         'issuer-contact-email': 'test@mail.com'
//       }),
//       'issuer/socials': () => [
//         {
//           id: 0,
//           name: 'Telegram',
//           icon: `logo-telegram.png`,
//           alt: 'Talk to us on Telegram',
//           url: 'http://www.telegram.com'
//         },
//         {
//           id: 1,
//           name: 'Whatsapp',
//           icon: `logo-whatsapp.png`,
//           alt: 'Talk to us on Whatsapp',
//           url: 'http://www.whatsapp.com'
//         },
//         {
//           id: 2,
//           name: 'Twitter',
//           icon: `logo-twitter.png`,
//           alt: 'Talk to us on Twitter',
//           url: 'http://www.twitter.com'
//         }
//       ]
//     }
//     store = new Vuex.Store({
//       getters
//     })
//   })

//   it('contains three social links', () => {
//     const wrapper = mount(QuickContact, { store, localVue })

//     return wrapper.vm.$nextTick().then(() => {
//       expect(wrapper.findAll('.quickcontact-list-item').length).to.equal(3)
//     })
//   })
// })
