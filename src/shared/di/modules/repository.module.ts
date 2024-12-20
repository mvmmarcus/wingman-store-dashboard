import { createModule } from "@evyweb/ioctopus";
import { DISymbol } from "src/shared/di/symbols";

export function createRepositoryModule() {
  const moduleService = createModule();
  const commonDependencies = [DISymbol.IHttpService];

  return moduleService;
}
