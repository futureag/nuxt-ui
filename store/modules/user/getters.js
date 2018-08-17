export const getters = {
  getLoading: (state) => {
    return state.loading
  },
  getName: (state) => {
    return `${state.userObj.firstName} ${state.userObj.lastName}`
  },
  getInvestorId: (state) => {
    return state.userObj.investorId
  },
  getUserObj: (state) => {
    return state.userObj
  },
  issuedTokensAmount: (state, getters, rootState, rootGetters) => {
    let result = 0
    for (let issuance of state.tokenIssuances) {
      result += parseInt(issuance.issueAmount)
    }
    return result
      ? (result /
          Math.pow(
            10,
            rootGetters['issuer/issuerConfiguration']['issuer-token-decimals'] - 1
          )).toFixed(0)
      : result
  },
  countriesList: (state) => {
    return state.countriesList
  },
  statesList: (state) => {
    return state.statesList
  },
  userCountry: (state) => {
    return state.userCountryObj
  },
  getProcessedInvestments: (state) => {
    return state.processedInvestments
  },
  userPayouts: (state) => {
    return state.payouts
  },
  userTokenWallets: (state) => {
    return state.tokenWallets
  },
  getBankAccount: (state) => {
    return state.bankAccount
  },
  deposits: (state) => {
    const deposits = state.deposits
    return deposits.filter((el) => el.direction !== 'withdraw')
  },
  issuances: (state) => {
    return state.issuances
  },
  depositWallet: (state) => {
    return state.depositWallet
  },
  countryBank: (state) => {
    return state.countryBank
  }
}
