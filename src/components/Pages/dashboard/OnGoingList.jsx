import useAllTaskList from "../../../hooks/useAllTaskList";
import CardTask from "../../miniComponents/CardTask";

const OnGoingList = () => {
    const [tasks, isLoading] = useAllTaskList();
    if(isLoading) return <h1>Loading...</h1>;
    const filteredTasks = tasks.filter((task) => task.status === "ongoing");
    return (
        <div className="border">
            <h1 className="text-center">All Task List</h1>   
            {
                filteredTasks.map((task) => <CardTask key={task?._id} title={task?.title} description={task?.description} priority={task?.priority} status={task?.status} deadline={task?.deadline}></CardTask>)
            }       
        </div>
    );
};
export default OnGoingList;