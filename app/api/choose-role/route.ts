import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/db";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getSession({ req });

    if (session) {
      const { role } = req.body;

      try {
        await prisma.user.update({
          where: { email: session.user.email },
          data: { role },
        });

        res.status(200).json({ message: "Role updated successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error updating role" });
      }
    } else {
      res.status(401).json({ error: "Not authenticated" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
