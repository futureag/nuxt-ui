// /* eslint-disable spaced-comment*/
// /* eslint-disable no-undef*/
// /* eslint-disable no-unused-expressions*/

// import { mount, createLocalVue } from '@vue/test-utils'
// import Vuex from 'vuex'
// import DocumentsContainer from '../../../components/DocumentsContainer'

// const localVue = createLocalVue()
// localVue.use(Vuex)

// describe('DocumentsContainer.vue', () => {
//   let store
//   let actions
//   let getters

//   beforeEach(() => {
//     actions = {
//       'issuer/getDocuments': sinon.spy()
//     }
//     getters = {
//       'user/getUserObj': () => ({
//         email: 'test@test.com'
//       }),
//       'issuer/basicDocuments': () => [
//         {
//           name: 'Document 1',
//           url: '/'
//         },
//         {
//           name: 'Document 2',
//           url: '/'
//         },
//         {
//           name: 'Document 3',
//           url: '/'
//         }
//       ]
//     }
//     store = new Vuex.Store({
//       getters,
//       actions
//     })
//   })

//   it('contains three document boxes', () => {
//     const wrapper = mount(DocumentsContainer, { store, localVue })
//     return wrapper.vm.$nextTick().then(() => {
//       expect(wrapper.findAll('.box').length).to.equal(3)
//     })
//   })

//   it('has three arrow down icons', () => {
//     const wrapper = mount(DocumentsContainer, { store, localVue })
//     return wrapper.vm.$nextTick().then(() => {
//       expect(wrapper.findAll('.download-icon').length).to.equal(3)
//     })
//   })

//   it('contains three document icons', () => {
//     const wrapper = mount(DocumentsContainer, { store, localVue })
//     return wrapper.vm.$nextTick().then(() => {
//       expect(wrapper.findAll('.document-icon').length).to.equal(3)
//     })
//   })
// })
