<template>
  <div class="container">
    <h1>Quiz</h1>
    <question 
      :info="questions[index]" 
      @answered="answered" />
    <div class="progress">
      {{ index }}/{{ total }}
    </div>
    <nuxt-link 
      to="/" 
      class="go-to-link block">
      Exit
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Question from '~/components/Question.vue'

export default {
  components: {
    Question
  },
  data() {
    return {
      index: 0,
      score: 0
    }
  },
  computed: {
    ...mapState(['questions']),
    total() {
      return this.questions.length
    }
  },
  methods: {
    answered(answer) {
      // Get index of answer clicked emitted by component and if correct increment score
      if (this.questions[this.index].correct === answer) this.score++

      // Continue to next question unless we ran out of questions
      if (this.index < this.total - 1) this.index++
      else {
        // When all questions answered, save score in store and continue to finished page
        this.$store.commit('setScore', this.score)
        this.$router.push({ name: 'finished' })
      }
    }
  }
}
</script>

<style lang="less">
.container {
  .progress {
    font-weight: 600;
    margin: 5px;
  }
}
</style>
