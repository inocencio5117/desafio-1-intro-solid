import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id: user_id } = request.params;

    const userFound = this.showUserProfileUseCase.execute({ user_id });

    return response.json(userFound);
  }
}

export { ShowUserProfileController };
