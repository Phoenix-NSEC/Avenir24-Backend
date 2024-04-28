import { Request, Response } from "express";

import EventModel from "../models/event.model";

const uploadOnCloudinary = require("../utils/cloudinary");
const nodemailer = require("nodemailer");
const mailTemplate = require("../template/mailTemplate");

interface MulterRequest extends Request {
  files: any;
}

interface Coordinator {
  name: string;
  phone_number: string;
}

interface DateObject {
  [key: string]: string;
}
const addEvents = async (req: MulterRequest, res: Response) => {
  try {
    const data = JSON.parse(req.body.data);
    console.log(data);

    console.log(data.subCategory);

    const rulebookLocalPath = req.files?.rulebook[0]?.path;

    const rulebook = await uploadOnCloudinary(rulebookLocalPath);

    const imgUrlLocalPath = req.files?.imgUrl[0]?.path;

    const imgUrl = await uploadOnCloudinary(imgUrlLocalPath);

    const event = await EventModel.create({
      eventName: data.name,
      description: data.description,
      registrationFees: data.registrationFees,
      subCategory: data.subCategory.toLowerCase(),
      rulebook: rulebook.url,
      // teamSize: data.teamsize,
      date: data.date,
      prizePool: data.prizePool,
      eventPoster: imgUrl.url,
      coordinators: data.coordinators,
    });
    return res.status(200).json({
      message: "Event added successfully",
      imgUrl: imgUrl.url,
      rulebook: rulebook.url,
      // event,
    });
  } catch (error) {
    console.error("Error adding event:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getEvents = async (req: Request, res: Response) => {
  try {
    const subCategory = req.params.subCategory;
    const events = await EventModel.find({ subCategory });
    return res.status(200).json({
      message: "Events fetched successfully",
      events,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getIndividualEvent = async (req: Request, res: Response) => {
  try {
    const _id = req.params.eventId;
    const event = await EventModel.findOne({ _id });
    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }
    return res.json({
      message: "Event fetched successfully",
      event,
    });
  } catch (error) {
    console.error("Error fetching event:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deleteEvent = async (req: Request, res: Response) => {
  try {
    const _id = req.params.eventId;
    const event = await EventModel.findOneAndDelete({ _id });

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    return res.json({
      message: "Event deleted successfully",
      event,
    });
  } catch (error) {
    console.error("Error deleting event:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const verifyAndSendEmail = async (req: Request, res: Response) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_SENDER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_SENDER,
    to: "abhinilnath10@gmail.com",
    subject: "Test123",
    html: mailTemplate(),
  };

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  return res.status(200).json({
    message: "Email sent successfully",
  });
};

export {
  addEvents,
  getEvents,
  getIndividualEvent,
  deleteEvent,
  verifyAndSendEmail,
};
