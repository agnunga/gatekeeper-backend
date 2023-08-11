const Access = require("../models/access");

// Record entry
const grantAccess = async (req, res) => {
  try {
    const access = await Access.create(req.body);
    res.status(200).json(access);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get all Entries
const retrieveAllAccess = async (req, res) => {
  //console.log(req);
  try {
    const accessEntries = await Access.find();
    res.status(200).json(accessEntries);
  } catch (error) {
    //res.status(500).json({ msg: error.message });
    console.log(error.message);
  }
};

// Get a single Entry
const retrieveAccess = async (req, res) => {
  try {
    const { id } = req.params;
    const access = await Access.findById(id);
    if (!access) {
      return res.status(404).json(`No entry with id: ${id}`);
    }
    res.status(200).json(access);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete Access
const deleteAccessEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const access = await Access.findByIdAndDelete(id);
    if (!access) {
      return res.status(404).json(`NO entry with id: ${id}`);
    }
    res.status(200).send("Access record deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update Access
const updatAccessEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const access = await Access.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!access) {
      return res.status(404).json(`NO record with id: ${id}`);
    }
    res.status(200).json(access);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  grantAccess,
  retrieveAllAccess,
  retrieveAccess,
  deleteAccessEntry,
  updatAccessEntry
};
