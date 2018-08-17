import Vue from 'vue'

export const actions = {
  async getUserData ({ commit, dispatch }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let userId = this.state.user.userObj.id
      let userResponse = await this.$axios.$get(`/users/${userId}`)
      commit('UPDATE_USER_DATA', userResponse)
      if (userResponse.countryId) {
        await dispatch('getCountryObj', userResponse.countryId)
      }
      return userResponse
    } catch (e) {
      this.$log.error('getUserData: backend call error')
    }
  },
  async patchUser ({ commit, dispatch }, data) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let userId = this.state.user.userObj.id
      let userResponse = await this.$axios.$patch(`/users/${userId}`, data)
      // updating the user store
      await dispatch('getUserData')
      return userResponse
    } catch (e) {
      this.$log.error('patchUser: backend call error', e)
    }
  },
  async patchTokenWallet ({ commit, dispatch }, data) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let userId = this.state.user.userObj.id
      const url = `/users/${userId}/token-wallets/${data.id}`
      await this.$axios.$patch(url, { name: data.name })
      await dispatch('getTokenWallets')
    } catch (e) {
      this.$log.error('patchTokenWallet: backend call error')
    }
  },
  async registerTokenWallet ({ dispatch }, walletAddress) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      const userId = this.state.user.userObj.id
      const url = `/users/${userId}/token-wallets`
      return await this.$axios.$post(url, { address: walletAddress })
    } catch (e) {
      this.$log.error('registerTokenWallet: backend call error')
      return e.response
    }
  },
  async deleteTokenWallet ({ commit, dispatch }, walletId) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let userId = this.state.user.userObj.id
      await this.$axios.$delete(`/users/${userId}/token-wallets/${walletId}`)
      await dispatch('getTokenWallets')
    } catch (e) {
      this.$log.error('deleteTokenWallet: backend call error')
    }
  },
  async getTokenWallets ({ commit }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      const url = `/users/${this.state.user.userObj.id}/token-wallets`
      let walletsResponse = await this.$axios.$get(url)
      if (walletsResponse) {
        commit('UPDATE_USER_WALLETS_LIST', walletsResponse)
      }
    } catch (e) {
      this.$log.error('getTokenWallets: backend call error')
    }
  },
  async getDepositWallet ({ commit }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let userId = this.state.user.userObj.id
      let depositWallet = await this.$axios.$get(`/users/${userId}/deposit-wallet`)
      if (depositWallet) {
        commit('UPDATE_USER_DEPOSIT_WALLET', depositWallet)
      }
    } catch (e) {
      this.$log.error('getDepositWallet: backend call error')
    }
  },
  async getIssuedTokens ({ commit }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let userId = this.state.user.userObj.id
      let issuances = await this.$axios.$get(`/users/${userId}/token-issuances`)
      if (issuances) {
        commit('UPDATE_USER_TOKEN_ISSUANCES', issuances)
      }
    } catch (e) {
      this.$log.error('getDepositWallet: backend call error')
    }
  },
  async getCountriesList ({ commit }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let coutriesResponse = await this.$axios.$get(`/geo/countries`)
      if (coutriesResponse) {
        commit('UPDATE_USER_COUNTRIES_LIST', coutriesResponse)
      }
    } catch (e) {
      this.$log.error('getCountriesList: backend call error')
    }
  },
  async getStatesList ({ commit }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let statesResponse = await this.$axios.$get(`/geo/states`)
      if (statesResponse) {
        commit('UPDATE_USER_STATES_LIST', statesResponse)
      }
    } catch (e) {
      this.$log.error('getStatesList: backend call error')
    }
  },
  async getCountryObj ({ commit, dispatch }, countryId) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      if (!this.state.user.userCountryObj || this.state.user.userCountryObj.id !== countryId) {
        let countryResponse = await this.$axios.$get(`/geo/countries/${countryId}`)
        commit('UPDATE_USER_COUNTRY', countryResponse)
        Vue.nextTick(async () => {
          await dispatch('investment/getUserInvestmentAgreements', true, { root: true })
        })
      }
    } catch (e) {
      this.$log.error('getCountryObj: backend call error')
    }
  },
  async isFinishedInvestmentRequest ({ commit, dispatch }) {
    await dispatch('investment/getInvestmentRequest', false, { root: true })
    if (this.state.investment.investmentRequest.status !== 'in_progress') {
      return true
    }
    return false
  },
  async sendEmail ({ commit, dispatch }, data) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      const response = await this.$axios.$post('/message', data)
      if (response) {
        return true
      }
      return false
    } catch (e) {
      this.$log.error('sendEmail: backend call error')
    }
  },
  async resetInvestmentRequest ({ commit, dispatch }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let userId = this.state.user.userObj.id
      await this.$axios.$post(`/users/${userId}/reset`)
      await dispatch('investment/getInvestmentRequest', false, { root: true })
    } catch (e) {
      this.$log.error(
        'resetInvestmentRequest: backend call error. Is the backend running in production?'
      )
    }
  },
  async getRequiredDataForAfterInvestment ({ commit, dispatch }) {
    let promiseCollection = []
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      if (
        !this.state.user.deposits ||
        (this.state.user.deposits && !this.state.user.deposits.length)
      ) {
        promiseCollection.push('getDeposits')
      }
      if (
        !this.state.user.issuances ||
        (this.state.user.issuances && !this.state.user.issuances.length)
      ) {
        promiseCollection.push('getIssuances')
      }
      if (!Object.keys(this.state.user.depositWallet).length) {
        promiseCollection.push('getDepositWallet')
      }
      if (!this.state.user.tokenIssuances.length) {
        promiseCollection.push('getIssuedTokens')
      }
      if (!this.state.user.tokenWallets.length) {
        promiseCollection.push('getTokenWallets')
      }
      if (!this.state.user.payouts.length) {
        promiseCollection.push('getPayouts')
      }
      await Promise.all(
        promiseCollection.map(async (x) => {
          await dispatch(x)
        })
      )
    } catch (e) {
      this.$log.error('getRequiredDataForAfterInvestment: backend call error', e)
    }
  },
  async getDeposits ({ commit }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let userId = this.state.user.userObj.id
      let userDeposits = await this.$axios.$get(`/users/${userId}/deposit-transactions`)
      if (userDeposits) {
        commit('UPDATE_USER_DEPOSITS', userDeposits)
      }
    } catch (e) {
      this.$log.error('getDeposits: backend call error')
    }
  },
  async getIssuances ({ commit }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let userId = this.state.user.userObj.id
      let userIssuances = await this.$axios.$get(`/users/${userId}/token-issuances`)
      if (userIssuances) {
        commit('UPDATE_USER_ISSUANCES', userIssuances)
      }
    } catch (e) {
      this.$log.error('getIssuances: backend call error')
    }
  },
  async getPayouts ({ commit }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let userId = this.state.user.userObj.id
      let userPayouts = await this.$axios.$get(`/users/${userId}/payouts`)
      if (userPayouts) {
        commit('UPDATE_USER_PAYOUTS', userPayouts)
      }
    } catch (e) {
      this.$log.error('getIssuances: backend call error')
    }
  },
  async getCountryBank ({ commit }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let countryId = this.state.user.userObj.countryId
      let bank = await this.$axios.$get(`/geo/countries/${countryId}/bank`)
      if (bank) {
        commit('UPDATE_USER_COUNTRY_BANK', bank)
      }
    } catch (e) {
      this.$log.error('getCountryBank: backend call error')
    }
  },
  async transferTreasury ({ commit }, destinationWallet) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let userId = this.state.user.userObj.id
      await this.$axios.$post(`/users/${userId}/treasury/transfer/${destinationWallet.id}`)
      // let treasuryTransfer = await this.$axios.$get(`/users/${userId}/treasury/transfer/${walletId}`)
      // if (treasuryTransfer) {
      //   commit('UPDATE_USER_PAYOUTS', userPayouts)
      // }
    } catch (e) {
      this.$log.error('transferTreasury: backend call error', e.response.data.error)
    }
  }
}
