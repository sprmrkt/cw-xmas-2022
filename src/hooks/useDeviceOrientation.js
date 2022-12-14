import {useEffect, useState} from "react";

export default function useDeviceOrientation() {
  const [ orientation, setOrientation ] = useState( null );
  // useEffect(() => {
  //   window.addEventListener('deviceorientation', (e) => {
  //     let direction= [map(e.gamma,-90,90,-10,10).toFixed(2), map(e.beta,-90,90,10,-10).toFixed(2),0]
  //     this.setState({gravity:direction});
  //   }, true);
  // }, []);

  useEffect(
    () => {
      const listener = (event) => {
        setOrientation(event);
      };
      document.addEventListener("deviceorientation", listener);

      return () => {
        document.removeEventListener("deviceorientation", listener);
      };
    }
  );

  return orientation

}