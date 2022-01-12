const mongoose = require("mongoose");
const { Schema } = mongoose;

const brandSchema = new Schema({
  _id: {
    type: ObjectIdSchema,
    default: function () {
      return new ObjectId();
    },
  },
  brand: String,
  createdAt: { type: Date, default: Date.now },
});

mongoose.model("Brand", brandSchema);
