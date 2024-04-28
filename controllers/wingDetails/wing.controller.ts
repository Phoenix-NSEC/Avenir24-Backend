const uploadOnCloudinary = require("../../utils/cloudinary");

interface MulterRequest extends Request {
  files: any;
}
import { Request, Response } from "express";
import WingModel from "../../models/wing.model";
import EventModel from "../../models/event.model";

const addWingDetails = async (req: MulterRequest, res: Response) => {
  const { wingName, wingDescription, modalText } = req.body;
  console.log(wingName, wingDescription, modalText);
  const wingPosterLocalPath = req.files?.wingImg[0]?.path;
  const wingPoster = await uploadOnCloudinary(wingPosterLocalPath);
  console.log(wingPoster.url);

  try {
    const wing = await WingModel.create({
      wingName: wingName.toLowerCase(),
      wingDescription,
      modalText,
      wingPoster: wingPoster.url,
    });

    return res.status(200).json({
      message: "Wing added successfully",
      wing,
    });
  } catch (error) {
    console.error("Error adding wing:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getWinDetails = async (req: Request, res: Response) => {
  try {
    const wings = await WingModel.find({ wingName: req.params.wingName });
    const events = await EventModel.find({ subCategory: req.params.wingName });
    return res.status(200).json({
      wings,
      events,
    });
  } catch (error) {
    console.error("Error getting wings:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
export { addWingDetails, getWinDetails };
