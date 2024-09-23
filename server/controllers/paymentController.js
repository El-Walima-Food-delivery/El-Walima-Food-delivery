const axios = require("axios");
require("dotenv").config();
module.exports = {
  generatePayment: async (req, res) => {
    try {
      const { amount, developerTrackingId } = req.body;
      console.log(
        amount,
        developerTrackingId,
        "amount==========================================="
      );

      // Ensure amount is a number and convert to string
      const parsedAmount = parseFloat(amount);
      if (isNaN(parsedAmount)) {
        return res.status(400).json({ error: "Invalid amount provided" });
      }

      const amountString = parsedAmount.toFixed(3); // Ensure 3 decimal places

      const response = await axios.post(
        "https://developers.flouci.com/api/generate_payment",
        {
          app_token: process.env.FLOUCI_APP_TOKEN,
          app_secret: process.env.FLOUCI_APP_SECRET,
          amount: amountString,
          accept_card: "true",
          session_timeout_secs: 1200,
          success_link: `http://localhost:5173/success`,
          fail_link: `http://localhost:5173/failed`,
          developer_tracking_id: developerTrackingId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      res.json(response.data);
    } catch (error) {
      console.error("Error generating payment:", error);
      res
        .status(500)
        .json({ error: "Failed to generate payment", details: error.message });
    }
  },
};
