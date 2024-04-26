import { Request, Response } from "express"
import MultipleRegisterModel from "../../models/multiple.model"

export const multiple = async (req: Request, res: Response) => {

  try {
    const data = req.body
    const register = await MultipleRegisterModel.create(data)
    res.status(200).json({
      message: "Registered successfully",
      register
    })
  }
  catch (err) {
    return res.status(500).json({ message: err })
  }
}
