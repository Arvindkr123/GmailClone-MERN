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

const getEmailsController = async (req, res) => {
  try {
    let emails;
    if (req.params.type === "sent") {
      emails = await EmailModel.find({ type: req.params.type });
    }
    if (req.params.type === "drafts") {
      emails = await EmailModel.find({ type: req.params.type });
    }
    return res.status(200).json(emails);
  } catch (error) {
    console.log("error : ", error.message);
    res.status(500).send({ error: error.message });
  }
};

export { saveSentEmailController, getEmailsController };
