import express from "express";
import cors, { CorsOptions } from "cors";
import multer from "multer";
import path from "path";
import { COMMON_ROUTE } from "../utils/route.enums"; // Adjust this import based on your actual path
import appRoute from "../route"; // Adjust this import based on your actual path

const app = express();

const corsOpts: CorsOptions = {
  origin: "*",
};

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors(corsOpts));
app.use(express.json());
app.use(COMMON_ROUTE.api, appRoute);

const uploadsDir = path.resolve(__dirname, "..", "uploads");
app.use("/uploads", express.static(uploadsDir));

// In-memory array to store metadata of uploaded videos
let uploadedVideos: { filename: string; url: string }[] = [];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("video"), (req, res) => {
  try {
    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
      req.file?.filename
    }`;
    // Add file metadata to the uploadedVideos array
    uploadedVideos.push({ filename: req.file?.filename || "", url: fileUrl });
    res.json({
      message: "File uploaded successfully",
      file: req.file,
      videoUrl: fileUrl,
    });
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error });
  }
});

// Endpoint to fetch list of uploaded videos
app.get("/videos", (req, res) => {
  res.json(uploadedVideos);
});

export default app;
