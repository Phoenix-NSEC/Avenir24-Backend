import { Request, Response } from "express";
import SingleRegisterModel from "../../models/single.model";

const getSingleEventDetails = async (req: Request, res: Response) => {
  try {
    const event = await SingleRegisterModel.find();
    return res.status(200).json({
      message: "Event details fetched successfully",
      event,
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export { getSingleEventDetails };
