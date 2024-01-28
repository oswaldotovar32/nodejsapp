import app from "./app";
import * as dotenv from "dotenv";
dotenv.config();
import { myDataSource } from "./db/db_conect.config";

export const initializationOfDatabase = async () => {
    await myDataSource
        .initialize()
        .catch((err) => {
            console.log('Error during Data Source initialization:', err);
        });
}

initializationOfDatabase();
export const server = app.listen(process.env.PORT, async () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});