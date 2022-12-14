import React, {useState} from 'react';
import PropTypes from "prop-types";
import Ball from "./Ball";


function BallSetController(props) {
  // Add initial boxes
  const [count, setCount] = useState(props.initialCount )
  const [ exclude, setExclude ] = useState( [] )

  const addBall = () => setCount(count+1)
  const removeBall = (i) => {
    let newExclude = exclude
    newExclude.push()
    setExclude(newExclude)
    console.log(exclude, newExclude)
  }

  // const balls = [];
  // for (let i = 0; i < count; i++) {
  //   if(!exclude.includes(i)){
  //     balls.push(<Ball
  //       key={i}
  //       removeBall={(i)=> removeBall(i)}/>);
  //   }
  // }

  return (
    Array.from({ length: count }).map((value, i) => {
      if (exclude.includes(i)) {
        return null
      } else {
        return <Ball key={i} removeBall={() => removeBall(i)} />
      }
    })
  )
}

BallSetController.propTypes = {
  initialCount: PropTypes.number.isRequired,
};

export default BallSetController;