export const mutations = {
  SET_LOADING_TRUE: (state) => {
    state.loading = true
  },
  SET_LOADING_FALSE: (state) => {
    state.loading = false
  },
  UPDATE_USER_DATA: (state, user) => {
    state.userObj.investorId = user.externalId
    state.userObj.id = user.id
    state.userObj.firstName = user.firstName
    state.userObj.lastName = user.lastName
    state.userObj.address1 = user.address1
    state.userObj.address2 = user.address2
    state.userObj.birthdate = user.birthdate
    state.userObj.city = user.city
    state.userObj.company = user.company
    state.userObj.countryId = user.countryId
    state.userObj.derivativeId = user.derivativeId
    state.userObj.email = user.email
    state.userObj.externalId = user.externalId
    state.userObj.externalKycTransactionId = user.externalKycTransactionId
    state.userObj.failedLoginAttemptsCount = user.failedLoginAttemptsCount
    state.userObj.gender = user.gender
    state.userObj.investorType = user.investorType
    state.userObj.accreditedStatus = [ 'pending', 'confirmed' ].includes(user.accreditedStatus)
    state.userObj.kycComments = user.kycComments
    state.userObj.kycResultsUri = user.kycResultsUri
    state.userObj.kycStatus = user.kycStatus
    state.userObj.lastFailedLoginAt = user.lastFailedLoginAt
    state.userObj.lastIp = user.lastIp
    state.userObj.middleName = user.middleName
    state.userObj.phoneNumber = user.phoneNumber
    state.userObj.zipCode = user.zipCode
    state.userObj.state = user.state
  },
  UPDATE_USER_COUNTRIES_LIST: (state, countriesList) => {
    state.countriesList = countriesList
  },
  UPDATE_USER_STATES_LIST: (state, statesList) => {
    state.statesList = statesList
  },
  UPDATE_USER_COUNTRY: (state, country) => {
    state.userCountryObj = country
  },
  UPDATE_USER_WALLETS_LIST: (state, walletsList) => {
    state.tokenWallets = walletsList
  },
  UPDATE_USER_ISSUANCES: (state, issuances) => {
    state.issuances = issuances
  },
  UPDATE_USER_DEPOSITS: (state, deposits) => {
    state.deposits = deposits
  },
  UPDATE_USER_PAYOUTS: (state, payouts) => {
    state.payouts = payouts
  },
  UPDATE_USER_DEPOSIT_WALLET: (state, depositWallet) => {
    state.depositWallet = depositWallet
  },
  UPDATE_USER_TOKEN_ISSUANCES: (state, issuances) => {
    state.tokenIssuances = issuances
  },
  UPDATE_USER_COUNTRY_BANK: (state, bank) => {
    state.countryBank = bank
  }
}
