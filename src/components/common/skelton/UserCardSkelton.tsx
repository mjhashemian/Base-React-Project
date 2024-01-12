import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
  } from "@ant-design/icons";
  import {  Card, Skeleton } from "antd";
  
  
  export function UserCardSkelton() {
    return (
      // <div className="col-span-full flex bg-transparent  p-4 rounded-lg flex-col items-center justify-center gap-y-4 border-solid">
  
      // </div>
      <Card
        className="col-span-full flex flex-col  justify-between"
        style={{ height: "300px" }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <div className="flex items-center justify-center">
          <Skeleton.Avatar size={"large"} />
        </div>
        <Skeleton loading={true} active paragraph={{ rows: 4 }}></Skeleton>
      </Card>
    );
  }
  