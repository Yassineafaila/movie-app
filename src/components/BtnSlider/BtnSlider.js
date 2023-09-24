import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
function BtnSlider({ direction, moveSlide }) {
  return (
    <button className="btn-slide mx-3" onClick={moveSlide}>
      {direction === "next" ? (
        <FontAwesomeIcon icon={faChevronRight} />
      ) : (
        <FontAwesomeIcon icon={faChevronLeft} />
      )}
      {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
    </button>
  );
}

export default BtnSlider