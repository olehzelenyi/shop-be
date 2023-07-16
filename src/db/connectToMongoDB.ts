import mongoose from "mongoose";

function connectToMongoDB() {
    const db = process.env.MONGO_DB || "";
    return mongoose
        .connect(db)
        .then(() => {
            console.log("Database connected");
        })
        .catch((error) => {
            console.log("database error, ", error);
            process.exit(1);
        });
}

export default connectToMongoDB;
