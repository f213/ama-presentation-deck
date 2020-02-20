<template>
  <section>
    <h2>{{ question.name }}</h2>
    {{ question.question }}
  </section>
</template>

<script>
export default {
  props: {
    question: { type: Object, required: true },
  },
};
</script>
