import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "https://collaborative-task-management-server-blond.vercel.app/"
})

const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;