export const mutations = {
  UPDATE_TEXTS: (state, texts) => {
    let transformedTexts = {}
    for (let value of Object.values(texts)) {
      transformedTexts[value.name] = value.value
    }
    state.texts = transformedTexts
  }
}
