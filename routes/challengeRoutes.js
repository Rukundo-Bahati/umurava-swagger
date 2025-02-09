import express from "express";
import {
  getAllChallenges,
  getChallengeById,
  createChallenge,
  updateChallenge,
  deleteChallenge,
  getOpenChallenges,
  getCompletedChallenges,
  getOngoingChallenges,
} from "../controllers/challengeController.js";

const router = express.Router();

// CRUD Operations
router.get("/", getAllChallenges); 
router.get("/:id", getChallengeById); 
router.post("/create", createChallenge); 
router.put("/:id", updateChallenge); 
router.delete("/:id", deleteChallenge);

// Custom Operations
router.get("/status/open", getOpenChallenges); 
router.get("/status/completed", getCompletedChallenges); 
router.get("/status/ongoing", getOngoingChallenges); 

export default router;
