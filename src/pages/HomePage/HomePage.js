import React, { useEffect, useState } from "react";
import "../HomePage/HomePage.css";
import { useSelector, useDispatch } from "react-redux";
import { listDevelopers } from "../../actions/developerActions";

export default function HomePage() {
  const [favoriteList, setFavoriteList] = useState([]);
  const [message, setMessage] = useState();
  const dispatch = useDispatch();

  const developerList = useSelector((state) => state.developerList);
  const { loading, error, developers } = developerList;

  console.log(developers);

  useEffect(() => {
    dispatch(listDevelopers());
  }, [dispatch]);

  const addToFavorite = (item) => {
    console.log(item);
    const newItem = {
      id: item._id,
      serviceImg: item._source.service_photo,
      avatar: item._source.avatar,
      displayName: item._source.display_name,
      price: item._source.starting_from,
    };

    const existItem = favoriteList.find((el) => el.id === newItem.id);
    if (existItem) {
      return;
    } else {
      const newList = [...favoriteList, newItem];
      setFavoriteList(newList);
      setMessage("added to favorite list");
      localStorage.setItem("favList", JSON.stringify(newList));
    }
    console.log(favoriteList);
  };

  return (
    <div className='home'>
      <h1 className='home-heading'>Hire Top Developers</h1>
      {message && <p style={{ textAlign: "center" }}>{message}</p>}
      <div className='data-wrapper'>
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : developers.length === 0 ? (
          <p>List is empty</p>
        ) : (
          developers.data.service_search_results.hits.map((ed, index) => (
            <div key={index} className='card'>
              <img
                src={ed._source.service_photo}
                alt='servicephoto'
                style={{
                  width: "228px",
                  height: "139px",
                  borderRadius: "10px",
                }}
              />
              <button
                onClick={() => addToFavorite(ed)}
                className='heart-wrapper'
              >
                <img src={require("../../assets/whiteheart.png")} alt='heart' />
              </button>
              <img
                src={ed._source.avatar}
                alt='avatar'
                className='avatar'
                style={{ width: "44px", height: "44px", borderRadius: "50%" }}
              />

              <div className='dev-details-wrapper'>
                <div>
                  <span className='dev-name'>{ed._source.display_name}</span>
                  <span className='price'>₦{ed._source.starting_from}</span>
                </div>
                <button className='hire-btn'>Hire</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
