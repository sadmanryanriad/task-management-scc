import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Header from "../../miniComponents/Header";
import TaskInputForm from "./TaskInputForm";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
  const handleTaskSubmit = (data) => {
    console.log("Submitted data:", data);
    const taskInfo = {
        email: user?.email,
        title: data.title,
        description: data.description,
        priority: data.priority,
        dueDate: data.dueDate,
        status: "todo",
    }
    axiosSecure.post("/tasks", taskInfo)
    .then(res=>{
        // console.log(res.data);
        if(res.data.insertedId){
            toast.success("Task added successfully");
        }else{
            toast.error("Something went wrong!");
        }
    })
  };

  return (
    <div className="p-1">
      <Header>Task Management Dashboard</Header>
      <TaskInputForm onSubmit={handleTaskSubmit}></TaskInputForm>
    </div>
  );
};

export default Dashboard;
