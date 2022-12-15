import {useEffect, useState} from "react";
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
`;

export default function useDeviceOrientation(buttonText) {
  const [orientation, setOrientation] = useState(null);
  const [requested, setRequested] = useState(false);
  // useEffect(() => {
  //   window.addEventListener('deviceorientation', (e) => {
  //     let direction= [map(e.gamma,-90,90,-10,10).toFixed(2), map(e.beta,-90,90,10,-10).toFixed(2),0]
  //     this.setState({gravity:direction});
  //   }, true);
  // }, []);

  const requestPermission = () => {

    const listener = (event) => {
      setOrientation(event);
      console.log(event)
    };

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
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