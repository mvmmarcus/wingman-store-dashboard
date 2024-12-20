import { createModule } from "@evyweb/ioctopus";
import { DISymbol } from "src/shared/di/symbols";
import { GetUserByNameUsecase } from "src/layers/application/usecases/get-user-by-name.usecase";

export function createUsecaseModule() {
  const moduleService = createModule();
  moduleService
    .bind(DISymbol.IGetUserByNameUsecase)
    .toClass(GetUserByNameUsecase, [DISymbol.IUserRepository]);

  return moduleService;
}
