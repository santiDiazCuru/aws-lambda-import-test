const crypto = require("crypto");
exports.handler = async event => {
  const body = JSON.parse(event.body);
  const id = JSON.parse(event.pathParameters.id);
  const res = crypto.randomBytes(20).toString("hex");
  const response = {
    statusCode: 200,
    body: JSON.stringify({ res: res })
  };
  return response;
};
