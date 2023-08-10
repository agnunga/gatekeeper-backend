const Gatekeeper = require("../models/gatekeeperModel");

// Create a Gatekeeper
const createGatekeeper = async (req, res) => {
  try {
    const gatekeeper = await Gatekeeper.create(req.body);
    res.status(200).json(gatekeeper);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get all Gatekeepers
const getGatekeepers = async (req, res) => {
  //console.log(req);
  try {

    if (!req.user) {
      res.status(403)
        .send({
          message: "Invalid JWT token"
        });
    }
    if (req.user.role == "admin") {

      const gatekeepers = await Gatekeeper.find();
      res.status(200).json(gatekeepers);

    } else {
      res.status(403)
        .send({
          message: "Unauthorised access"
        });
    }

  } catch (error) {
    //res.status(500).json({ msg: error.message });
    console.log(error.message);
  }
};

// Get a single Gatekeeper
const getGatekeeper = async (req, res) => {
  try {
    const { id } = req.params;
    const gatekeeper = await Gatekeeper.findById(id);
    if (!gatekeeper) {
      return res.status(404).json(`NO gatekeeper with id: ${id}`);
    }
    res.status(200).json(gatekeeper);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete Gatekeeper
const deleteGatekeeper = async (req, res) => {
  try {
    const { id } = req.params;
    const gatekeeper = await Gatekeeper.findByIdAndDelete(id);
    if (!gatekeeper) {
      return res.status(404).json(`NO gatekeeper with id: ${id}`);
    }

    res.status(200).send("Gatekeeper deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update a Gatekeeper
const updateGatekeeper = async (req, res) => {
  try {
    const { id } = req.params;
    const gatekeeper = await Gatekeeper.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!gatekeeper) {
      return res.status(404).json(`NO gatekeeper with id: ${id}`);
    }

    res.status(200).json(gatekeeper);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createGatekeeper,
  getGatekeepers,
  getGatekeeper,
  deleteGatekeeper,
  updateGatekeeper,
};
