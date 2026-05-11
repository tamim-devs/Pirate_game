import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is missing in environment variables");
}

const client = new MongoClient(uri);

// IMPORTANT: don't connect at build time
let db;

async function getDb() {
  if (!db) {
    await client.connect();
    db = client.db("pirate_game");
  }
  return db;
}

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },

  database: mongodbAdapter(await getDb(), {
    client,
  }),
});