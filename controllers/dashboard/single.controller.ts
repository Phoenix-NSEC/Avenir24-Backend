import { Request, Response } from "express";
import SingleRegisterModel from "../../models/single.model";
import MultipleRegisterModel from "../../models/multiple.model";

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
const getCSVData = async (req: Request, res: Response) => {
  const name = req.body.name;
  console.log(name);
  let solo = [];
  let group = [];

  if (
    name === "Hackathon 2025" ||
    name === "Line-Follower Robot Making" ||
    name === "BGMI"
  ) {
    solo = await SingleRegisterModel.find({ event: name });
    group = await MultipleRegisterModel.find({
      $or: [
        { event: name },
        { event: "COMBO 1 (Hackathon 2025, Line-Follower Robot Making, BGMI)" },
      ],
    });
  } else {
    solo = await SingleRegisterModel.find({ event: name });
    group = await MultipleRegisterModel.find({ event: name });
  }

  const data = solo.length > 0 ? solo : group;

  return res.status(200).json({
    message: "Event details fetched successfully",
    data: data,
  });
};

export { getCSVData, getSingleEventDetails };
