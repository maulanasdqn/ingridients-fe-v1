import ApiService from "@service/Api";
import { handleError } from "@util/helper/index";

const IngridientService = {
  GetIngridient: async () => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      url: "/ingridient/",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};
export default IngridientService;
