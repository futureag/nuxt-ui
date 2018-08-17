export const actions = {
  async getIssuerConfigurationVariables ({ commit }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let issuerConfiguration = await this.$axios.$get('/configuration')
      commit('UPDATE_ISSUER_CONFIGURATION', issuerConfiguration)
    } catch (e) {
      console.log('getIssuerEnvironmentVariables: backend call error', e)
    }
  },

  async getDocuments ({ commit }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      if (!this.state.issuer.documents.length) {
        let documents = await this.$axios.$get('/documents')
        commit('UPDATE_ISSUER_DOCUMENTS', documents)
      }
    } catch (e) {
      // console.log('getDocuments: backend call error')
    }
  },

  async getFAQ ({ commit }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      if (!this.state.issuer.faq.length) {
        let faq = await this.$axios.$get('/faq')
        commit('UPDATE_ISSUER_FAQ', faq)
      }
    } catch (e) {
      console.log('getFAQ: backend call error')
    }
  }
}
