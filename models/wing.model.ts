import mongoose, { Schema, Document, Model } from "mongoose";

interface IWing extends Document {
  wingName: string;
  wingDescription: string;
  wingPoster: string;
  modalText: string;
}

const wingSchema = new Schema<IWing>({
  wingName: {
    type: String,
    required: true,
    unique: true,
  },
  wingDescription: {
    type: String,
    required: true,
  },
  wingPoster: {
    type: String,
    required: true,
  },
  modalText: {
    type: String,
    required: true,
  },
});

const WingModel = mongoose.model<IWing>("Wing", wingSchema);

export default WingModel;
