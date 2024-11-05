import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/thunk/Fetch";
import { useNavigate } from "react-router-dom";
import Loader from "../Component/Loader";
// import ToggleButton from 'react-bootstrap/ToggleButton';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

// import Category from "../Component/Category";
// import { ButtonGroup, ToggleButton } from "react-bootstrap";

const AllPosts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [CatData, setCatData] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { isLoading, data, error } = useSelector((state) => state.allUser);

  if (isLoading) {
    return (
      <div className="flex justify-center mt-[20%]">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const viewLevel = (id) => {
    navigate(`/preview/${id}`);
  };

  const editPost = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="bg-gray-100 b overflow-x-hidden">

      <div className="flex justify-center ">
        <div className="category    mt-24 flex justify-center gap-5 bg-black text-white rounded-lg  w-[90vw] md:w-[450px]">
          <button className="p-2  text-white">
            <span>All</span> <input type="radio" checked={CatData === ""} value={''} onChange={(e)=> setCatData(e.target.value)} />
          </button>
          <button className="p-2  text-white">
            Apps{" "}
            <input type="radio" name="" id="" checked={CatData === "Apps"} value={'Apps'} onChange={(e)=> setCatData(e.target.value)} />
          </button>
          <button className="p-2  text-white">
            Startups{" "}
            <input
              type="radio"
              name=""
              id=""
              checked={CatData === "Startups"}
              value={'Startups'} 
              onChange={(e)=> setCatData(e.target.value)}
            />
          </button>
          <button className="p-2  text-white">
            AI <input type="radio" name="" id="" checked={CatData === "AI"} value={'AI'} onChange={(e)=> setCatData(e.target.value)} />
          </button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 container">
        {Array.isArray(data) && data.length > 0 ? (
          data.filter((ele)=>{
            if(CatData === 'AI'){
              return ele.category === 'AI'
            } 
            else if (CatData === 'Apps') {
                  return ele.category === 'Apps'
            }
            else if (CatData === 'Startups'){
              return ele.category === 'Startups'
            }
            else{
              return ele
            }
           
          })
          .map((card) => (
            <div
              className="flex max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16"
              key={card.id}
            >
              <div className="border border-gray-400 bg-white rounded flex flex-col justify-between leading-normal">
                <img
                  src={card?.image}
                  className="w-full mb-3"
                  alt={card?.title}
                />
                <div className="p-4 pt-2">
                  <div className="mb-8">
                    <p className="text-sm text-gray-600">{card?.category}</p>
                    <a
                      href="#"
                      className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600"
                    >
                      {card?.title}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <a
                        href="#"
                        className="text-gray-900 font-semibold leading-none hover:text-indigo-600"
                      >
                        {card?.author}
                      </a>
                      <p className="text-gray-600">{card?.published_date}</p>
                    </div>
                  </div>
                  <div className="flex justify-around">
                    <button
                      className="border p-1 w-28 hover:bg-red-600 text-black"
                      onClick={() => viewLevel(card.id)}
                    >
                      View
                    </button>
                    <button
                      className="border p-1 w-28 hover:bg-red-600 text-black"
                      onClick={() => editPost(card.id)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>No posts available</h1>
        )}
      </div>
    </div>
  );
};

export default AllPosts;
