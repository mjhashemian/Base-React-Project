import { useNavigate } from "react-router-dom";

import { Breadcrumb, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { HeaderTable } from "../../../../components/common/table/HeaderTable";
import { CustomTable } from "../../../../components/common/table/CustomTable";
import { useGeneratePermissions } from "../hooks/useGeneratePermissions";
export function PermissionList() {
  const navigate = useNavigate();

  // const { mutateAsync: deleteBank, isLoading: loadingDelete } =
  //     useDeleteBank();

  const {
    columns,
    data,
    setTableParams,
    tableParams,
    isLoading,
    // selectItem,
    // showDelete,
    // setShowDelete,
    // openDrawer,
    setOpenDrawer,
    // openEditDrawer,
    // setEditDrawer,
    numItems,
  } = useGeneratePermissions();

  //   const handleDeleteBank = () => {
  //     selectItem;
  //     // deleteBank(selectItem.id).then(() => {
  //     //     setShowDelete(false);
  //     // });
  //   };

  return (
    <div className="content-container">
      {/* <AddBank
        key={1}
        isEditBank={false}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
      <AddBank
        key={2}
        isEditBank={true}
        selectedBank={selectItem}
        openDrawer={openEditDrawer}
        setOpenDrawer={setEditDrawer}
      /> */}
      {/* <Modal
        title="حذف بانک"
        centered
        open={showDelete}
        onOk={handleDeleteBank}
        onCancel={() => setShowDelete(false)}
        confirmLoading={true}
        okButtonProps={{
          className: "bg-blue-500 text-white",
          type: "ghost",
          loading: loadingDelete,
        }}
        okText="حذف "
        cancelText="انصراف"
      >
        <Typography.Text className="text-[15px]">
          ایا برای حذف برند{" "}
          <span className="font-bold">{selectItem?.title}</span> مطمین هستید ؟
        </Typography.Text>
      </Modal> */}
      <div className="flex items-center justify-between py-4">
        <Breadcrumb
          className="cursor-pointer"
          items={[
            {
              title: "داشبورد",
              onClick: () => navigate("/"),
            },
            {
              title: "بانک",
            },
          ]}
        />
        <Button
          className="bg-blue-600 text-white px-4 py-[22px] flex items-center justify-center"
          icon={<PlusOutlined />}
          onClick={() => setOpenDrawer(true)}
        >
          افزودن بانک
        </Button>
      </div>
      <CustomTable
        className="rounded-sm"
        columns={columns}
        data={data}
        loading={isLoading}
        layout="auto"
        header={
          <HeaderTable
            tableParams={tableParams}
            setTableParams={setTableParams}
            title="لیست بانک ها"
            numItems={numItems}
          />
        }
      />
    </div>
  );
}
