import type { NextApiRequest, NextApiResponse } from "next";
import { uuid } from "uuidv4";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PUT") {
    const {userId, postId, like}
  }
}
