import { message } from "antd";
import { QueryClient, useMutation, useQuery } from "react-query";
import {
  addPermission,
  getPermissions,
  removePermission,
  updatePermission,
} from "../../../endpoints/accounts/permission";
import { errorHandler } from "../../../config/errorHandler";

export const useFetchPermission = (pageParams?: string) =>
  useQuery(
    ["fetch-permissions", pageParams],
    () => getPermissions(pageParams),
    {
      onError: (e) => {
        errorHandler(e);
      },
    }
  );

export const useAddPermission = () => {
  const queryClient = new QueryClient();
  return useMutation(addPermission, {
    onSuccess: () => {
      message.success("فاکتور خرید با موفقیت ثبت شد");
      queryClient.invalidateQueries("fetch-permissions");
    },
    onError: (e) => {
      errorHandler(e);
    },
  });
};

export const useDeleteBuyOrder = () => {
  const queryClient = new QueryClient();

  return useMutation(removePermission, {
    onSuccess: () => {
      message.success("فاکتور خرید با موفقیت حذف شد");
      queryClient.invalidateQueries("fetch-buy-factor");
    },
    onError: (e) => {
      errorHandler(e);
    },
  });
};

export const useUpdateBuyOrder = () => {
  const queryClient = new QueryClient();
  return useMutation(updatePermission, {
    onSuccess: () => {
      message.success("فاکتور خرید با موفقیت ویرایش شد");
      queryClient.invalidateQueries("fetch-buy-factor");
    },
    onError: (e) => {
      errorHandler(e);
    },
  });
};
