const pool = require("../config/db");

/**
 * POST /favorites/:matchId
 */
exports.addFavorite = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { matchId } = req.params;

    await pool.query(
      "INSERT INTO favorites (user_id, match_id) VALUES ($1, $2) ON CONFLICT DO NOTHING",
      [userId, matchId]
    );

    res.json({ message: "Added to favorites" });
  } catch (error) {
    console.error("Add favorite error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * DELETE /favorites/:matchId
 */
exports.removeFavorite = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { matchId } = req.params;

    await pool.query(
      "DELETE FROM favorites WHERE user_id = $1 AND match_id = $2",
      [userId, matchId]
    );

    res.json({ message: "Removed from favorites" });
  } catch (error) {
    console.error("Remove favorite error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * GET /favorites
 */
exports.getFavorites = async (req, res) => {
  try {
    const userId = req.user.userId;

    const result = await pool.query(
      "SELECT match_id FROM favorites WHERE user_id = $1",
      [userId]
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Get favorites error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
