import { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Button, Typography, Tooltip } from "antd";
import { AxiosResponse } from "axios";
import { useFetchPermission } from "../../../../services/requests/accounts/permission";
import { EditSVG, DeleteSVG } from "../../../../components/common/svg";

export function useGeneratePermissions() {
  const [tableParams, setTableParams] = useState({
    page: 1,
    search: "",
    filter: { status: "" },
  });

  const { data: bankRes, isLoading } = useFetchPermission();
  const banks: AxiosResponse = bankRes as AxiosResponse;
  const [selectItem, setSelectItem] = useState<any>();
  const [showDelete, setShowDelete] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openEditDrawer, setEditDrawer] = useState(false);

  const columns: ColumnsType<any> = [
    {
      title: "",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "عنوان",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "توضیحات",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "عملیات",
      dataIndex: "action",
      key: "x",
    },
  ];

  useEffect(() => {
    console.log(bankRes?.data.data);
  }, [isLoading]);

  const data = banks?.data.data
    ? banks.data.data.map((permissionItem: IPersmission, index: number) => {
        return {
          id: index + 1,
          key: "color_item__" + permissionItem.id,
          title: (
            <div className="flex items-center justify-start gap-x-4">
              {/* <p className="flex items-center justify-start gap-x-4">
                {permissionItem.title}
              </p> */}
              <Typography.Text className="text-slate-500 font-medium text-[14px] ">
                {permissionItem.title}
              </Typography.Text>
            </div>
          ),
          description: (
            <div className="flex items-center justify-start gap-x-4">
              {/* <p className="flex items-center justify-start gap-x-4">
                {permissionItem.title}
              </p> */}
              <Typography.Text className="text-slate-500 font-medium text-[14px] ">
                {permissionItem.description}
              </Typography.Text>
            </div>
          ),
          action: (
            <div className="flex items-center justify-start gap-x-4">
              <Tooltip
                placement="topRight"
                title="ویرایش"
                className="text-[10px]"
              >
                <Button
                  type="text"
                  icon={<EditSVG />}
                  className="flex items-center justify-center text-slate-600"
                  onClick={() => {
                    setSelectItem(permissionItem);
                    setEditDrawer(true);
                  }}
                />
              </Tooltip>
              <Tooltip placement="topRight" title="حذف" className="text-[10px]">
                <Button
                  type="text"
                  className="text-slate-500"
                  icon={<DeleteSVG />}
                  onClick={() => {
                    setSelectItem(permissionItem);
                    setShowDelete(true);
                  }}
                />
              </Tooltip>
            </div>
          ),
        };
      })
    : [];

  const numItems = banks?.data.data ? banks.data.data.length : 0;

  return {
    data,
    columns,
    tableParams,
    setTableParams,
    isLoading,
    selectItem,
    showDelete,
    setShowDelete,
    openDrawer,
    setOpenDrawer,
    openEditDrawer,
    setEditDrawer,
    numItems,
  };
}
