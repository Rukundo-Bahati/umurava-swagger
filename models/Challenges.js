import mongoose from "mongoose";

const challengeSchema = new mongoose.Schema(
  {
    title: { type: String },
    prize: { type: String},
    deadline: { type: String},
    email:  { type: String },
    skills: { type: [String] ,required: true}, 
    level: { type: String, enum: ["Junior", "Intermediate", "Senior"], default: "Junior" },
    timeline: { type: String, default: "7 days" },
    description: { type: String, default: "No description provided" },
    brief: { type: String},
    tasks: { type: String},
    status: { type: String, enum: ["Open", "Ongoing", "Completed"], default: "Open" }, 
  },
  { timestamps: true }
);

const Challenge = mongoose.model("Challenge", challengeSchema);

export default Challenge;
