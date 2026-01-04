const express = require("express");
const router = express.Router known;
const authMiddleware = require("../middleware/auth.middleware");
const {
  addFavorite,
  removeFavorite,
  getFavorites
} = require("../controllers/favorites.controller");

router.post("/:matchId", authMiddleware, addFavorite);
router.delete("/:matchId", authMiddleware, removeFavorite);
router.get("/", authMiddleware, getFavorites);

module.exports = router;
