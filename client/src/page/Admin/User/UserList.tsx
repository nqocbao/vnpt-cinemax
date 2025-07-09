import { useUsers } from "@/components/hooks/useQuery";
import { columns } from "./Columns";
import { DataTable } from "./DataTable";


const UserList = () => {
  const { data: users} = useUsers()
  return (
    <div>
      <h1 className="text-center text-2xl font-medium">
        <i>Danh Sách Người Dùng</i>
      </h1>
      <DataTable columns={columns} data={users || []} />
    </div>
  );
};

export default UserList;
