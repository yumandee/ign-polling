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

        if (!poll){
          return res.status(400).json({ success: false})
        }

        res.status(200).json({ success: true, data: poll });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        let updatedOptions = req.body[1]

        const poll = await Poll.findById(id);
        for(let i = 0; i < updatedOptions.length; i++) {
          poll.options[updatedOptions[i]].votes += 1;
        }

        const updatedPoll = await Poll.findByIdAndUpdate(id, poll, {
          new: true,
          runValidators: true,
        })

        if (!updatedPoll) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: poll });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
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