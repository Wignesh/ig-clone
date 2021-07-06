const AWS = require("aws-sdk");

const documentClient = new AWS.DynamoDB.DocumentClient();

const Dynamo = {
  async get(TableName) {
    const params = {
      TableName,
      //   Key: {
      //     ID,
      //   },
    };

    const data = await documentClient.scan(params).promise();

    console.log(data);

    return data.Items || [];
  },

  async write(data, TableName) {
    if (!data.ID) {
      throw Error("no ID on the data");
    }

    const params = {
      TableName,
      Item: data,
    };

    const res = await documentClient.put(params).promise();

    if (!res) {
      throw Error(
        `There was an error inserting ID of ${data.ID} in table ${TableName}`
      );
    }

    return data;
  },
};
module.exports = Dynamo;
