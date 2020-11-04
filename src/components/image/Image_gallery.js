import React, { useEffect, useState } from "react";
import axios from "axios";
import { Downloads, Likes, Views } from "./components/index";
import Loading from "../loading/Loading";

import InfiniteScroll from "react-infinite-scroll-component";

export default function Image_gallery() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    const count = 12;
    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then((res) => {
        setImages([...images, ...res.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={getImages}
      hasMore={true}
      loader={<Loading />}
    >
      <div className="container">
        {images.map((image) => {
          return (
            <div className="card_container" key={image.id}>
              <div
                className="card"
                style={{ backgroundImage: `url(${image.urls.thumb})` }}
              ></div>
              <div className="card_info">
                <div
                  className="author_img"
                  style={{
                    backgroundImage: `url(${image.user.profile_image.medium})`,
                  }}
                ></div>
                <h2>{image.user.username}</h2>
                <p>
                  {image.description
                    ? image.description
                    : image.alt_description}
                </p>
                <div className="card_data">
                  <div>
                    <Likes />
                    <span>{image.likes}</span>
                  </div>
                  <div>
                    <Views />
                    <span>{image.views}</span>
                  </div>
                  <div>
                    <Downloads />
                    <span>{image.downloads}</span>
                  </div>
                </div>
                <a href={`${image.links.html}`}>Open in UnSplash</a>
              </div>
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
}
