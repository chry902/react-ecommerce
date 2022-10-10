import { useState, useEffect } from "react";

const RateStar = ({ rating }) => {
  const [rate, setRate] = useState(rating);

  useEffect(() => {
    // const rateo = Math.floor(rating.rate);
    setRate(Math.floor(rating.rate));
  }, [rating]);
  // console.log("rateo", rate);

  const createStars = (value) => {
    const arr = Array.from(new Array(value)).fill("⭐");

    return arr.join(" ");
  };

  return <div>{createStars(rate)}</div>;
};
export default RateStar;
