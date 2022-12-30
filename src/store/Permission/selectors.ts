import PermissionService from "@service/Permission";
import { selector } from "recoil";

export const FetchListPermission = selector({
  key: "fetch-list-permission",
  get: async () => await PermissionService.GetPermission(),
});
