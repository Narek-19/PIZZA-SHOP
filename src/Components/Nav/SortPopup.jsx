import React, { useEffect, useState, useRef } from "react";

export const SortPopup = ({data}) => {
  console.log("PopUp");
  const [popUpVisibility, setPopUpVisibility] = useState(false);
  const [category, setCategory] = useState(0);
  const activeItem = data[category];

  const popUpRef = useRef(null);
  const visibilityPopUp = () => {
    setPopUpVisibility(!popUpVisibility);
  };

  const handleOutSideClick = (e) => {
    if (!e.path.includes(popUpRef.current)) {
      setPopUpVisibility(false);
      console.log("outside");
    }
  };
  const changeActive = (index) => {
    setCategory(index);
    setPopUpVisibility(false);
  };
  useEffect(() => {
    document.body.addEventListener("click", handleOutSideClick);
  }, []);

  return (
    <ul ref={popUpRef} className="popup-title">
      <li onClick={visibilityPopUp}>{activeItem}</li>
      {popUpVisibility && data.length && (
        <ul className="Popup">
          {data.map((name, index) => {
            return (
              <li
                onClick={() => changeActive(index)}
                className={category === index ? "active" : ""}
                key={index}
              >
                {name}
              </li>
            );
          })}
        </ul>
      )}
    </ul>
  );
};
