const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserProfile,
} = require("../controllers/userController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/", createUser);
router.get("/", verifyToken, getUsers);
router.get("/:id", verifyToken, getUser);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);

router.get("/profile", verifyToken, getUserProfile);

module.exports = router;
