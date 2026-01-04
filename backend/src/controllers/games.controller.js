const pool = require("../config/db");

// GET /games?type=Cricket
exports.getGames = async (req, res) => {
  try {
    const { type } = req.query;

    let query = "SELECT * FROM games";
    let values = [];

    if (type) {
      query += " WHERE sport = $1";
      values.push(type);
    }

    const result = await pool.query(query, values);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Get games error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
