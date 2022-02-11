import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons/lib/icons";
import  icon  from "../img/cryptocurrency";

const Navbar = () => {
  return (
    <div className="nav-continer">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoHub</Link>
        </Typography.Title>
        {/* <Button className='menu-control-container'></Button> */}
      </div>
    </div>
  );
};

export default Navbar;
