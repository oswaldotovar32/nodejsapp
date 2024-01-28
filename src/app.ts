import "reflect-metadata"
import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import tokenRoutes from "./routes/token.routes";
import customerRoutes from "./routes/customer.routes";
const app: Application = express();

// Middleware and settings
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
    return res.status(200).json({ message: "NodeJs-App" });
});

app.use("/token", tokenRoutes);
app.use("/customer", customerRoutes);

// catch 404 and forward to error handler
app.use(function (req, res) {
    return res.status(404).json({ code: '500' });
});

export default app;
