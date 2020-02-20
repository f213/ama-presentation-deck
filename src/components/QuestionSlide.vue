<template>
  <section>
    <h2>{{ question.name }}</h2>
    <em>{{ question.question }}</em>
  </section>
</template>

<script>
export default {
  props: {
    question: { type: Object, required: true },
  },
};
</script>
