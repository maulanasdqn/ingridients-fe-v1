import { FetchListPermission } from "@store/Permission/selectors";
import { PermissionReponseTypes } from "@util/types/Permission";
import { useRecoilValue } from "recoil";

export default (): PermissionReponseTypes => useRecoilValue(FetchListPermission);
