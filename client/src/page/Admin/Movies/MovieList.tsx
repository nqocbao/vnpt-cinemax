import { useMovies } from "@/components/hooks/useQuery";
import { DataTable } from "./DataTable";
import { columns } from "./columns";

const MovieList = () => {
  const { data: movies } = useMovies();
  return (
    <div>
      <h1 className="text-center text-2xl font-medium">
        <i>Danh Sách Phim</i>
      </h1>
      <DataTable columns={columns} data={movies ?? []} />
    </div>
  );
};

export default MovieList;
