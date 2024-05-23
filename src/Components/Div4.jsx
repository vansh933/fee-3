import React from 'react';
import '../Css/Div4.css';

const Div4 = ({ blogData, newsletterTitle, newsletterDescription }) => {
  return (
    <>
      <div  className="view">
        <button>VIEW MORE</button>
      </div>
      <div id='blog' className="blog">
        <div className="blogging">
          <img src={blogData.imageSrc} alt="" />
          <div className="blog-lt">
            <h1 className="blog-h">{blogData.title}</h1>
            <h5 className="blot-t">{blogData.description}</h5>
          </div>
          <div className="blog-rt">
            <div className="rt-l">
              <img src={blogData.leftImageSrc} alt="" />
              <p>{blogData.leftContent}</p>
              <button className="more">{blogData.leftButtonText}</button>
            </div>
            <div className="rt-r">
              <img src={blogData.rightImageSrc} alt="" />
              <p>{blogData.rightContent}</p>
              <button>{blogData.rightButtonText}</button>
            </div>
          </div>
        </div>
      </div>
      <div id='contact' className="newsletter">
        <div className="news">
          <div className="news-one">
            <h2>{newsletterTitle}</h2>
          </div>
          <div className="news-two">
            <p>{newsletterDescription}</p>
            <input type="text" placeholder="Enter Your Email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Div4;
