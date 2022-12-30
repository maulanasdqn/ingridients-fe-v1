import ApiService from "@service/Api";
import { handleError } from "@util/helper/index";
import { PermissionReponseTypes } from "@util/types/Permission";

const PermissionService = {
  GetPermission: async (): Promise<PermissionReponseTypes> => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      url: "/permission",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};
export default PermissionService;
