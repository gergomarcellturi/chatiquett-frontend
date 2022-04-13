import {BaseDTO} from "./BaseDTO";
import {Permission} from "../enum/Permission";
import {UserStatus} from "../enum/UserStatus";
import {RegistrationType} from "../enum/RegistrationType";

export class UserDTO extends BaseDTO {
  name?: string;
  email?: string;
  identificationNumber?: number;
  permissions?: Permission[];
  lastOnline?: Date;
  registrationDate?: Date;
  userStatus?: UserStatus;
  registrationType?: RegistrationType;

}
