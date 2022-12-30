import { atom } from "recoil";
import TokenService from "@service/Token";
import { AuthPayloadTypes } from "@util/types/Auth";

export const isAuthenticated = atom({
  key: "is-auth",
  default: !!TokenService.getToken(),
});

export const AuthPayload = atom<AuthPayloadTypes>({
  key: "auth-credentials",
  default: {
    email: "",
    password: "",
    name: "",
    confirm_password: "",
  },
});
