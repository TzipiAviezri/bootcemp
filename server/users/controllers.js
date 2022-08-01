const GetAll = async(req, res, model) => {
  try {
      const data = await model.mongooseMOdel.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}
module.exports = GetAll