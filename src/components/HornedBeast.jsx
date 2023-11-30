import {useState} from 'react';

const HornedBeast = (props) => {
  const [buttonClicks, setButtonClicks] = useState(0)
  function handleClick() {
    setButtonClicks(buttonClicks+1)
  }
  return (
    <div onClick={handleClick}>
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.title} title={props.title} />
      <p>{props.description}</p>
      <p> ❤ {buttonClicks}</p>
    </div>
  );
};

export default HornedBeast;

