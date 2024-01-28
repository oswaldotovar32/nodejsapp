import app from "./app";
import * as dotenv from "dotenv";
dotenv.config();
import { myDataSource } from "./db/db_conect.config";

app.listen(process.env.PORT, () => {
    console.log("Server listening on port " + process.env.PORT);
});

async function initializeDatabase() {
    try {
        await myDataSource.initialize();
        console.log('Database initialized');
    } catch (error) {
        console.log(error);
    }
}

initializeDatabase();