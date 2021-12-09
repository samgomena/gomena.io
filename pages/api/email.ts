import type { NextApiRequest, NextApiResponse } from "next";
import { MessageClient } from "cloudmailin";

const email = async (req: NextApiRequest, res: NextApiResponse) => {
  const username = process.env.CLOUDMAILIN_USERNAME;
  const apiKey = process.env.CLOUDMAILIN_APIKEY;
  const client = new MessageClient({ username, apiKey });

  try {
    await client.sendMessage({
      to: "sam@gomena.io",
      from: req.body.email,
      plain: req.body.body,
      subject: req.body.subject,
    });
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default email;
