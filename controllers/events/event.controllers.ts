import { Request, Response } from "express";

import EventModel from "../../models/event.model";

const uploadOnCloudinary = require("../../utils/cloudinary");
const nodemailer = require("nodemailer");

const mailTemplate = require("../../template/mailTemplate");

interface MulterRequest extends Request {
  files: any;
}

const addEvents = async (req: MulterRequest, res: Response) => {
  try {
    const data = JSON.parse(req.body.data);
    console.log(data);

    console.log(data.teamsize);

    const event = await EventModel.create({
      eventName: data.name,
      description: data.description,
      registrationFees: data.registrationFees,
      subCategory: data.subCategory.toLowerCase(),
      rulebook: data.rulebook,

      date: data.date,
      prizePool: data.prizePool,
      eventPoster: data.imgUrl,
      coordinators: data.coordinators,
      teamsize: data.teamsize,
    });
    return res.status(200).json({
      message: "Event added successfully",
      // event,
    });
  } catch (error) {
    console.error("Error adding event:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await EventModel.find();
    return res.status(200).json({
      message: "All events fetched successfully",
      results: events.length,
      events,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
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
    console.log(_id);
    const event = await EventModel.findOne({ _id });
    console.log(event);
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

export { addEvents, getEvents, getIndividualEvent, deleteEvent, getAllEvents };
