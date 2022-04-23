import dbConnect from "../../utils.js/dbConnect";

const test = async (req, res) => {
  dbConnect();
  
  return res.json({test: "test"})
}

export default test;