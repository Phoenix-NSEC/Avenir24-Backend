import mongoose, { Schema, Document, Model } from "mongoose";

interface ISingle extends Document {
  event: string;
  name: string;
  collegeName: string;
  whatsappNumber: string;
  alternateNumber: string;
  email: string;
  payment: string;
}

const singleRegisterSchema = new Schema<ISingle>({
  event: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  whatsappNumber: {
    type: String,
    required: true,
  },
  alternateNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
});

const SingleRegisterModel = mongoose.model<ISingle>("Single", singleRegisterSchema);

export default SingleRegisterModel;
