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
import Swal from "sweetalert2";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [, , refetch] = useAllTaskList();

  const handleTaskSubmit = (data) => {
    console.log("Submitted data:", data);
    const taskInfo = {
      email: user?.email,
      title: data.title,
      description: data.description,
      priority: data.priority,
      deadline: data.deadline,
      status: "todo",
    };
    axiosSecure.post("/tasks", taskInfo).then((res) => {
      // console.log(res.data);
      refetch();
      if (res.data.insertedId) {
        toast.success("Task added successfully");
      } else {
        toast.error("Something went wrong!");
      }
    });
  };

  const handleDelete = (id) => {
    // console.log("Deleted task id:", id);
    axiosSecure.delete(`/tasks/${id}`).then((res) => {
      console.log(res.data);
      refetch();
      if (res.data.deletedCount) {
        toast.success("Task deleted successfully");
      } else {
        toast.error("Something went wrong!");
      }
    });
  };

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("text/plain", taskId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, divId) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    const statusName = divId;
    axiosSecure.patch(`/tasks?id=${taskId}&status=${divId}`, { status: statusName }).then((res) => {
      console.log(res.data);
      refetch();
      Swal.fire({
        title: "Task status updated!",
        text: `Moved to ${divId}`,
        icon: "success"
      });
     })
    // console.log("Task ID:", taskId, "Div:", divId);
  };

  return (
    <div className="p-1 w-full">
      <Header>Task Management Dashboard</Header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <TaskInputForm onSubmit={handleTaskSubmit}></TaskInputForm>
        <AllTaskList handleDelete={handleDelete} handleDragStart={handleDragStart} handleDragOver={handleDragOver} handleDrop={handleDrop}></AllTaskList>
        <OnGoingList handleDelete={handleDelete} handleDragStart={handleDragStart} handleDragOver={handleDragOver} handleDrop={handleDrop}></OnGoingList>
        <CompletedList handleDelete={handleDelete} handleDragStart={handleDragStart} handleDragOver={handleDragOver} handleDrop={handleDrop}></CompletedList>
      </div>
    </div>
  );
};

export default Dashboard;
