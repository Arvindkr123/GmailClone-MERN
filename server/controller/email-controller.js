import { EmailModel } from "../model/email.models.js";

const saveSentEmailController = (req, res) => {
  try {
    const email = new EmailModel(req.body);
    email.save();
    res.status(200).send("email saved successfully!!!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { saveSentEmailController };
