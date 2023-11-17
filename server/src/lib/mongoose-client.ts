import { connect } from "mongoose";

export class MongooseClient {
  async init() {
    await connect("mongodb://127.0.0.1:27017", {
      dbName: "default",
      user: "admin",
      pass: "admin",
    });
  }
}

const client = new MongooseClient();

export default client;
