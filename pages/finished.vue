<template>
  <div>
    <section class="container">
      <p class="scores">
        The empire appreciates your help. 
        <br>
        You managed to get <span class="underline">{{ totalScore }}</span> correct questions.
        <br>
        Continue supporting our troops in white 
        <a 
          href="https://www.reddit.com/r/EmpireDidNothingWrong/" 
          target="_blank" 
          class="go-to-link"
          rel="nofollow noopener">
          here
        </a>
        <br>
        You got a better score than <span class="underline">{{ percentage | nearest }}%</span> of the total quizes taken
      </p>
      <nuxt-link 
        to="/quiz"
        class="go-to-link block">
        Take the quiz again
      </nuxt-link>
    </section>
    <section class="container">
      <div class="answers">
        Here are all the questions and their correct answers:
        <ol>
          <li 
            v-for="(question, index) in $store.state.questions"
            :key="index">
            {{ question.question }} - <span class="correct">{{ question.choices[question.correct] }}</span>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>
import { db } from '~/plugins/firestore.js'
import { mapState } from 'vuex'

export default {
  filters: {
    nearest(value) {
      // Round to one decimal place
      return Math.round(value * 10) / 10
    }
  },
  data() {
    return {
      lowerScored: 1,
      totalQuizesTaken: 1
    }
  },
  computed: {
    ...mapState(['totalScore']),
    percentage() {
      // Based on how many scored less over all the times the quiz was taken - by 100 for percentage
      return (this.lowerScored / this.totalQuizesTaken) * 100
    }
  },
  created() {
    // If quiz not taken redirect to frontpage
    if (this.totalScore === false) this.$router.push({ name: 'index' })
  },
  async mounted() {
    // If quiz just taken get lower scored and total times taken from Firestore
    if (this.totalScore !== false) {
      this.lowerScored = await db
        .collection('scores')
        .where('score', '<', this.totalScore)
        .get()
        .then(querySnapshot => {
          return querySnapshot.size
        })

      this.totalQuizesTaken = await db
        .collection('info')
        .doc('quiz')
        .get()
        .then(doc => {
          return doc.data().totalQuizesTaken
        })

      // Add new item with score + trigger cloud function
      db.collection('scores').add({
        score: this.totalScore
      })
    }
  },
  beforeDestroy() {
    // When leaving reset score
    this.$store.commit('clearScore')
  }
}
</script>

<style lang="less" scoped>
.scores {
  font-family: 'Comfortaa', cursive;
}

.answers {
  text-align: left;

  ol {
    list-style-image: url('~assets/images/lightsaber.svg');

    .correct {
      color: #48a53b;
    }
  }
}
</style>
