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
    } else if (req.params.type === "starred") {
      emails = await EmailModel.find({ starred: true, bin: false });
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

const toggleStarredEmailsController = async (req, res) => {
  try {
    await EmailModel.updateOne(
      { _id: req.body.id },
      { $set: { starred: req.body.value } }
    );
    return res.status(200).json("email is starred mark");
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

const deleteEmailsController = async (req, res) => {
  console.log(req.body);
  try {
    await EmailModel.deleteMany({ _id: { $in: req.body } });
    return res.status(200).json("emails deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

export {
  toggleStarredEmailsController,
  saveSentEmailController,
  getEmailsController,
  moveEmailsToBinController,
  deleteEmailsController,
};
