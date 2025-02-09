import Challenge from "../models/Challenges.js";

// Retrieve all challenges
export const getAllChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.status(200).json(challenges);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve challenges", error });
  }
};

// Retrieve a specific challenge by ID
export const getChallengeById = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }
    res.json(challenge);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createChallenge = async (req, res) => {
  try {
    console.log("Incoming request data:", req.body);
    
    const newChallenge = new Challenge(req.body);
    await newChallenge.save();

    res.status(201).json(newChallenge);
  } catch (error) {
    console.error("Error creating challenge:", error); 
    res.status(500).json({ message: "Failed to create challenge", error: error.message });
  }
};


// Update a challenge
export const updateChallenge = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedChallenge = await Challenge.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedChallenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }

    res.status(200).json(updatedChallenge);
  } catch (error) {
    res.status(500).json({ message: "Failed to update challenge", error });
  }
};

// Delete a challenge
export const deleteChallenge = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedChallenge = await Challenge.findByIdAndDelete(id);

    if (!deletedChallenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }

    res.status(200).json({ message: "Challenge deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete challenge", error });
  }
};

// Retrieve open challenges
export const getOpenChallenges = async (req, res) => {
  try {
    const openChallenges = await Challenge.find({ status: "Open" });
    res.status(200).json(openChallenges);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve open challenges", error });
  }
};

// Retrieve completed challenges
export const getCompletedChallenges = async (req, res) => {
  try {
    const completedChallenges = await Challenge.find({ status: "Completed" });
    res.status(200).json(completedChallenges);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve completed challenges", error });
  }
};

// Retrieve ongoing challenges
export const getOngoingChallenges = async (req, res) => {
  try {
    const ongoingChallenges = await Challenge.find({ status: "Ongoing" });
    res.status(200).json(ongoingChallenges);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve ongoing challenges", error });
  }
};
