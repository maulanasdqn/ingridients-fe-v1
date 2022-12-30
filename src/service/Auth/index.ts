import ApiService from "@service/Api";
import TokenService from "@service/Token";
import { AuthPayloadTypes } from "@util/types/Auth";
import { getErrorMessage, handleError } from "@util/helper/index";

const AuthService = {
  Login: async (payload: AuthPayloadTypes) => {
    const { email, password } = payload;
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: {
        email,
        password,
      },
      url: "/login",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      TokenService.saveToken(res.data.results.access_token);
      TokenService.saveRefreshToken(res.data.results.refresh_token);
      ApiService.setHeader();
    } catch (error) {
      throw handleError(error);
    }
  },

  Logout: () => {
    ApiService.removeHeader();
    TokenService.removeToken();
    TokenService.removeRefreshToken();
    window.location.reload();
  },

  Register: async (payload: AuthPayloadTypes) => {
    // const data = serialize(payload);
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      data: payload,
      url: "/register",
    };
    try {
      await ApiService.customRequest(requestData);
    } catch (error) {
      throw handleError(error);
    }
  },

  RefreshToken: async () => {
    const requestData = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        refresh_token: TokenService.getRefreshToken(),
      },
      url: "/refresh",
    };
    try {
      const response = await ApiService.customRequest(requestData);
      ApiService.setHeader();
      return response.data;
    } catch (error) {
      throw getErrorMessage(error);
    }
  },
};
export default AuthService;
