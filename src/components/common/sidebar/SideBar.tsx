import {
  ShopSVG,
  BulletSvg,
  CustomerSVG,
  DashboardSVG,
  ArrowSVG,
} from "../svg";

import { useWindowDimensions } from "../../../helper/hooks/useWindowDimensions";
import { Layout, Menu, Divider, Drawer } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FcSalesPerformance,
  FcMoneyTransfer,
  FcDepartment,
  FcHeadset,
} from "react-icons/fc";
// import { useAuth } from "@/helper/context/AuthContext";
// import { USER_ROLL } from "@/helper/constants/enumApp";

const { Sider } = Layout;

const WithDrawer = ({
  children,
  collapsed,
  setCollapsed,
  isActive,
}: {
  children: React.ReactElement;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
}) => {
  return isActive ? (
    <Drawer
      width={250}
      onClose={() => setCollapsed(false)}
      open={collapsed}
      className="bg-[#1E1E2D] !important "
    >
      {children}
    </Drawer>
  ) : (
    <>{children}</>
  );
};

function SideBar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dimensions = useWindowDimensions();
  const navigate = useNavigate();
  // const { user } = useAuth();

  const ADMIN_MENU = [
    {
      key: "dashboard",
      icon: <DashboardSVG />,
      label: "داشبورد",
      onClick: () => navigate("/"),
    },
    {
      key: "basics",
      icon: <ShopSVG />,
      label: "اطلاعات پایه",
      children: [
        {
          key: "permission",
          icon: <BulletSvg />,
          label: "مجوز ها",
          onClick: () => navigate("/permissions"),
        },
      ],
    },
  ];

  const USER_MENU = [
    {
      key: "sale",
      icon: <FcSalesPerformance key={"sale"} />,
      label: "فروش",
      className: "side-icon",
      children: [
        {
          // SellInvoiceList
          key: "sell-factor",
          icon: <BulletSvg />,
          label: "سفارش",
          children: [
            {
              key: "add-sell-factor",
              onClick: () => navigate("/sale/add-factor"),
              label: "ثبت سفارش",
            },
            {
              key: "add-sell-factor-list",
              onClick: () => navigate("/sale/sell-invoice-list"),
              label: "سفارشات",
            },
          ],
        },
        {
          key: "add-pre-factor",
          icon: <BulletSvg />,
          label: "پیش فاکتور",
          children: [
            {
              key: "/sale/add-pre-factor",
              onClick: () => navigate("/sale/add-pre-factor"),
              label: "افزودن پیش فاکتور",
            },
            {
              key: "/sale/pre-invoice-list",
              onClick: () => navigate("/sale/pre-invoice-list"),
              label: "لیست پیش فاکتور",
            },
          ],
        },
      ],
    },
    {
      key: "warehouse",
      icon: <FcDepartment />,
      label: "انبار داری",
      className: "side-icon",
      children: [
        {
          key: "warehouse-receipt-list",
          icon: <BulletSvg />,
          label: "لیست رسید انبار",
          onClick: () => navigate("/warehouse/warehouse-receipt-list"),
        },
        {
          key: "warehouse-receipt-add",
          icon: <BulletSvg />,
          label: "افزودن رسید انبار",
          onClick: () => navigate("/warehouse/warehouse-receipt-add"),
        },
      ],
    },
  ];

  const isAdmin = true; //user?.user?.role == USER_ROLL.SUPER_ADMIN;

  const isCollapsedSide = dimensions.width < 768 ? false : collapsed;

  return (
    <WithDrawer
      collapsed={collapsed}
      isActive={dimensions.width < 768}
      setCollapsed={setCollapsed}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={isCollapsedSide}
        width={"250px"}
        className={`bg-[#1E1E2D] !important  ${
          collapsed && "translate-x-0"
        } transition-all ease-in-out delay-75`}
        style={{
          backgroundColor: "#1E1E2D",
          overflow: "auto",
          height: "100%",
          maxHeight: "100vh",
          position: "fixed",
          right: 0,
          top: 0,
          animation: "ease-in-out",
          bottom: 0,
        }}
      >
        {/* <div className="demo-logo-vertical" /> */}
        <div
          onClick={() => setCollapsed(false)}
          className="flex absolute left-4 cursor-pointer top-6 items-center justify-center md:hidden  text-blue-200"
        >
          <ArrowSVG />
        </div>
        <div className="logo h-[4vh] "></div>
        <Divider className="bg-slate-700" />
        <Menu
          theme="dark"
          mode="inline"
          className="mt-[5vh] relative"
          defaultSelectedKeys={["1"]}
          items={isAdmin ? ADMIN_MENU : USER_MENU}
        />
      </Sider>
    </WithDrawer>
  );
}

export const MemoizedSideBar = React.memo(SideBar);
