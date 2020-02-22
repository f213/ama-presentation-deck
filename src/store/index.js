import Vue from 'vue';
import Vuex from 'vuex';

import Airtable from 'airtable-plus';

const airtable = new Airtable({
  apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
  baseID: process.env.VUE_APP_AIRTABLE_BASE,
  tableName: process.env.VUE_APP_AIRTABLE_TABLE_NAME,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
  },
  mutations: {
    ADD_QUESTION(state, question) {
      const found = state.questions.findIndex((i) => i.id === question.id);

      question.question = question.question.slice(0, 256);

      if (found !== -1) {
        Vue.set(state.questions, found, question);
      } else {
        state.questions.push(question);
      }
    },
  },
  actions: {
    async GET_QUESTIONS({ commit }) {
      /* eslint-disable-next-line global-require */
      // const { questions } = require('@/test.json');
      // questions.forEach((question) => commit('ADD_QUESTION', question));

      const records = await airtable.read();
      records.forEach((record) => {
        const { id, fields } = record;
        const { name, question } = fields;

        if (name && question) {
          commit('ADD_QUESTION', { id, name, question });
        }
      });
    },
  },
});
