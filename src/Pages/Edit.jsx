import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUsers } from "../store/thunk/Fetch";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../ContextApi/Context";

function Edit() {
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

  const { id } = useParams();
  const { data } = useSelector((state) => state.allUser);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const card = data.find((card) => card.id.toString() === id); // Ensure comparison is done correctly
      if (card) {
        setFormData(card);
      }
    }
  }, [data, id]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

 
  const Updated = ()=>{
    toast.info('🦄 Updated the blog post', {
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
    dispatch(editUsers(formData));
    login()
    Updated()
    // alert("Post updated successfully");
    setTimeout(() => {
      navigate("/allpost");
    }, 2000);
  };

  return (
    <div className="mt-14">
      <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-16">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://cdn-icons-png.flaticon.com/128/1022/1022096.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Edit the Post
            </h2>
          </div>
          <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-2">
              <div>
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Title..."
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="image">Image</label>
                <input
                  id="image"
                  name="image"
                  type="text"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Image Link"
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
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Reading Time..."
                  value={formData.reading_time}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="content">Blog Content</label>
                <textarea
                  id="content"
                  name="content"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Blog content..."
                  value={formData.content}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-center">
                <a
                  href="/"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Back to the Home page
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Edit Your Post
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
}

export default Edit;
