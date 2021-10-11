import type { NextApiRequest, NextApiResponse } from "next";

const email = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(req.body);
};

export default email;
