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
    if (req.params.type === "bin") {
      emails = await EmailModel.find({ bin: true });
    } else if (req.params.type === "allmail") {
      emails = await EmailModel.find({});
    } else {
      emails = await EmailModel.find({ type: req.params.type });
    }
    return res.status(200).json(emails);
  } catch (error) {
    console.log("error : ", error.message);
    res.status(500).send({ error: error.message });
  }
};

const moveEmailsToBinController = async (req, res) => {
  try {
    await EmailModel.updateMany(
      { _id: { $in: req.body } },
      { $set: { bin: true, starred: false, type: "" } }
    );
    return res.status(200).json("emails deleted successfully...");
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

export {
  saveSentEmailController,
  getEmailsController,
  moveEmailsToBinController,
};
