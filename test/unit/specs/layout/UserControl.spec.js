// /* eslint-disable spaced-comment*/
// /* eslint-disable no-undef*/
// /* eslint-disable no-unused-expressions*/

// import { shallow, createLocalVue } from '@vue/test-utils'
// import Vuex from 'vuex'
// import UserControl from '@/components/layout/UserControl'

// const localVue = createLocalVue()
// localVue.use(Vuex)

// describe('UserControl.vue', () => {
//   let store
//   let actions
//   let getters

//   beforeEach(() => {
//     actions = {
//       'user/getUserData': sinon.spy()
//     }
//     getters = {
//       'user/getName': () => 'Max Mustermann',
//       'user/getInvestorId': () => 1234567
//     }
//     store = new Vuex.Store({
//       getters,
//       actions
//     })
//   })

//   it('Calling the get user data action', () => {
//     const wrapper = shallow(UserControl, { store, localVue })

//     return wrapper.vm.$nextTick().then(() => {
//       expect(actions['user/getUserData'].called).to.be.true
//     })
//   })

//   it('Has correct username', () => {
//     const wrapper = shallow(UserControl, { store, localVue })

//     return wrapper.vm.$nextTick().then(() => {
//       expect(wrapper.find('.name').text()).to.have.string('Max Mustermann')
//     })
//   })

//   it('Has correct userid', () => {
//     const wrapper = shallow(UserControl, { store, localVue })

//     return wrapper.vm.$nextTick().then(() => {
//       expect(wrapper.find('.id').text()).to.have.string('1234567')
//     })
//   })

//   it('Has two control icons', () => {
//     const wrapper = shallow(UserControl, { store, localVue })

//     return wrapper.vm.$nextTick().then(() => {
//       expect(wrapper.findAll('.icon').length).to.equal(2)
//     })
//   })

//   it('Has user icon', () => {
//     const wrapper = shallow(UserControl, { store, localVue })

//     return wrapper.vm.$nextTick().then(() => {
//       expect(wrapper.findAll('.user-icon').length).to.equal(1)
//     })
//   })

//   it('Has logout icon', () => {
//     const wrapper = shallow(UserControl, { store, localVue })

//     return wrapper.vm.$nextTick().then(() => {
//       expect(wrapper.findAll('.logout-icon').length).to.equal(1)
//     })
//   })
// })
