const axios = require("axios");
require("dotenv").config();
module.exports = {
  generatePayment: async (req, res) => {
    try {
      const { amount, developerTrackingId, orderId } = req.body;
      console.log(amount, "amount is heeeere");

      const response = await axios.post(
        "https://developers.flouci.com/api/generate_payment",
        {
          app_token: process.env.FLOUCI_APP_TOKEN,
          app_secret: process.env.FLOUCI_APP_SECRET,
          amount: amount * 1000,
          accept_card: "true",
          session_timeout_secs: 1200,
          success_link: `http://localhost:5173/success?orderId=${orderId}`,
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
      res.status(500).json({ error: "Failed to generate payment" });
    }
  },
};
