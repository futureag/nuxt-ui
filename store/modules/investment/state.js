export const state = () => ({
  loading: false,
  allowedDocuments: [],
  investmentWizardSteps: [
    {
      label: 'Introduction',
      stepNum: 1,
      mandatoryFieldsCompleted: true
    },
    {
      label: 'Your details',
      stepNum: 2,
      mandatoryFieldsCompleted: false
    },
    {
      label: 'Investor type',
      stepNum: 3,
      mandatoryFieldsCompleted: false
    },
    {
      label: 'Investment',
      stepNum: 4,
      mandatoryFieldsCompleted: false
    },
    {
      label: 'Subscription',
      stepNum: 5,
      mandatoryFieldsCompleted: false
    }
  ],
  investmentWizardCurrentStepNum: 1,
  isLastStep: false,
  highlightMissing: false,
  investmentRequest: {},
  investmentAgreements: {},
  subscriptionAgreement: {},
  documents: {
    frontSide: null,
    backSide: null
  },
  isFirstCurrencyLoad: true,
  currenciesList: [],
  currenciesRates: null,
  planType: null,
  selectedCurrency: null,
  receiveTokensWalletAddress: null,
  agreementText: `
    <p>The information to which this website gives access is exclusively intended for persons who are not located in or resident of certain other restricted jurisdictions, and who are otherwise permitted to receive such information.</p>
    <p>The information to which this website gives access does not constitute an offer or an invitation to purchase securities of SPiCE Venture Capital (SPiCE VC) in the United States, Australia, Canada, Japan, South Africa or the People’s Republic of China or in any other jurisdiction in which such offer or invitation is not authorised or to any person to whom it is unlawful to make such offer or invitation.</p>
    <p>Potential users of this information are requested to inform themselves about and to observe any such restrictions. SPiCE VC’s securities cannot be offered or sold in the United States without registration under the United States Securities Act of 1933, as amended, or pursuant to an exemption from such registration.</p>
    <p>SPiCE VC intends to offer its securities pursuant to the Rule 506(c) exemption. Accordingly, SPiCE VC has not registered, and does not intend to register, any of its securities under the Securities Act or to conduct a public offering of securities in the United States.</p>
    <p>To continue, please select the country you are located in and indicate that you have read and agree to the above.</p>
  `,
  investmentAnnouncement: 'Here is the investment announcement from the DB',
  wizardStepPendingStatus: false
})
