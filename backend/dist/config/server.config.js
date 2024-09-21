"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const route_enums_1 = require("../utils/route.enums"); // Adjust this import based on your actual path
const route_1 = __importDefault(require("../route")); // Adjust this import based on your actual path
const app = (0, express_1.default)();
const corsOpts = {
    origin: "*",
};
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ limit: "50mb", extended: true }));
app.use((0, cors_1.default)(corsOpts));
app.use(express_1.default.json());
app.use(route_enums_1.COMMON_ROUTE.api, route_1.default);
const uploadsDir = path_1.default.resolve(__dirname, "..", "uploads");
app.use("/uploads", express_1.default.static(uploadsDir));
// In-memory array to store metadata of uploaded videos
let uploadedVideos = [];
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = (0, multer_1.default)({ storage });
app.post("/upload", upload.single("video"), (req, res) => {
    var _a, _b;
    try {
        const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${(_a = req.file) === null || _a === void 0 ? void 0 : _a.filename}`;
        // Add file metadata to the uploadedVideos array
        uploadedVideos.push({ filename: ((_b = req.file) === null || _b === void 0 ? void 0 : _b.filename) || "", url: fileUrl });
        res.json({
            message: "File uploaded successfully",
            file: req.file,
            videoUrl: fileUrl,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Upload failed", error });
    }
});
// Endpoint to fetch list of uploaded videos
app.get("/videos", (req, res) => {
    res.json(uploadedVideos);
});
exports.default = app;
