import { AxiosError } from "axios";

import { logout } from "../../helper/utils";
import { message } from "antd";

export const errorHandler = (e: any | AxiosError) => {
  switch (e?.response?.data?.statusCode) {
    case 401: {
      logout();
      break;
    }
    case 400: {
      message.error(e?.response?.data?.message.map((item: string) => item));
      break;
    }
    case 500: {
      message.error("خطا در سرور");
      break;
    }
    default:
      message.error("اینترنت خود را چک کنید");
  }
};
