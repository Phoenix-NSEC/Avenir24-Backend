import { Request, Response } from "express";
import MultipleRegisterModel from "../../models/multiple.model";
import mailTemplate from "../../template/mailTemplate";
import EventModel from "../../models/event.model";
const nodemailer = require("nodemailer");

const verifyAndSendEmailMulti = async (req: Request, res: Response) => {
  const _id = req.body.userId;
  const { participantName, eventName, email } = req.body;
  try {
    const updatedTeam = await MultipleRegisterModel.findByIdAndUpdate(
      _id,
      { isVerified: true },
      { new: true }
    );

    if (!updatedTeam) {
      return res.status(404).json({ message: "Team not found" });
    }
    // return res.status(200).json({
    //   message: "Team verified successfully",
    //   data: updatedTeam,
    // });
    const event = await EventModel.findOne({ eventName: eventName });
    const eventDate = event?.date;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_SENDER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_SENDER,
      to: email,
      subject:
        "Congratulations your registration for Avenir 2024 has been successfully verified",
      html: mailTemplate({ participantName, eventName, eventDate }),
    };

    transporter.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.error("Error verifying team:", error);
  }

  return res.status(200).json({
    message: "Email sent successfully",
  });
};

export { verifyAndSendEmailMulti };
