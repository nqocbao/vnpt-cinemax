import { columns } from "./Columns";
import { DataTable } from "./DataTable";

const users = [
  {
    id: 1,
    email: "quan@gmail.com",
    phone: 123456789,
    name: "Quân",
    password: "quan",
    gender: "male",
  },
  {
    id: 2,
    email: "linh@gmail.com",
    phone: 987654321,
    name: "Linh",
    password: "linh",
    gender: "female",
  },
];
const UserList = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-medium">
        <i>Danh Sách Người Dùng</i>
      </h1>
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default UserList;
