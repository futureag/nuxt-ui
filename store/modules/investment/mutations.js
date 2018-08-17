export const mutations = {
  SET_LOADING_TRUE: (state) => {
    state.loading = true
  },
  SET_LOADING_FALSE: (state) => {
    state.loading = false
  },
  UPDATE_ALLOWED_DOCUMENTS: (state, allowedDocuments) => {
    state.allowedDocuments = allowedDocuments
  },
  UPDATE_USER_INVESTMENT_REQUEST: (state, [ userInvestmentRequest, toUpdateStep ]) => {
    state.investmentRequest = userInvestmentRequest
    if (toUpdateStep) {
      // update previous steps to completed
      for (let step of state.investmentWizardSteps) {
        if (step.stepNum < userInvestmentRequest.currentWizardStep) {
          step.mandatoryFieldsCompleted = true
        }
      }
      state.investmentWizardCurrentStepNum = userInvestmentRequest.currentWizardStep
    }
    if (userInvestmentRequest.currencyId && state.isFirstCurrencyLoad) {
      let ChosenCurrency = state.currenciesList.filter(
        (currency) => currency.id === userInvestmentRequest.currencyId
      )
      if (ChosenCurrency.length) {
        state.selectedCurrency = ChosenCurrency[0]
        state.planType = ChosenCurrency[0].type
      }
      state.isFirstCurrencyLoad = false
    }
    if (userInvestmentRequest.receiveWallet) {
      state.receiveTokensWalletAddress = userInvestmentRequest.receiveWallet
    }
  },
  SET_INVESTMENT_WIZARD_STEP_NUM: (state, stepNum) => {
    let previousSteps = state.investmentWizardSteps.filter(
      (x) => x.stepNum < state.investmentRequest.currentWizardStep
    )
    if (state.investmentRequest.currentWizardStep >= stepNum) {
      for (let prevStep of previousSteps) {
        if (!prevStep.mandatoryFieldsCompleted) {
          return
        }
      }
      state.highlightMissing = false
      state.investmentWizardCurrentStepNum = stepNum
    }
  },
  INCREASE_INVESTMENT_WIZARD_STEP_NUM: (state) => {
    let newStepNum = state.investmentWizardCurrentStepNum + 1
    let currentStep = state.investmentWizardSteps.filter(
      (x) => x.stepNum === state.investmentWizardCurrentStepNum
    )[0]
    if (currentStep.mandatoryFieldsCompleted) {
      state.highlightMissing = false
      state.investmentWizardCurrentStepNum = newStepNum
    }
    if (state.investmentRequest.currentWizardStep < state.investmentWizardCurrentStepNum) {
      state.investmentRequest.currentWizardStep = state.investmentWizardCurrentStepNum
    }
  },
  DECREASE_INVESTMENT_WIZARD_STEP_NUM: (state) => {
    state.highlightMissing = false
    state.investmentWizardCurrentStepNum -= 1
  },
  SET_HIGHLIGHT_MISSING: (state, toHighlight) => {
    state.highlightMissing = toHighlight
  },
  UPDATE_INVESTMENT_WIZARD_STEP_COMPLETED: (state, isOk) => {
    let currentStep = state.investmentWizardSteps.filter(
      (x) => x.stepNum === state.investmentWizardCurrentStepNum
    )[0]
    currentStep.mandatoryFieldsCompleted = isOk
    // state.highlightMissing = !isOk
  },
  UPDATE_USER_INVESTMENT_AGREEMENTS: (state, userInvestmentAgreements) => {
    state.investmentAgreements = userInvestmentAgreements
  },
  UPDATE_SUBSCRIPTION_AGREEMENT: (state, subscriptionAgreement) => {
    state.subscriptionAgreement = subscriptionAgreement
  },
  UPDATE_USER_FRONT_SIDE_DOCUMENT: (state, frontSide) => {
    state.documents.frontSide = frontSide
  },
  UPDATE_USER_BACK_SIDE_DOCUMENT: (state, backSide) => {
    state.documents.backSide = backSide
  },
  REMOVE_USER_DOCUMENT: (state, documentId) => {
    for (let documentData of Object.values(state.documents)) {
      if (documentData && documentData.id === documentId) {
        if (documentData.documentFace === 'front') {
          state.documents.frontSide = null
        } else {
          state.documents.backSide = null
        }
      }
    }
  },
  UPDATE_USER_PLAN_TYPE: (state, planType) => {
    state.planType = planType
    let currenciesList = state.currenciesList.filter((currency) => currency.type === planType)
    if (currenciesList.length) {
      state.selectedCurrency = currenciesList[0]
    }
  },
  UPDATE_USER_SELECTED_CURRENCY: (state, selectedCurrency) => {
    state.selectedCurrency = selectedCurrency
  },
  UPDATE_CURRENCIES_LIST: (state, currencies) => {
    // TODO: have icons in the DB (or on issuer assets bucket?)
    for (let currency of currencies) {
      if (currency.identifier === 'ETH') {
        currency.icon = '/img/logo-ethereum.png'
      }
      if (currency.identifier === 'BTC') {
        currency.icon = '/img/logo-bitcoin.png'
      }
      if (currency.identifier === 'BCH') {
        currency.icon = '/img/logo-bitcoin-cash.png'
      }
    }
    state.currenciesList = currencies
  },
  UPDATE_CURRENCIES_RATES: (state, currenciesRates) => {
    state.currenciesRates = currenciesRates
  },
  UPDATE_USER_RECEIVE_TOKENS_WALLET_ADDRESS: (state, userRecieveTokensAddress) => {
    state.receiveTokensWalletAddress = userRecieveTokensAddress
  },
  SET_IS_LAST_STEP: (state, value) => {
    state.isLastStep = value
  },
  SET_WIZARD_STEP_PENDING_STATUS: (state, value) => {
    state.wizardStepPendingStatus = value
  }
}
