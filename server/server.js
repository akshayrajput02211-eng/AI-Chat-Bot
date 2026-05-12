import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

/* =========================
   Config
========================= */

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   Gemini Setup
========================= */

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

/* =========================
   Test Route
========================= */

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

/* =========================
   Chat Route
========================= */

app.post("/api/chat", async (req, res) => {
  try {

    const { message } = req.body;

    /* Validation */

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    console.log("USER:", message);

    /* Gemini Model */

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-001",
    });

    /* Generate AI Response */

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: message,
            },
          ],
        },
      ],
    });

    /* Extract Text */

    const text = result.response.text();

    console.log("AI:", text);


    res.status(200).json({
      success: true,
      reply: text,
    });

  } catch (error) {

    console.log("FULL ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});