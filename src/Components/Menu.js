import React, {useState} from 'react';
import Color from "./Color";
import Block from "./Block";
import Feed from "./Feed";
/* Add any imports you think you might need here! */

const Menu = () => { 
  const [curr, setCurr] = useState([]);
    return (
      [<div className="colorOptions">
          {/* TODO */}
          <Color color="red" handleClick ={(x) => {setCurr([<Block color={x}/>].concat(curr))}}/>
          <Color color="pink" handleClick ={(x) => {setCurr([<Block color={x}/>].concat(curr))}}/>
          <Color color="blue" handleClick ={(x) => {setCurr([<Block color={x}/>].concat(curr))}}/>
          <Color color="green" handleClick ={(x) => {setCurr([<Block color={x}/>].concat(curr))}}/>
      </div>,
      <div>
          {curr}
      </div>
      ]
    );
}

export default Menu;