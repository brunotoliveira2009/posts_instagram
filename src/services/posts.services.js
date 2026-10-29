import {post_instagramController } from "../controllers/post_instagram.controller.js";
post_instagramRouter.get("/", post_instagramController.getAll);
