
const Modellar = require("../Model/KitobModel");

const getAllKitob = async (req, res) => {
  try {
    const Kitob = await Modellar.find();
    res.status(200).json({
      status: "success",
      Kitob,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
    });
  }
};

const getAllKitobById = async (req, res) => {
  try {
    const Kitob = await Modellar.findById(req.params.id);
    if (!Kitob) {
      return res.status(404).json({
        message: "not fount",
      });
    }
    return res.status(200).json({
      status: "success",
      Kitob,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
    });
  }
};
const AddKitob = async (req, res) => {
  try {
    const { name, title, price, author, image, desc } = req.body;

    const Kitob = await Modellar.create({
      name,
      title,
      price,
      author,
      image,
      desc,
    });
    res.status(201).json({
      status: "addpost",
      Kitob: Kitob,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
    });
  }
};
const DeleteKitob = async (req, res) => {
  try {
    const DeleteKit = await Modellar.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: DeleteKit,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
    });
  }
};

const UpdateKitob = async (req, res) => {
  try {

    const UpdateKit=await Modellar.findByIdAndUpdate(req.params.id,req.body)

    res.status(200).json({
        status:"success",
        UpdateKit
    })
  } catch (error) {
    res.status(404),
      json({
        status: "failed",
      });
  }
};

module.exports = { getAllKitob, getAllKitobById, AddKitob, DeleteKitob ,UpdateKitob};
