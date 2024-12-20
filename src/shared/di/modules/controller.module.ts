import { createModule } from "@evyweb/ioctopus";
import { DISymbol } from "src/shared/di/symbols";
import { UserController } from "src/layers/interface-adapters/controllers/user.controller";

export function createControllerModule() {
  const moduleService = createModule();

  moduleService
    .bind(DISymbol.UserController)
    .toClass(UserController, [
      DISymbol.IGetUserByNameUsecase,
      DISymbol.ICrashlyticsService,
    ]);

  return moduleService;
}
