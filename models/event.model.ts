import mongoose, { Schema, Document, Model } from "mongoose";

interface IEvents extends Document {
  eventName: string;
  description: string;
  registrationFees: string;
  rulebook: string;
  subCategory: string;
  teamsize: string;
  date: string;
  prizePool: string;
  eventPoster: string;
  coordinators: {
    name: string;
    phoneNumber: string;
  }[];
}

const eventSchema = new Schema<IEvents>({
  eventName: {
    type: String,
    required: true,
    unique: true,
  },
  subCategory: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  registrationFees: {
    type: String,
    required: true,
  },

  teamsize: {
    type: String,
    required: true,
  },

  rulebook: {
    type: String,
    required: true,
  },

  eventPoster: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
  prizePool: {
    type: String,
    required: true,
  },
  coordinators: [
    {
      name: {
        type: String,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
    },
  ],
});

const EventModel = mongoose.model<IEvents>("Event", eventSchema);

export default EventModel;
