import { useState } from "react";
import sequence_scroll_img from "../../images/html.jpg";
import smart_home from "../../images/smart_home.jpg";
import paradise_properties from "../../images/paradise_properties.jpg";
import saturn from "../../images/saturn.jpg";
import html_svg from "../../icons/html.svg";
import css_svg from "../../icons/css.svg";

function ShowHtml() {
  const [show_element, set_show_element] = useState(false);

  const handle_element_click = () => {
    set_show_element((prev) => !prev);
  };

  return (
    <>
      <div className="sequence_element_container">
        <div className="sequence_scroll_div">
          <div className="inner_scroll_div">
            {Array.from({ length: 3 }).map((_, index) => (
              <img
                key={index}
                src={sequence_scroll_img}
                alt="Scrolling Image"
                className={`scrolling_image_to_left ${
                  show_element ? "scrolling_image_paused" : ""
                }`}
              />
            ))}
          </div>
          <div className="scroll_gray_overlay"></div>
        </div>

        <button
          onClick={handle_element_click}
          className="scroll_button_overlay"
        >
          <div className="scroll_button_wrapper">
            <div className="scroll_button_image_container">
              <img src={html_svg} alt="HTML" className="scroll_button_image" />
              <img
                src={css_svg}
                alt="CSS"
                className="scroll_button_image scroll_image_off"
              />
            </div>
          </div>
        </button>
      </div>

      {show_element && (
        <div className="information_container">
          <h1 className="information_heading">HTML/CSS</h1>

          {/* smarthome */}
          <div className="information_element_container">
            <h2>smarthome</h2>
            <div className="information_element_info_container">
              <a href="https://tinyurl.com/sd12-sh" target="_blank">
                <img
                  src={smart_home}
                  alt="smarthome Image"
                  className="information_image"
                />
              </a>
              <div className="information_text_container">
                <p>Simple title page in HTML and CSS with some hover effects</p>
              </div>
            </div>
          </div>

          {/* Paradise Properties */}
          <div className="information_element_container">
            <h2>1-888-MYDREAM</h2>
            <div className="information_element_info_container">
              <a href="https://tinyurl.com/pp-dream" target="_blank">
                <img
                  src={paradise_properties}
                  alt="Paradise Properties Image"
                  className="information_image"
                />
              </a>
              <div className="information_text_container">
                <p>Static 3-page website design for a resort company.</p>
              </div>
            </div>
          </div>

          {/* Saturn */}
          <div className="information_element_container">
            <h2>SATURN</h2>
            <div className="information_element_info_container">
              <a href="https://tinyurl.com/saturn-car" target="_blank">
                <img
                  src={saturn}
                  alt="Saturn Image"
                  className="information_image"
                />
              </a>
              <div className="information_text_container">
                <p>
                  Three-page responsive website design about GM SATURN car
                  brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowHtml;
