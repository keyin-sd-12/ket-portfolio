import { useState } from "react";
import sequence_scroll_img from "../../images/react.jpg";
import event_manager from "../../images/event_manager.jpg";
import dog_api from "../../images/dog_api.jpg";
import the_nut_spot from "../../images/the_nut_spot.jpg";
import html_svg from "../../icons/html.svg";
import css_svg from "../../icons/css.svg";
import js_svg from "../../icons/javascript.svg";
import react_svg from "../../icons/react.svg";

function ShowReact() {
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
          className="scroll_button_overlay react"
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
              <img
                src={js_svg}
                alt="JS"
                className="scroll_button_image js scroll_image_off"
              />
              <img
                src={react_svg}
                alt="React"
                className="scroll_button_image react"
              />
            </div>
          </div>
        </button>
      </div>

      {show_element && (
        <div className="information_container">
          <h1 className="information_heading">React</h1>

          {/* Event Manager */}
          <div className="information_element_container">
            <h2>Event Manager</h2>
            <div className="information_element_info_container">
              <a href="https://tinyurl.com/jsx-event-manager" target="_blank">
                <img
                  src={event_manager}
                  alt="Event Manager Image"
                  className="information_image"
                />
              </a>
              <div className="information_text_container">
                <p>
                  My first React app - a simple event manager that keeps track
                  of events (let's add, modify, and delete) on a remote
                  <a
                    href="https://jsonbin.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;JSONbin.io&nbsp;
                  </a>
                  file.
                </p>
              </div>
            </div>
          </div>

          {/* Dog API */}
          <div className="information_element_container">
            <h2>Dog Image API</h2>
            <div className="information_element_info_container">
              <a href="https://tinyurl.com/dog-api" target="_blank">
                <img
                  src={dog_api}
                  alt="Dog Image API App Image"
                  className="information_image"
                />
              </a>
              <div className="information_text_container">
                <p>
                  Fetches a selected number of images for any chosen dog breed
                  from the
                  <a
                    href="https://dog.ceo/dog-api"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;Dog&nbsp;API&nbsp;
                  </a>
                  dataset.
                </p>
              </div>
            </div>
          </div>

          {/* The Nut Spot */}
          <div className="information_element_container">
            <h2>THE NUT SPOT</h2>
            <div className="information_element_info_container">
              <a href="https://tinyurl.com/v001a-nut-sp0t" target="_blank">
                <img
                  src={the_nut_spot}
                  alt="The Nut Spot Image"
                  className="information_image"
                />
              </a>
              <div className="information_text_container">
                <p>Responsive React code for a webstore.</p>
                <p>
                  Features fetching store contents from the remote
                  <a
                    href="https://jsonbin.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;JSONbin.io&nbsp;
                  </a>
                  file, shopping cart, and after placing an order, the app
                  uploads order details to the remote bin, records it, and
                  updates the available quantities of the products.
                </p>
                <p>
                  Multi-user friendly (orders can be placed at the same time
                  from different browsers), it also features a login page,
                  password change functionality, an account page that saves the
                  user's default shipping address and displays order history.
                  Alternatively, there is a guest checkout option available for
                  users who do not wish to log in.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowReact;
