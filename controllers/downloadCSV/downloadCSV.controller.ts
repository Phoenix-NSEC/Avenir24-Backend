const { createObjectCsvWriter } = require("csv-writer");
import { Request, Response } from "express";
import SingleRegisterModel from "../../models/single.model";
import MultipleRegisterModel from "../../models/multiple.model";

const downloadCSV = async (req: Request, res: Response) => {
  console.log("test");
  try {
    console.log("test");
    const name = req.body.name;
    console.log(name);
    const solo = await SingleRegisterModel.find({ event: name });
    const group = await MultipleRegisterModel.find({ event: name });
    console.log(solo);
    console.log(group);

    if (solo) {
      const csvWriter = createObjectCsvWriter({
        path: "data.csv",
        header: Object.keys(solo[0]).map((key) => ({ id: key, title: key })),
      });

      await csvWriter.writeRecords(solo);
    } else {
      const csvWriter = createObjectCsvWriter({
        path: "data.csv",
        header: Object.keys(group[0]).map((key) => ({ id: key, title: key })),
      });

      await csvWriter.writeRecords(group);
    }
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=data.csv");
    res.sendFile("data.csv", { root: "." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export { downloadCSV };
