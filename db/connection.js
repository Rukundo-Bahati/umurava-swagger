import mongoose from "mongoose";
import c from "config";

const CONNECTION = c.get("MONGO_URI") || "mongodb://localhost/Umurava";
export default mongoose
  .connect(CONNECTION,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000,
  })
  .then(() => console.log(`Connected Successfully Umurava DB`))
  .catch((error) => console.log(`${error} did not connect`));
