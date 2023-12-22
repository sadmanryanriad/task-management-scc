/* eslint-disable react/prop-types */
import useAllTaskList from "../../../hooks/useAllTaskList";
import CardTask from "../../miniComponents/CardTask";

const CompletedList = ({handleDelete}) => {
    const [tasks, isLoading] = useAllTaskList();
    if(isLoading) return <h1>Loading...</h1>;
    const filteredTasks = tasks.filter((task) => task.status === "completed");
    return (
        <div className="border-x">
            <h1 className="text-center font-semibold text-xl bg-green-400 rounded-lg p-2">Completed Task List</h1>   
            {
                filteredTasks.map((task) => <CardTask key={task?._id} id={task._id} title={task?.title} description={task?.description} priority={task?.priority} status={task?.status} deadline={task?.deadline} handleDelete={handleDelete}></CardTask>)
            }        
        </div>
    );
};
export default CompletedList;