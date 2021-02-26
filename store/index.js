export const state = () => ({
  lang: 'en-us',
});

export const mutations = {
  ChangeLang(state, lang) {
    console.log(lang);
    return (state.lang = lang);
  },
};

export const getters = {
  getLang(state) {
    return state.lang;
  },
};
