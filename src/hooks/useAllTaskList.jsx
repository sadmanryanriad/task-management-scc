import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAllTaskList = () => {
  const {user} = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data =[], isLoading, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/tasks?email=${user?.email}`);
        return res.data;
      } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
      }
    },
  });

  return [data, isLoading, refetch];
};

export default useAllTaskList;
