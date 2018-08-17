export const actions = {
  async startInvestmentWizard ({ commit, dispatch }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    this.state.investment.isFirstCurrencyLoad = true
    try {
      let userId = this.state.user.userObj.id
      try {
        await this.$axios.$post(`/users/${userId}/investment-request`)
      } catch (e) {}
      await dispatch('user/getUserData', null, { root: true })
      await dispatch('getRequiredDataForInvestment')
    } catch (e) {
      this.$log.error('startInvestmentWizard: backend call error', e)
    }
  },
  async getRequiredDataForInvestment ({ commit, dispatch }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      if (!Object.keys(this.state.investment.investmentRequest).length) {
        await dispatch('getInvestmentRequest')
      }
      if (!this.state.user.countriesList.length) {
        await dispatch('user/getCountriesList', null, { root: true })
      }
      if (!this.state.investment.currenciesList.length) {
        await dispatch('getCurrencies')
      }
      if (!this.state.investment.currenciesRates) {
        dispatch('getCurrenciesRates')
      }
      if (!Object.keys(this.state.investment.investmentAgreements).length) {
        dispatch('getUserInvestmentAgreements')
      }
      if (!Object.keys(this.state.investment.subscriptionAgreement).length) {
        dispatch('getSubscriptionAgreement')
      }
      if (!this.state.investment.documents.frontSide) {
        dispatch('getUserDocuments')
      }
    } catch (e) {
      this.$log.error('getRequiredDataForInvestment: backend call error', e)
    }
  },
  async getAllowedDocuments ({ commit }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let countryCode = this.state.user.userCountryObj.code3
      let allowedDocumentsResponse = await this.$axios.$get(
        `/kyc-provider/documents?country=${countryCode}`
      )
      commit('UPDATE_ALLOWED_DOCUMENTS', allowedDocumentsResponse)
    } catch (e) {
      this.$log.error('getAllowedDocuments: backend call error')
    }
  },
  async getUserDocuments ({ commit }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let userId = this.state.user.userObj.id
      let userDocuments = await this.$axios.$get(`/users/${userId}/documents`)
      let frontDocuments = userDocuments.filter((x) => x.documentFace === 'front')
      let backDocuments = userDocuments.filter((x) => x.documentFace === 'back')
      if (frontDocuments.length) {
        let latestDocument = frontDocuments[frontDocuments.length - 1]
        let documentBinaryStream = await this.$axios.$get(
          `/users/${userId}/documents/${latestDocument.id}?view=file`
        )
        latestDocument.fileStream = documentBinaryStream
        commit('UPDATE_USER_FRONT_SIDE_DOCUMENT', latestDocument)
      }
      if (backDocuments.length) {
        let latestDocument = backDocuments[backDocuments.length - 1]
        let documentBinaryStream = await this.$axios.$get(
          `/users/${userId}/documents/${latestDocument.id}?view=file`
        )
        latestDocument.fileStream = documentBinaryStream
        commit('UPDATE_USER_BACK_SIDE_DOCUMENT', latestDocument)
      }
    } catch (e) {
      this.$log.error('getUserDocuments: backend call error')
    }
  },
  async uploadKYCDocument ({ commit }, uploadObj) {
    commit('SET_LOADING_TRUE')
    commit('SET_WIZARD_STEP_PENDING_STATUS', true)
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let userId = this.state.user.userObj.id
      let formData = new FormData()
      formData.append('type', uploadObj.type)
      formData.append('documentFace', uploadObj.documentFace)
      formData.append('file', uploadObj.file, uploadObj.file.name)
      let uploadDocument = await this.$axios.$post(`/users/${userId}/documents`, formData)
      let documentBinaryStream = await this.$axios.$get(
        `/users/${userId}/documents/${uploadDocument.id}?view=file`
      )
      uploadDocument.fileStream = documentBinaryStream
      if (uploadObj.documentFace === 'front') {
        commit('UPDATE_USER_FRONT_SIDE_DOCUMENT', uploadDocument)
      }
      if (uploadObj.documentFace === 'back') {
        commit('UPDATE_USER_BACK_SIDE_DOCUMENT', uploadDocument)
      }
    } catch (e) {
      this.$log.error('uploadKYCDocument: backend call error', e)
    } finally {
      commit('SET_LOADING_FALSE')
      commit('SET_WIZARD_STEP_PENDING_STATUS', false)
    }
  },
  async deleteUserDocument ({ commit }, documentId) {
    commit('SET_LOADING_TRUE')
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let userId = this.state.user.userObj.id
      await this.$axios.$delete(`/users/${userId}/documents/${documentId}`)
      // delete from store
      commit('REMOVE_USER_DOCUMENT', documentId)
    } catch (e) {
      this.$log.error('deleteKYCDocument: backend call error', e)
    } finally {
      commit('SET_LOADING_FALSE')
    }
  },
  async getInvestmentRequest ({ commit }, updateStep = true) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let userId = this.state.user.userObj.id
      let investmentRequest = await this.$axios.$get(`/users/${userId}/investment-request`)
      commit('UPDATE_USER_INVESTMENT_REQUEST', [ investmentRequest, updateStep ])
    } catch (e) {
      if (e.response.status !== 404) {
        this.$log.error('getInvestmentRequest: backend call error')
      }
    }
  },
  async patchInvestmentRequest ({ commit, dispatch }, patchDataObj) {
    commit('SET_WIZARD_STEP_PENDING_STATUS', true)
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let investmentRequest = this.state.investment.investmentRequest
      let requestId = investmentRequest.id
      let userId = this.state.user.userObj.id
      await this.$axios.$patch(`/users/${userId}/investment-request/${requestId}`, patchDataObj)
      await dispatch('getInvestmentRequest', false)
    } catch (e) {
      this.$log.error('patchInvestmentRequest: backend call error')
    } finally {
      commit('SET_WIZARD_STEP_PENDING_STATUS', false)
    }
  },
  async addReceiveWallet ({ commit, dispatch }, patchDataObj) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let investmentRequest = this.state.investment.investmentRequest
      let requestId = investmentRequest.id
      let userId = this.state.user.userObj.id
      return await this.$axios.$patch(
        `/users/${userId}/investment-request/${requestId}/receive-wallet`,
        patchDataObj
      )
    } catch (e) {
      this.$log.error('addReceiveWallet: backend call error')
      return e.response
    }
  },
  async finalizeInvestmentRequest ({ commit, dispatch }, postDataObj) {
    commit('SET_WIZARD_STEP_PENDING_STATUS', true)
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let investmentRequest = this.state.investment.investmentRequest
      let requestId = investmentRequest.id
      let userId = this.state.user.userObj.id
      let finalizeOk = await this.$axios.$post(
        `/users/${userId}/investment-request/${requestId}`,
        postDataObj
      )
      await dispatch('getInvestmentRequest', false)
      this.$log.info('finalizeOk action: ', finalizeOk)
    } catch (e) {
      this.$log.error('finazlizeInvestmentRequest: backend call error')
    } finally {
      commit('SET_WIZARD_STEP_PENDING_STATUS', false)
    }
  },
  async increaseInvestmentWizardStep ({ commit, dispatch }) {
    let comingStep = this.state.investment.investmentWizardCurrentStepNum + 1
    let investmentRequest = this.state.investment.investmentRequest
    // Update DB only if the coming step is bigger than the user highest visited step
    if (comingStep > investmentRequest.currentWizardStep) {
      await dispatch('patchInvestmentRequest', { currentWizardStep: comingStep })
      if (comingStep === 5) {
        // requesting the final agreement
        dispatch('patchInvestmentRequest', { subscriptionAgreementStatus: 'requested' })
      }
    }
    commit('INCREASE_INVESTMENT_WIZARD_STEP_NUM')
  },
  async decreaseInvestmentWizardStep ({ commit }) {
    commit('DECREASE_INVESTMENT_WIZARD_STEP_NUM')
  },
  async getUserInvestmentAgreements ({ commit }, forceCall = false) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let userId = this.state.user.userObj.id
      if (forceCall || !Object.keys(this.state.investment.investmentAgreements).length) {
        let agreementsResponse = await this.$axios.$get(`/users/${userId}/agreements`)
        commit('UPDATE_USER_INVESTMENT_AGREEMENTS', agreementsResponse)
      }
    } catch (e) {
      this.$log.error('getUserInvestmentAgreements: backend call error', e)
    }
  },
  async getCurrencies ({ commit }) {
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      if (!this.state.investment.currenciesList.length) {
        let currencies = await this.$axios.$get(`/currencies`)
        commit('UPDATE_CURRENCIES_LIST', currencies)
      }
    } catch (e) {
      this.$log.error('getCurrencies: backend call error')
    }
  },
  async getCurrenciesRates ({ commit }) {
    commit('SET_WIZARD_STEP_PENDING_STATUS', true)
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      let currenciesRates = await this.$axios.$get(`/currencies/rates`)
      if (currenciesRates) {
        commit('UPDATE_CURRENCIES_RATES', currenciesRates)
      }
    } catch (e) {
      this.$log.error('getCurrenciesRates: backend call error')
    } finally {
      commit('SET_WIZARD_STEP_PENDING_STATUS', false)
    }
  },
  async getSubscriptionAgreement ({ commit }) {
    commit('SET_WIZARD_STEP_PENDING_STATUS', true)
    this.$axios.setToken(this.state.user.token, 'Bearer')
    try {
      if (!Object.keys(this.state.investment.subscriptionAgreement).length) {
        let subscriptionAgreement = await this.$axios.$get(`/agreements/basic`)
        commit('UPDATE_SUBSCRIPTION_AGREEMENT', subscriptionAgreement)
      }
    } catch (e) {
      this.$log.error('getSubscriptionAgreement: backend call error')
    } finally {
      commit('SET_WIZARD_STEP_PENDING_STATUS', false)
    }
  }
}
