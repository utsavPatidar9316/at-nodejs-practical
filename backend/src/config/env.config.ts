import "dotenv/config";

interface ICustomProcessEnv {
  PORT: string;
  MONGO_URL: string;
  JWT_SECRET: string;
}

/**
 *
 * @param key
 * @returns Environment variable
 */
export default function getEnv(key: keyof ICustomProcessEnv) {
  return process.env[key];
}
