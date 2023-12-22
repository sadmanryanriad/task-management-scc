
const fakeCards = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
    { id: 4, title: "Task 4" },
    { id: 5, title: "Task 5" },
    { id: 6, title: "Task 6" },
    { id: 7, title: "Task 7" },
    { id: 8, title: "Task 8" },
    { id: 9, title: "Task 9" },
    { id: 10, title: "Task 10" },
    { id: 11, title: "Task 11" },
    { id: 12, title: "Task 12" },
    { id: 13, title: "Task 13" },
    { id: 14, title: "Task 14" },
    { id: 15, title: "Task 15" },
    { id: 16, title: "Task 16" },
    { id: 17, title: "Task 17" },
    { id: 18, title: "Task 18" },
];


const Test = () => {
    const handleDragStart = (e, taskId) => {
        e.dataTransfer.setData("text/plain", taskId);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, divId) => {
        e.preventDefault();
        const taskId = e.dataTransfer.getData("text/plain");
        console.log("Task ID:", taskId, "Div:", divId);
    };

    const tasksX = fakeCards.slice(0, 5);
    const tasksY = fakeCards.slice(-5);

    return (
        <div>
            <div className="w-screen h-screen flex justify-center items-center gap-10">
                <div
                    id="x"
                    className="w-44 h-96 bg-gray-200"
                    onDragOver={(e) => handleDragOver(e, "x")}
                    onDrop={(e) => handleDrop(e, "x")}
                >
                    {tasksX.map((task) => (
                        <div
                            key={task.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, task.id)}
                            className="btn btn-info m-3"
                        >
                            {task.title}
                        </div>
                    ))}
                </div>
                <div
                    id="y"
                    className="w-44 h-96 bg-blue-200"
                    onDragOver={(e) => handleDragOver(e, "y")}
                    onDrop={(e) => handleDrop(e, "y")}
                >
                    {tasksY.map((task) => (
                        <div
                            key={task.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, task.id)}
                            className="btn btn-info m-3"
                        >
                            {task.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Test;