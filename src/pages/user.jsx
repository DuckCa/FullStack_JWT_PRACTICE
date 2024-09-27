import { Table } from "antd";
import { useEffect, useState } from "react";
import { getUserApi } from "../util/api";
const UserPage = () => {
  const [dataSource, setdataSource] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUserApi();
      console.log(res);
      if (res) {
        setdataSource(res);
      }
    };
    fetchUser();
  }, []);
  // const dataSource = [
  //   {
  //     _id: "66eff115842e19dab29282b6",
  //     name: "hoaiduck",
  //     email: "ducnhh221@gmail.com",
  //     password: "duc140603",
  //     role: "DUCK",
  //     __v: 0,
  //   },
  //   {
  //     _id: "66f27bcf986bcfa7e8582765",
  //     name: "hoaiduck",
  //     email: "hoidanit@gmail.com",
  //     password: "$2b$10$qrWyEAw6Hkscf2fRw3mb8uj4ZkWj7wStIx3H/LjTvqeA44ZiW6jyS",
  //     role: "DUCK",
  //     __v: 0,
  //   },
  //   {
  //     _id: "66f2d86cc5a52cd222d98450",
  //     name: "DUCK",
  //     email: "fizzducnguyen@gmail.com",
  //     password: "$2b$10$0.mW1tH1j2n9eIT24tB9V.LQtkWl4v8/lDLyy3cVQRdCSwlZJ8jSu",
  //     role: "DUCK",
  //     __v: 0,
  //   },
  // ];

  const columns = [
    {
      title: "id",
      dataIndex: "_id",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  return (
    <div style={{ padding: 30 }}>
      <Table
        bordered
        dataSource={dataSource}
        columns={columns}
        rowkey={"_id"}
      />
      ;
    </div>
  );
};
export default UserPage;
