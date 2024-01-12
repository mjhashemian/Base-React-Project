import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Navbar from "../common/header/Navbar";
import { MemoizedSideBar } from "../common/sidebar/SideBar";
import UserProfileDrawer from "../common/header/UserProfile";
// import "../../_variable.scss";
// import "../../_config.scss";

const { Content } = Layout;

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <Layout className="w-full min-h-[100vh] relative ">
      <MemoizedSideBar setCollapsed={setCollapsed} collapsed={collapsed} />
      <Layout
        className={`${
          collapsed ? "mr-[0px] md:mr-[80px]" : "mr-[0px] md:mr-[250px] "
        } w-full`}
      >
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
        <UserProfileDrawer open={openProfile} setOpen={setOpenProfile} />
        <Content
          style={{
            minHeight: 280,
            animation: "ease-in-out",
          }}
          className="bg-[#EEF0F8] w-full h-full"
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
