import type { NextApiRequest, NextApiResponse } from "next";
const { parse } = require("rss-to-json");

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        var rss = await parse("https://feeds.buzzsprout.com/1014445.rss");

        if (rss) res.status(200).json({ data: rss });
      } catch (err) {
        res.status(400).json({ data: "error" });
      }
      break;

    // case "POST":
    //   try{
    //       const data = await users.create(req.body);
    //       res.status(201).json({ success: true, data: data })
    //   } catch(err){
    //       res.status(400).json({ success: false })
    //   }
    //   break;

    default:
      res.status(400).json({ data: "default error" });
      break;
  }
}
