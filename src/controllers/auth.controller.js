import userModel from "../models/user.model";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User with this email or username already exists",
        success: false,
        err:"User already exists",
      });
    }

    const user = await userModel.create({
        username,
        email,
        password,
    })
  } catch (error) {}
};
