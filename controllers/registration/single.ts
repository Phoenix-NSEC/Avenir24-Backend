import { Request, Response } from "express"
import SingleRegisterModel from "../../models/single.model"

export const single = async (req: Request, res: Response) => {

  try {
    const data = req.body
    const register = await SingleRegisterModel.create(data)
    res.status(200).json({
      message: "Registered successfully",
      register
    })
  }
  catch (err) {
    return res.status(500).json({ message: err })
  }
}
