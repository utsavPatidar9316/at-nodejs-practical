import getEnv from "./config/env.config";
import app from "./config/server.config";
import connectDB from "./utils/connectDb";

(async () => {
  try {
    const port = getEnv("PORT") || 8000;
    await connectDB();
    app.listen(port, async () => {
      console.log(`Server running at port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
