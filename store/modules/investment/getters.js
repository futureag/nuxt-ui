export const getters = {
  getLoading: (state) => {
    return state.loading
  },
  allowedDocuments: (state) => {
    return state.allowedDocuments
  },
  investmentRequest: (state) => {
    return state.investmentRequest
  },
  investmentWizardSteps: (state) => {
    return state.investmentWizardSteps
  },
  investmentWizardCurrentStepNum: (state) => {
    return state.investmentWizardCurrentStepNum
  },
  isStepCompleted: (state) => {
    let currentStep = state.investmentWizardSteps.filter(
      (x) => x.stepNum === state.investmentWizardCurrentStepNum
    )[0]
    if (!currentStep.mandatoryFieldsCompleted) {
      return false
    }
    return true
  },
  isLastStep: (state) => {
    return state.isLastStep
  },
  highlightMissing: (state) => {
    return state.highlightMissing
  },
  getInvestmentAgreements: (state) => {
    return state.investmentAgreements
  },
  subscriptionAgreement: (state) => {
    return state.subscriptionAgreement
  },
  documents: (state) => {
    return state.documents
  },
  currenciesList: (state) => {
    return state.currenciesList
  },
  currenciesRates: (state) => {
    return state.currenciesRates
  },
  receiveTokensWalletAddress: (state) => {
    return state.receiveTokensWalletAddress
  },
  planType: (state) => {
    return state.planType
  },
  getSelectedCurrency: (state) => {
    return state.selectedCurrency
  },
  getAgreementText: (state) => {
    return state.agreementText
  },
  getInvestmentAnnouncement: (state) => {
    return state.investmentAnnouncement
  },
  wizardStepPending: (state) => {
    return state.wizardStepPendingStatus
  }
}
