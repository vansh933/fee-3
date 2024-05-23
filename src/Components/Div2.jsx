import React from 'react'
import { useState } from 'react'
import '../Css/Div2.css'
const Div2 = ({ categories }) => {
  return (
    <>
  <div className="welcome">
    <div className="wel">
      <div className="great">
        <i className="fa-solid fa-greater-than" />
      </div>
      <div className="less">
        <i className="fa-solid fa-less-than" />
      </div>
      <h1>Welcome to thespacious</h1>
      <h3>a furniture and interiors agency.</h3>
      <div className="btn">
        <button>ABOUT</button>
        <button>GO SHOP</button>
      </div>
    </div>
  </div>
  <div id='serv' className="categories">
    <div className="cat-left">
      <div className="clup">
        <h2>FEATURED CATEGORIES</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officia
          rerum facere dolorum, quo ipsam sit repellendus vero nihil quasi.
        </p>
      </div>
      <div className="cldown">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          reiciendis assumenda laudantium aspernatur necessitatibus? Id?
        </p>
        <button className="cat-btn">VIEW ALL CATEGORIES</button>
      </div>
    </div>
    <div className="cat-right">
      {categories.map((category, index) => (
        <div key={index} className={`div${index + 1}`}>
          <img src={category.imageSrc} alt={category.title} />
          <p>{category.title}</p>
        </div>
      ))}
    </div>
  </div>
</>
  )
}

export default Div2
