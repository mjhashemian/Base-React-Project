import { Drawer } from "antd";
import React from "react";

function UserProfile({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Drawer
      width={350}
      onClose={() => setOpen(false)}
      open={open}
      className="!important "
    >
      UserProfile
    </Drawer>
  );
}

export default UserProfile;
