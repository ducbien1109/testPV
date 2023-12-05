import React, { useEffect, useState } from "react";
import getListProduct from "../api/AllProduct";
import { RightOutlined } from "@ant-design/icons";
import { Image } from "antd";
import HeaderComponent from "./HeaderComponent";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData, getData } from "../Store/Reducer";
const Content = () => {
  const dispatch = useDispatch();
  const dataProduct = useSelector(getData);
  const [allProducts, setAllProducts] = useState([]);
  const getAllProducts = async () => {
    const response = await getListProduct.getAll();
    setAllProducts(response.data);
    dispatch(setData(response.data));
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <HeaderComponent />
      <div className="listContent">
        {allProducts.map((item) => {
          return (
            <div key={item.id} className="itemContent">
              <Image src={item.img} alt="" width={200} height={150} />
              <p className="nameProduct">
                {item.name}
                <Link to={`/detail/${item.id}`}>
                  <RightOutlined />
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
