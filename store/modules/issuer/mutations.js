export const mutations = {
  UPDATE_ISSUER_CONFIGURATION: (state, issuerConfiguration) => {
    let transformedConfiguration = {}
    for (let value of Object.values(issuerConfiguration)) {
      if (value.name === 'issuer-route-links') {
        let parsedLinks = JSON.parse(value.value)
        transformedConfiguration['headerLinks'] = parsedLinks['headerLinks']
        transformedConfiguration['footerLinks'] = parsedLinks['footerLinks']
      }
      if (value.name === 'is-using-docusign') {
        transformedConfiguration['is-using-docusign'] = value.value === 'true'
      }
      if (value.name === 'issuer-social-media' && !state.socials.length) {
        let socialData = JSON.parse(value.value)
        for (let socialPlatform of socialData) {
          socialPlatform['icon'] = socialPlatform['icon'].replace(
            '{{issuerCDNURL}}',
            transformedConfiguration['issuer-cdn-url']
          )
          state.socials.push(socialPlatform)
        }
      } else {
        transformedConfiguration[value.name] = value.value
      }
    }
    state.issuerConfiguration = transformedConfiguration
  },
  UPDATE_ISSUER_SOCIAL_CONTACTS: (state) => {
    let issuerCDNURL = state.issuerEnv['issuer-cdn-url']
    state.socials = [
      {
        id: 0,
        name: 'Telegram',
        icon: `${issuerCDNURL}/logo-telegram.png`,
        alt: 'Talk to us on Telegram',
        url: 'http://www.telegram.com'
      },
      {
        id: 1,
        name: 'Whatsapp',
        icon: `${issuerCDNURL}/logo-whatsapp.png`,
        alt: 'Talk to us on Whatsapp',
        url: 'http://www.whatsapp.com'
      },
      {
        id: 2,
        name: 'Twitter',
        icon: `${issuerCDNURL}/logo-twitter.png`,
        alt: 'Talk to us on Twitter',
        url: 'http://www.twitter.com'
      }
    ]
  },
  UPDATE_ISSUER_DOCUMENTS: (state, documents) => {
    state.documents = documents
  },
  UPDATE_ISSUER_FAQ: (state, faq) => {
    state.faq = faq
  }
}
