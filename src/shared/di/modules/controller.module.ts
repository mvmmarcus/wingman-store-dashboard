import { createModule } from "@evyweb/ioctopus";
import { DISymbol } from "src/shared/di/symbols";

export function createControllerModule() {
  const moduleService = createModule();

  return moduleService;
}
