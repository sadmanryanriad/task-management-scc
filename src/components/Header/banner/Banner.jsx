    import { Link } from "react-router-dom";
    import Typed from "typed.js";
    import { useEffect } from "react";
    import { Parallax } from "react-parallax";
    import taskPicture from "../../../assets/todo-lists-5238324_1920.jpg";

    const Banner = () => {

    useEffect(() => {
        const options = {
        strings: [
            "Welcome to SCC Technovision Inc.",
            "Collaborative Task Management Platform",
            "Enhance and Improve Your Task Management Experience",
        ],
        typeSpeed: 50, // Typing speed in milliseconds
        backSpeed: 25, // Backspacing speed in milliseconds
        backDelay: 1000, // Delay before starting to backspace
        startDelay: 500, // Delay before typing starts
        loop: true, // Loop the animation
        showCursor: true, // Show the blinking cursor
        cursorChar: "|", // Cursor character
        };

        const typed = new Typed(".typing-element", options);

        return () => {
        typed.destroy(); // Cleanup the Typed.js instance when the component unmounts
        };
    }, []);

    return (
    <Parallax strength={500} bgImage={taskPicture} bgImageAlt="task banner">
    <div
        className="relative bg-cover bg-center h-[80vh] md:h-screen"
        >

        {/* Semi-transparent Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 dark:opacity-80"></div>

        {/* Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
            <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-200 dark:text-gray-400 mb-20 h-24">
                <span className="typing-element"></span>
            </h1>
            <Link to="/login">
                <button className="mt-40 mx-auto btn bg-green-400 border-none px-8 py-3 rounded-full hover:bg-gray-800 hover:text-gray-200 hover:scale-105 transform transition duration-300">
                {"Let's Explore"}
                </button>
            </Link>
            </div>
        </div>
        </div>
    </Parallax>
    );
    };

    export default Banner;