export const actions = {
  async getTexts ({ commit }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let texts = await this.$axios.$get('/texts')
      if (texts) {
        commit('UPDATE_TEXTS', texts)
      }
    } catch (e) {
      this.$log.error('getTexts: backend call error')
    }
  }
}
