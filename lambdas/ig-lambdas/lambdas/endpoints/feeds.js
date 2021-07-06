import Dynamo from "../common/Dynamo";
import Responses from "../common/API_Responses";
const tableName = process.env.tableName;

exports.handler = async (event) => {
  const posts = await Dynamo.get(tableName).catch((err) => {
    console.log("error in Dynamo get", err);
    return null;
  });

  if (!posts) {
    return Responses._204({ message: "Failed to get posts" });
  }

  return Responses._200({ posts });
};
