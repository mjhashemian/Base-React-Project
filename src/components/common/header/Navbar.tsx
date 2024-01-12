import React, { useEffect } from "react";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Button,
  theme,
  Avatar,
  MenuProps,
  Dropdown,
  Divider,
  Typography,
  Modal,
} from "antd";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../helper/context/AuthContext";
import { MessageSVG } from "../svg";

const { Header } = Layout;

function Navbar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const { user } = useAuth();

  const [modal, contextHolder] = Modal.useModal();

  const getRoll = () => {
    if (!user?.user) {
      return "";
    }

    if (user?.user?.role) {
      return user?.user?.role === true; //USER_ROLL.SUPER_ADMIN ? "ادمین" : "فروشنده";
    }
    return "";
  };

  useEffect(() => {}, [user]);

  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex gap-x-2 items-start justify-start min-w-[150px]">
          <Avatar size="large" />
          <div className="flex flex-col gap-y-1 items-start justify-start ">
            <Typography.Text className="text-[12px] font-bold text-gray-600">
              {user?.user?.username}
            </Typography.Text>
            <Typography.Text className="text-[12px] px-2 bg-blue-200 text-blue-500 flex rounded-lg">
              {getRoll()}
            </Typography.Text>
          </div>
        </div>
      ),
      key: "1",
      onClick: () => navigate("/"),
    },
    {
      label: <Divider style={{ margin: 0 }} />,
      key: "6",
    },

    {
      label: "پروفایل",
      key: "2",
      icon: <UserOutlined />,
      onClick: () => navigate("/"),
    },
    {
      label: "تنظیمات",
      key: "3",
      icon: <SettingOutlined />,
      onClick: () => navigate("/settings"),
    },
    {
      label: "راهنما",
      key: "7",
      icon: <QuestionCircleOutlined />,
      onClick: () => navigate("/help-center"),
    },
    {
      label: <Divider style={{ margin: 0 }} />,
      key: "4",
    },
    {
      label: <Typography.Text className="text-[12px]">خروج</Typography.Text>,
      key: "5",
      icon: <LogoutOutlined />,
      onClick: () => logout(),
    },
  ];

  const logout = () => {
    modal.confirm({
      title: "خروج از حساب کاربری",
      icon: <LogoutOutlined />,
      content: "آیا برای خارج شدن مطمئن هستید؟",
      okText: "خروج",
      cancelText: "انصراف",
      okButtonProps: { className: "bg-blue-500 text-white" },
      onOk: () => {
        localStorage.removeItem("user");
        navigate("/login");
        window.location.reload();
      },
    });
  };

  const menuProps = {
    items,
  };

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
        height: "7vh",
        position: "sticky",
        zIndex: "100",
        width: "100%",
        top: 0,
        left: 0,
      }}
      className="flex justify-between items-center"
    >
      {contextHolder}
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <div className="ml-8 flex items-center gap-x-2">
        <Button
          type="text"
          className="h-full  flex items-center justify-center"
          icon={<MessageSVG />}
        />

        <Dropdown
          menu={menuProps}
          trigger={["click"]}
          className="cursor-pointer"
        >
          <Avatar shape="square" alt="S">
            AD
          </Avatar>
        </Dropdown>
      </div>
    </Header>
  );
}

export default Navbar;
