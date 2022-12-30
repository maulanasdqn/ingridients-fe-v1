import { CommonResponseInterface } from "@util/interfaces/Reponse";

export type PermissionTypes = {
  created_at: string;
  guard_name: string;
  id: number;
  name: string;
  updated_at: string;
};

export type PermissionReponseTypes = CommonResponseInterface<PermissionTypes>;
