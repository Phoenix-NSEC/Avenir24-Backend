import { Request, Response } from "express"
import RegisterModel from "../../models/register.model"

export const registerUser = async (req: Request, res: Response) => {

  try {
    const data = req.body
    const register = await RegisterModel.create(data)
    res.status(200).json({
      message: "Registered successfully",
      register
    })
  }
  catch (err) {
    return res.status(500).json({ message: err })
  }
}
