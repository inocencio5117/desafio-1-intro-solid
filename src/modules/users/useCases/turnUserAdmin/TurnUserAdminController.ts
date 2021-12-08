import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    // if (!adminUser) {
    //   return response.status(404).json({ error: "User not found" });
    // }

    const adminUser = this.turnUserAdminUseCase.execute({ user_id });

    return response.json(adminUser);
  }
}

export { TurnUserAdminController };
