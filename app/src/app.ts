import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { AppRoutes } from "./routes/app.routes";
import { Request, Response } from "express";

class App {
    public app: express.Application;
    public appRoutes: AppRoutes = new AppRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.appRoutes.routes(this.app);
    }
    private config(): void {
        this.app.set("view engine", "ejs");
        this.app.set("views", path.join(__dirname, "../views"));
        // this.app.use(bodyParser.json);
        // this.app.use(bodyParser.urlencoded);
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.get("/test", (req: Request, res: Response) => {
            res.render("home");
        });
    }
}

export default new App().app;