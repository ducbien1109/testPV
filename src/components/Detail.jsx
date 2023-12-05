import React, { useEffect, useState } from "react";
import { Image } from "antd";
import { useParams } from "react-router";
import getListProduct from "../api/AllProduct";
const Detail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const getDataDetail = async (id) => {
    const datas = await getListProduct.getDetail(id);
    setDetails(datas.data);
  };
  useEffect(() => {
    if (id) {
      getDataDetail(id);
    }
  }, [id]);

  return (
    <div>
      <Image src={details.img} alt="" width={300}/>
      <p>{details.detail}</p>
    </div>
  );
};

export default Detail;
