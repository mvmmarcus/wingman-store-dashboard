import { IUserRepository } from "src/layers/application/interfaces/repositories/iuser.respository.interface";
import { ICrashlyticsService } from "src/layers/application/interfaces/services/crashlytics.service.interface";
import { IHttpService } from "src/layers/application/interfaces/services/http.service.interface";
import { IGetUserByNameUsecase } from "src/layers/application/interfaces/usecases/get-user-by-name.usecase.interface";
import { UserController } from "src/layers/interface-adapters/controllers/user.controller";

export const DISymbol = {
  // Services
  IHttpService: Symbol.for("IHttpService"),
  ICrashlyticsService: Symbol.for("ICrashlyticsService"),

  // Repositories
  IUserRepository: Symbol.for("IUserRepository"),

  // Use Cases
  IGetUserByNameUsecase: Symbol.for("IGetUserByNameUsecase"),

  // Controllers
  UserController: Symbol.for("UserController"),
};

export type DIValue = {
  // Services
  IHttpService: IHttpService;
  ICrashlyticsService: ICrashlyticsService;

  // Repositories
  IUserRepository: IUserRepository;

  // Use Cases
  IGetUserByNameUsecase: IGetUserByNameUsecase;

  // Controllers
  UserController: UserController;
};
