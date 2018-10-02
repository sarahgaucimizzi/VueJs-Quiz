/* 
 * Firebase Cloud Function
 * Triggered whenever a score is added to the scores collection
 * To update totalQuizesTaken in the info collection -> quiz document
 */
const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.onCreateScore = functions.firestore
  .document('/scores/{scoreId}')
  .onCreate((snap, context) => {
    let firestoreInstance = admin.firestore()
    let quizInfoRef = firestoreInstance.collection('info').doc('quiz')
    firestoreInstance
      .runTransaction(transaction => {
        return transaction
          .get(quizInfoRef)
          .then(doc => {
            let info = doc.data()
            // Increment total
            let currentTotal = info.totalQuizesTaken
            let updatedTotal = (currentTotal || 0) + 1
            return transaction.update(quizInfoRef, {
              totalQuizesTaken: updatedTotal
            })
          })
          .catch(() => {
            console.log('Failed to update totalQuizesTaken')
          })
      })
      .then(result => {
        return 'Update total transaction success!'
      })
      .catch(err => {
        console.log('Update total transaction failure:', err)
      })
  })
