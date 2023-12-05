import React from "react";
import { Layout, Menu } from "antd";
import {useNavigate} from 'react-router'
import Buttons from "./Buttons";
import Content from "./Content";
const { Header } = Layout;

const HeaderComponent = () => {
  const navigate = useNavigate()
  const pageAdmin = () =>{
    navigate('/admin')
  }
  return (
    <div style={{background:'aqua'}}>
      <Layout className="layout"style={{background:'aqua'}}>
        <Header
          style={{
            background:'#ffffff',
            display: "flex",
            alignItems: "center",
            padding: "0 100px",
            justifyContent: "center",
          }}
        >
          <div className="demo-logo" />
          <Menu
          className="test"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={new Array(4).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label:
                  key === 1
                    ? "all"
                    : key === 2
                    ? "Manpowwer Supply"
                    : key === 3
                    ? "Mobile App/ Websites"
                    : "UI/UX Design",
              };
            })}
          />
          <Buttons
            name='admin'
            color='primary'
            handleClick={pageAdmin}
          />
        </Header>
      </Layout>
    </div>
  );
};

export default HeaderComponent;
