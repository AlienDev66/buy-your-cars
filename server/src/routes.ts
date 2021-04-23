import { Request, Response, Router } from "express";

const routes = Router();

routes.get("/test", (request: Request, response: Response) => {
  response.json({ message: "hello" });
});

export default routes;
