import { useState } from 'react'
import './App.css';
import Div1 from './Components/Div1';
import Div2 from './Components/Div2';
import Div3 from './Components/Div3';
import Div4 from './Components/Div4';
import Footer from './Components/Footer';
import '../src/Css/responsive.css'
function App() {

  const totalProducts = 9;
  const categories = [
    { imageSrc: 'images/chairs.png', title: 'FANCY CHAIRS' },
    { imageSrc: 'images/tables.png', title: 'FANCY TABLES' },
    { imageSrc: 'images/beds (2).png', title: 'BEDS' },
    { imageSrc: 'images/kitchenware.png', title: 'KITCHEN WARE' },
    { imageSrc: 'images/kitchen-items.png', title: 'KITCHEN ITEMS' },
    { imageSrc: 'images/curtains.png', title: 'WINDOW CURTAINS' }
  ];

  return (
   <>
   <Div1/>
   <Div2 categories={categories}/>
   <Div3 totalProducts={totalProducts}/>
   <Div4
  blogData={{
    imageSrc: 'images/Layer 32.png',
    title: 'READ OUR BLOG',
    description:
      'ONE OF THE BEST AND CLEANIEST WORDPRESS THEME FOR AGENCIES AND ONLINE PORTFOLIOS',
    leftImageSrc: 'images/Layer 35.png',
    leftContent: 'SOME OF THE BEST FURNITURE DESIGNS OF THE YEAR 2024',
    leftButtonText: '+MORE',
    rightImageSrc: 'images/Layer 36.png',
    rightContent: 'SOME OF THE BEST FURNITURE DESIGNS OF THE YEAR 2024',
    rightButtonText: '+MORE'
  }}
  newsletterTitle="SUBSCRIBE TO OUR NEWSLETTER"
  newsletterDescription="GET LATEST NEWS, PROMOTIONAL OFFERS AND DISCOUNTS IN YOUR INBOX"
/>

   <Footer/>
   </>
  );
}

export default App;

