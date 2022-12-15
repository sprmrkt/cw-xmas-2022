import {useState} from "react";
import styled from "styled-components";

const Holder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  @media( min-width: 768px ) {
    display: none;
  }
`;

export default function useDeviceOrientation(buttonText) {
  const [orientation, setOrientation] = useState(null);
  const [requested, setRequested] = useState(false);

  const requestPermission = () => {

    const listener = (event) => {
      setOrientation(event);
      console.log(event)
    };

    if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
      DeviceOrientationEvent.requestPermission()
        .then(response => {
          if (response === "granted") {
            window.addEventListener("deviceorientation", listener)
            return () => {
              window.removeEventListener("deviceorientation", listener);
            };
          }
        })
        .catch(console.error)
      setRequested(true)
    } else {
      setRequested(true)
    }
  }

  const Overlay = () => {
    return (
      <>
        {!requested && <Holder className="orientationRequestHolder">
          <button className="orientationRequestButton" onClick={() => requestPermission()}>{buttonText ? buttonText : 'Enter'}</button>
        </Holder>}
      </>
    )
  }

  return [Overlay, orientation]

}