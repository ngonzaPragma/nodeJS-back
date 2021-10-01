module.exports = {
  createToModel: function (user) {
    const { email, username, password, signupDate, ...data } = user
    return { email, username, password, signupDate }
  },
  createToApi: function (user) {
    const { email, username, signupDate, ...data } = user
    return { email, username, signupDate }
  },
}
