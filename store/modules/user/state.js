export const state = () => ({
  loading: false,
  token: 'n7yEIaT1auq8j9XmJx5K', // TODO:
  userObj: {
    id: 98, // TODO:
    investorId: 0,
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    birthdate: '',
    city: '',
    company: '',
    countryId: '',
    derivativeId: '',
    email: '',
    externalId: '',
    externalKycTransactionId: '',
    failedLoginAttemptsCount: '',
    gender: '',
    investorType: '',
    accreditedStatus: '',
    kycComments: '',
    kycResultsUri: '',
    kycStatus: '',
    lastFailedLoginAt: '',
    lastIp: '',
    middleName: '',
    phoneNumber: '',
    zipCode: '',
    state: ''
  },
  userCountryObj: null,
  countriesList: [],
  statesList: [],
  processedInvestments: [],
  tokenIssuances: [],
  payouts: [],
  tokenWallets: [],
  depositWallet: {},
  deposits: [],
  issuances: []
})

/*
processedInvestments: [
    {
      id: 0,
      date: '23/01/2018 - 15:00',
      amount: '5.000 ETH',
      usdValue: '4.900 $',
      status: 'pending',
      confirmation: '3/6 confirmations'
    },
    {
      id: 1,
      date: '23/01/2018 - 15:00',
      amount: '5.000 ETH',
      usdValue: '4.900 $',
      status: 'confirmed',
      confirmation: null
    },
    {
      id: 2,
      date: '23/01/2018 - 15:00',
      amount: '5.000 ETH',
      usdValue: '4.900 $',
      status: 'failed',
      confirmation: null
    }
  ],
  payouts: [
    {
      date: '2018-01-05 17:14:12',
      amount: 15000000000,
      currency: 'ETH',
      status: 'pending',
      tx_url: 'www.etherscan.com/tx=blablabla'
    },
    {
      date: '2018-01-08 18:14:12',
      amount: 25000000000,
      currency: 'ETH',
      status: 'pending',
      tx_url: 'www.etherscan.com/tx=blablabla'
    },
    {
      date: '2018-01-09 17:14:12',
      amount: 95000000000,
      currency: 'ETH',
      status: 'pending',
      tx_url: 'www.etherscan.com/tx=blablabla'
    },
    {
      date: '2018-02-05 17:14:12',
      amount: 30000000000,
      currency: 'ETH',
      status: 'pending',
      tx_url: 'www.etherscan.com/tx=blablabla'
    }
  ],
  tokenWallets: [
    {
      id: 0,
      date: '2018-01-05',
      name: 'TREASURY',
      type: 'treasury',
      address: 'YOUR TOKENS ARE WAITING HERE',
      total: 15000000000,
      transferable: 10000000000
    },
    {
      id: 1,
      date: '2018-01-05',
      name: 'My Wallet',
      type: 'normal',
      address: '0x987acc987',
      total: 15000000000,
      transferable: 10000000000
    },
    {
      id: 2,
      date: '2018-01-05',
      name: 'My Wallet',
      type: 'normal',
      address: '0x987acc987',
      total: 0,
      transferable: 10000000000
    }
  ]
*/
