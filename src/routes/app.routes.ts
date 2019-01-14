import express from "express";
import { HomeController } from "../controllers/home.controller";

export class AppRoutes {
    public homeController: HomeController = new HomeController();

    public routes(app: express.Application): void {
        app.route("/").get(this.homeController.index);
    }
}