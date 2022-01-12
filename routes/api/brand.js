const mongoose = require('mongoose');

const Brand = mongoose.model('Brand');

module.exports = app => {

  app.post('/api/brand', async (req, res) => {
    const { brand } = req.body;

    const Brand = new Brand({
      brand
    });

    try {
      await Brand.save();
      res.send(Brand);
    } catch (err) {
      res.send(400, err);
    }
  });

};