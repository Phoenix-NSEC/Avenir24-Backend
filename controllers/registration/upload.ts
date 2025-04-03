import { Request, Response } from "express";
const uploadOnCloudinary = require("../../utils/cloudinary");

interface MulterRequest extends Request {
  files: any;
}

export const uploadImg = async (req: MulterRequest, res: Response) => {
  try {
    const paymentLocalPath = req.files?.payment[0]?.path;
    const payment = await uploadOnCloudinary(paymentLocalPath);

    return res.status(200).json({
      message: "Event added successfully",
      url: payment.url,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
