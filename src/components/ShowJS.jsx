import { useState } from "react";
import sequence_scroll_img from "../../images/js.jpg";
import the_beacon from "../../images/the_beacon.jpg";
import html_svg from "../../icons/html.svg";
import css_svg from "../../icons/css.svg";
import js_svg from "../../icons/javascript.svg";

function ShowJS() {
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
                className={`scrolling_image_to_right ${
                  show_element ? "scrolling_image_paused" : ""
                }`}
              />
            ))}
          </div>
          <div className="scroll_gray_overlay"></div>
        </div>

        <button
          onClick={handle_element_click}
          className="scroll_button_overlay js"
        >
          <div className="scroll_button_wrapper">
            <div className="scroll_button_image_container">
              <img
                src={html_svg}
                alt="HTML"
                className="scroll_button_image scroll_image_off"
              />
              <img
                src={css_svg}
                alt="CSS"
                className="scroll_button_image scroll_image_off"
              />
              <img src={js_svg} alt="JS" className="scroll_button_image js" />
            </div>
          </div>
        </button>
      </div>

      {show_element && (
        <div className="information_container">
          <h1 className="information_heading">JavaScript</h1>

          {/* THE BEACON */}
          <div className="information_element_container">
            <h2>THE BEACON</h2>
            <div className="information_element_info_container">
              <a href="https://sd12key.github.io/beacon" target="_blank">
                <img
                  src={the_beacon}
                  alt="The Beacon Image"
                  className="information_image"
                />
              </a>
              <div className="information_text_container">
                <p>
                  Responsive template for a webstore. Written in vanilla
                  JavaScript, app loads store information from local JSON file,
                  features shopping cart functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowJS;
