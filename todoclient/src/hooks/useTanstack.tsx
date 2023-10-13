import { useQuery } from "@tanstack/react-query";
import { readOne } from "../apis/todoApi";

export const useUserTask = (id: string) => {
  const { data } = useQuery({
    queryKey: ["getTask", { id: id }],
    queryFn: () => readOne(id),
    refetchInterval: 3000,
  });
  if (Array.isArray(data)) {
    return { data };
  } else {
    return { data: [] };
  }
};
