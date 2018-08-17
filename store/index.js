import Vuex from 'vuex';
import user from './modules/user/index';
import issuer from './modules/issuer/index';
import text from './modules/text/index';
import investment from './modules/investment/index';

// eslint-disable-next-line no-unused-vars
const createStore = () => {
  return new Vuex.Store({
    actions: {
      async nuxtServerInit({ dispatch, commit }, { req, route, app, store }) {
        // return Promise.all([
        //   dispatch('issuer/getIssuerConfigurationVariables'),
        //   dispatch('text/getTexts')
        // ])
      }
    },
    modules: {
      user,
      issuer,
      text,
      investment
    }
  });
};

export default createStore;
