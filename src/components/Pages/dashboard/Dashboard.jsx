import Header from "../../miniComponents/Header";
import TaskInputForm from "./TaskInputForm";

const Dashboard = () => {
  const handleTaskSubmit = (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <div className="p-1">
      <Header>Task Management Dashboard</Header>
      <TaskInputForm onSubmit={handleTaskSubmit}></TaskInputForm>
    </div>
  );
};

export default Dashboard;
