export const getters = {
  issuerName: (state) => {
    return state.name
  },
  issuerConfiguration: (state) => {
    return state.issuerConfiguration
  },
  documents: (state) => {
    return state.documents
  },
  basicDocuments: (state) => {
    return state.documents.filter((x) => x.category === 'basic')
  },
  socials: (state) => {
    return state.socials
  },
  issuerInvestment: (state) => {
    return state.issuerInvestment
  },
  issuerToken: (state) => {
    return state.issuerToken
  },
  faq: (state) => {
    return state.faq
  }
}
