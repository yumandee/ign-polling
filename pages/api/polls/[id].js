import dbConnect from "../../../utils.js/dbConnect";
import Poll from "../../../models/Poll";
dbConnect();

const handler = async(req, res) => {
  const {
    query: {id},
    method
  } = req;

  switch (method) {
    case "GET":
      try {
        const poll = await Poll.findById(id);

        if (!note){
          return res.status(400).json({ success: false})
        }

        res.status(200).json({ success: true, data: poll });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const poll = await Poll.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!note) {
          return res.status(400).json({ success: false });
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }

    // case "DELETE":
    //   try {
    //     const deletedPoll = await Poll.deleteOne({ _id: id });
    //     if (!deletedPoll) {
    //       return res.status(400).json({ success: false });
    //     }
    //     res.status(200).json({ success: true, data: {}  });
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //   }
    //   break;
    default:
      res.status(400).json({ success: false });

  } 
}

export default handler;