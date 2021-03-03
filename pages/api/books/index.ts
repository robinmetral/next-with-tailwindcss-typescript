import { NextApiRequest, NextApiResponse } from "next";
import { sampleBooksData } from "../../../utils/sample-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleBooksData)) {
      throw new Error("Cannot find books data");
    }

    res.status(200).json(sampleBooksData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
