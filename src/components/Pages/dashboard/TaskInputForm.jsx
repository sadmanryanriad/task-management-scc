/* eslint-disable react/prop-types */
import { useForm, Controller } from "react-hook-form";

const TaskInputForm = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title:
        </label>
        <Controller
          control={control}
          name="title"
          defaultValue=""
          render={({ field }) => (
              <input
              {...field}
              type="text"
              placeholder="Buy Shoes"
              className="w-full border p-2 rounded-md"
              minLength={3}
              required
            />
          )}
        />
        {errors.title && (
          <span className="text-red-500">
            Title must be at least 3 characters long.
          </span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Priority:
        </label>
        <Controller
          control={control}
          name="priority"
          defaultValue="low"
          render={({ field }) => (
            <select
              {...field}
              className="w-full border p-2 rounded-md"
              required
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          )}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description:
        </label>
        <Controller
          control={control}
          name="description"
          defaultValue=""
          render={({ field }) => (
              <textarea
              {...field}
              placeholder="Buy Formal Shoes"
              className="w-full border p-2 rounded-md"
              minLength={3}
              required
            />
          )}
        />
        {errors.description && (
          <span className="text-red-500">
            Description must be at least 3 characters long.
          </span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Deadline:
        </label>
        <Controller
          control={control}
          name="deadline"
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="date"
              className="w-full border p-2 rounded-md"
              required
            />
          )}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default TaskInputForm;
