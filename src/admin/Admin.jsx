import React, { useState } from "react";
import { Col, Form, Input, Row, Card, Button, Spin } from "antd";
import { useNavigate } from "react-router";
import Buttons from "../components/Buttons";
import getListProduct from "../api/AllProduct";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/Loading";
const Admin = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const pageHome = () => {
    navigate("/");
  };
  const onsubmit = async (value) => {
    try {
      setLoading(true);
      await getListProduct.create(value);
      toast.success("thành công");
      navigate("/");
    } catch (error) {
      toast.error("không thành công");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {loading && <Loading />}
      <Card
        title="add"
        bordered={false}
        style={{ width: 800, margin: "0 auto" }}
      >
        <Form layout="vertical" onFinish={onsubmit}>
          <Row>
            <Col span={24}>
              <Form.Item
                name="name"
                label="name product"
                rules={[{ required: true, message: "please" }]}
              >
                <Input placeholder="please input your name...!" />
              </Form.Item>
            </Col>
          </Row>
          <Col span={24}>
            <Form.Item
              name="img"
              label="image"
              rules={[{ required: true, message: "please" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          {/* <Col span={24}>
            <Form.Item>
              <Select
                // value={selectedOption}
                defaultValue="option"
                style={{ width: 200 }}
                options={[
                  { value: "phone", label: "điện thoại" },
                  { value: "laptop", label: "máy tính" },
                ]}
                onChange={(value) => {
                  console.log("Selected Option:", value);
                  //   setSelectedOption(value);
                }}
              />
            </Form.Item>
          </Col> */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Buttons name="Back home page" handleClick={pageHome} />
        </Form>
      </Card>
    </div>
  );
};

export default Admin;
