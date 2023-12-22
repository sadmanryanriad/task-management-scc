import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Header from "../../miniComponents/Header";
import TaskInputForm from "./TaskInputForm";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";
import AllTaskList from "./AllTaskList";
import OnGoingList from "./OnGoingList";
import CompletedList from "./CompletedList";
import useAllTaskList from "../../../hooks/useAllTaskList";

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [,,refetch] = useAllTaskList();

  const handleTaskSubmit = (data) => {
    console.log("Submitted data:", data);
    const taskInfo = {
        email: user?.email,
        title: data.title,
        description: data.description,
        priority: data.priority,
        deadline: data.deadline,
        status: "todo",
    }
    axiosSecure.post("/tasks", taskInfo)
    .then(res=>{
        // console.log(res.data);
        refetch();
        if(res.data.insertedId){
            toast.success("Task added successfully");
        }else{
            toast.error("Something went wrong!");
        }
    })
  };

  const handleDelete = (id) => {
    // console.log("Deleted task id:", id);
    axiosSecure.delete(`/tasks/${id}`)
   .then(res=>{
        console.log(res.data);
        refetch();
        if(res.data.deletedCount){
            toast.success("Task deleted successfully");
        }else{
            toast.error("Something went wrong!");
        }
    })
  }

  return (
    <div className="p-1 w-full">
      <Header>Task Management Dashboard</Header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      <TaskInputForm onSubmit={handleTaskSubmit}></TaskInputForm>
      <AllTaskList handleDelete={handleDelete}></AllTaskList>
      <OnGoingList handleDelete={handleDelete}></OnGoingList>
      <CompletedList handleDelete={handleDelete}></CompletedList>
      </div>
    </div>
  );
};

export default Dashboard;
