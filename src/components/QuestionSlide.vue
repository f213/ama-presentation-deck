<template>
  <section>
    <blockquote class="question__quote">
      {{ question.question }}
    </blockquote>
    <em class="question__author">{{ question.name }}</em>
  </section>
</template>

<script>
export default {
  props: {
    question: { type: Object, required: true },
  },
};
</script>
<style>
.question__quote {
  text-align: left;
  white-space: pre-line;
}
.question__author {
  float: right;
}

</style>
