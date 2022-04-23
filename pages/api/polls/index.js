import dbConnect from "../../../utils.js/dbConnect";
import Poll from "../../../models/Poll";
dbConnect();

const handler = async(req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const polls = await Poll.find({});
        res.status(200).json({ success: true, data: polls});
      } catch(error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const poll = await Poll.create(req.body);
        res.status(201).json({ success: true, data: poll});
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }

} 
export default handler;