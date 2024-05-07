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
  const solo = await SingleRegisterModel.find({ event: name });
  const group = await MultipleRegisterModel.find({ event: name });

  if (solo.length > 0) {
    return res.status(200).json({
      message: "Event details fetched successfully",
      data: solo,
    });
  } else {
    return res.status(200).json({
      message: "Event details fetched successfully",
      data: group,
    });
  }
};

export { getCSVData, getSingleEventDetails };
