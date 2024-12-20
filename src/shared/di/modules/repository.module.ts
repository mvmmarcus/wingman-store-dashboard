import { createModule } from "@evyweb/ioctopus";
import { DISymbol } from "src/shared/di/symbols";
import { UserRepository } from "src/layers/infrastructure/repositories/user.repository";

export function createRepositoryModule() {
  const moduleService = createModule();
  const commonDependencies = [DISymbol.IHttpService];

  moduleService
    .bind(DISymbol.IUserRepository)
    .toClass(UserRepository, commonDependencies);

  return moduleService;
}
