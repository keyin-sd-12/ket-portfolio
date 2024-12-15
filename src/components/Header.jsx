import { useState } from "react";
import photo_img from "../../images/photo.webp";

function Header() {
  const [show_about, set_show_about] = useState(false);

  const handle_about_click = () => {
    set_show_about((prev) => !prev); // Toggle the state
  };

  return (
    <>
      <header>
        <div className="header_container">
          <button onClick={handle_about_click} className="header_img_container">
            <img src={photo_img} alt={"Photo"} className="header_image" />
          </button>
          <div className="header_text_container">
            <h1>PORTFOLIO</h1>
            <h2>Web Development</h2>
          </div>
        </div>
      </header>
      {show_about && (
        <div className="about_container">
          <p>
            This is a simple portfolio page template created with React. {"\n"}
          </p>

          <p>
            The goal is to create an information resource that showcases my web
            development projects.
          </p>
        </div>
      )}
    </>
  );
}

export default Header;
