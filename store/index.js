import { db } from '~/plugins/firestore.js'

export const state = () => ({
  questions: false,
  totalScore: false
})

export const mutations = {
  setQuestions(state, questionList) {
    state.questions = questionList
  },
  setScore(state, score) {
    state.totalScore = score
  },
  clearScore(state) {
    state.totalScore = false
  }
}

export const actions = {
  // Get questions once on server init and keep in store
  async nuxtServerInit({ commit }) {
    const questions = await db
      .collection('questions')
      .get()
      .then(querySnapshot => {
        return querySnapshot.docs.map(doc =>
          Object.assign({ id: doc.id }, doc.data())
        )
      })
      .catch(e => {
        console.log('Server Init failed', e)
      })

    commit('setQuestions', questions)
  }
}
