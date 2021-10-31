var data = require("@libs/events.json");

export default function handler(req, res) {
  console.log(data[0]);
  res.status(200).json(data);
}
