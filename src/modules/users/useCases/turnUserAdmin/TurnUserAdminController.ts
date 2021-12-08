import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id: user_id } = request.params;

    const adminUser = this.turnUserAdminUseCase.execute({ user_id });

    if (!adminUser) {
      return response.status(404).json({ error: "User not found" });
    }

    return response.json(adminUser);
  }
}

export { TurnUserAdminController };
