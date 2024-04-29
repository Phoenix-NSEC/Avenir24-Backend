import { Request, Response } from "express";
import MultipleRegisterModel from "../../models/multiple.model";

const getTeamDetails = async (req: Request, res: Response) => {
  try {
    const team = await MultipleRegisterModel.find();
    return res.status(200).json({
      message: "Team details fetched successfully",
      team,
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export { getTeamDetails };
