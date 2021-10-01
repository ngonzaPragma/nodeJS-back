module.exports = {
  createToModel: function (product) {
    const { name, price, category, image, description, ...data } = product
    return { name, price, category, image, description }
  },
  removeToModel: function (product) {
    const { estado, ...data } = product
    return { estado }
  },
}
