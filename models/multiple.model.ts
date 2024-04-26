import mongoose, { Schema, Document, Model } from "mongoose";

interface IMultiple extends Document {
  event: string;
  teamName: string;
  teamLeaderName: string;
  collegeName: string;
  whatsappNumber: string;
  alternateNumber: string;
  email: string;
  payment: string;
  members: {
    name: string;
    info: string;
  }[];
}

const multipleRegisterSchema = new Schema<IMultiple>({
  event: {
    type: String,
    required: true,
  },
  teamName: {
    type: String,
    required: true,
  },
  teamLeaderName: {
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
  members: [
    {
      name: {
        type: String,
        required: true,
      },
      info: {
        type: String,
        required: true,
      },
    },
  ],

});

const MultipleRegisterModel = mongoose.model<IMultiple>("Multiple", multipleRegisterSchema);

export default MultipleRegisterModel;
