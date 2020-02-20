<template>
  <div id="app">
    <div class="reveal">
      <div class="slides">
        <QuestionSlide :key="idx" v-for="(question, idx) in questions" :question="question"/>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionSlide from '@/components/QuestionSlide.vue';

import { mapState, mapActions } from 'vuex';

export default {
  components: {
    QuestionSlide,
  },
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/js/reveal.min.js' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/css/reveal.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.8.0/css/theme/solarized.min.css' },
    ],
  },
  computed: mapState({
    questions: (state) => state.questions,
  }),
  async mounted() {
    await this.fetchSlides();
    this.initReveal();
  },
  methods: {
    ...mapActions([
      'GET_QUESTIONS',
    ]),
    async fetchSlides() {
      const fetch = async () => {
        await this.GET_QUESTIONS();
        setTimeout(fetch, 1500); // constantly updating
      };
      this.$consola.info('Fetching slides for the first time');
      await fetch();
      this.$consola.info('Slides are fetched');
    },
    initReveal() {
      const doIt = () => {
        if ('Reveal' in window) {
          window.Reveal.initialize();
          this.$consola.info('Reveal.js loaded');
        } else {
          setTimeout(doIt, 1000);
        }
      };
      doIt();
    },
  },
};
</script>
<style>
#app {
  height: 100vh;
  width: 100vw;
}
</style>
