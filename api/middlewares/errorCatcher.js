module.exports = async function (req, res) {
  try {
    await this(req, res)
  } catch (e) {
    console.log(e)
    return res.status(500).send({
      message: e.message || 'internal server error',
    })
  }
}
