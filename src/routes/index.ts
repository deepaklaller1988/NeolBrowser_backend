import { Router } from "express";
import { createUpdateFav, getFav } from "../controllers";

const route = () => {
  const router = Router();

  router.post("/fav", createUpdateFav);
  router.get("/fav", getFav);

  return router;
};

export { route };
