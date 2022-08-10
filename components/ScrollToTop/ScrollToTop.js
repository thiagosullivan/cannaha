import React, { useEffect, useState } from 'react';
import { ScrollContainer } from './style';
import { IoIosArrowUp } from 'react-icons/io';

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }  

  return (
    <>
      {
        showButton 
        &&
      <ScrollContainer onClick={scrollToTop}>
        <IoIosArrowUp />
      </ScrollContainer>
      }
    </>
  )
}

export default ScrollToTop