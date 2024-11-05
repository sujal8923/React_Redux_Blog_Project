import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { createPost } from "../store/thunk/Fetch"; // Adjust this import based on your actual action creator
import { useNavigate } from "react-router-dom";
import { postUsers } from "../store/thunk/Fetch";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../ContextApi/Context";

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login, loggedIn, user } = useAuth();


  const [formData, setFormData] = useState({
    title: "",
    image: "",
    author: "",
    category: "",
    published_date: "",
    reading_time: "",
    content: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const Created = ()=>{
    toast.info('🦄 Created the blog post', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
      
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postUsers(formData)); // Call the action to create the post
    Created()
    login()
    setTimeout(() => {
      navigate("/allpost"); // Redirect after submission
    }, 2000);
  };

  return (
    <div className="mt-14">
      <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="">
            <img
              className="mx-auto h-12 w-auto"
              src="https://cdn-icons-png.flaticon.com/128/1022/1022096.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create a New Post
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-2">
              <div>
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Title..."
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="image">Image URL</label>
                <input
                  id="image"
                  name="image"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
                  placeholder="Image URL..."
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="author">Author</label>
                <input
                  id="author"
                  name="author"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
                  placeholder="Author name..."
                  value={formData.author}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="category">Category</label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
                  placeholder="Category..."
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="published_date">Published Date</label>
                <input
                  id="published_date"
                  name="published_date"
                  type="date"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
                  value={formData.published_date}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="reading_time">Reading Time</label>
                <input
                  id="reading_time"
                  name="reading_time"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
                  placeholder="Reading Time..."
                  value={formData.reading_time}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="content">Content</label>
                <textarea
                  id="content"
                  name="content"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
                  placeholder="Blog content..."
                  value={formData.content}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Post
              </button>
              <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                // transition: Bounce,
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
