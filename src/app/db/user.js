import { database } from './../firebase'

/**
 * @function addNewUser
 * @param {object} user
 * @description add new user to the database (users)
 */
export const addNewUser = async ({ user, username }) => {
  const { uid, email } = user
  await database.ref(`users/${uid}/info`).set({
    email,
    username,
    isBanned: false,
  })
}

/**
 * @function initUser
 * @param {string} uid
 * @description retrieveUser info
 */
export const initUser = async (uid) => {
  const snapshot = await database.ref(`users/${uid}/info`).once('value')
  return snapshot.val()
}

/**
 * @function addContact
 * @param {string} userID
 * @param {string} contactID
 * @description
 */
export const addContact = async (userID, contactID) => {
  await database.ref(`users/${userID}/contacts/${contactID}`)
}
