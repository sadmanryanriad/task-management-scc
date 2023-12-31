/* eslint-disable react/prop-types */
import useAllTaskList from "../../../hooks/useAllTaskList";
import CardTask from "../../miniComponents/CardTask";

const AllTaskList = ({ handleDelete, handleDragOver, handleDrop,handleDragStart }) => {
  const [tasks, isLoading] = useAllTaskList();
  if (isLoading) return <h1>Loading...</h1>;
  const filteredTasks = tasks.filter((task) => task.status === "todo");
  return (
    <div
      onDragOver={(e) => handleDragOver(e, "todo")}
      onDrop={(e) => handleDrop(e, "todo")}
      className="border-x"
    >
      <h1 className="text-center font-semibold text-xl bg-blue-400 rounded-lg p-2">
        All Task List
      </h1>
      {filteredTasks.map((task) => (
        <CardTask
          key={task?._id}
          id={task._id}
          title={task?.title}
          description={task?.description}
          priority={task?.priority}
          status={task?.status}
          deadline={task?.deadline}
          handleDelete={handleDelete}
          handleDragStart={handleDragStart}
        ></CardTask>
      ))}
    </div>
  );
};

export default AllTaskList;
