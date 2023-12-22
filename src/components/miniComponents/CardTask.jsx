import { FaInfo, FaTrash } from "react-icons/fa";

/* eslint-disable react/prop-types */
const CardTask = ({ title, description, priority, deadline }) => {
  return (
    <>
      <div className="card w-96 mt-5 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
            <div className="badge badge-outline">{priority}</div>
          <p>{description}</p>
          <div className="card-actions justify-start">
          <div className="badge badge-secondary badge-outline">{deadline}</div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-info">
              Edit<FaInfo></FaInfo>
            </button>
            <button className="btn btn-sm btn-error text-white">
              Delete<FaTrash></FaTrash>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTask;