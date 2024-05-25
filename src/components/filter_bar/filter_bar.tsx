import React from 'react'
import { Conteiner } from "./style";

import Filter_button  from "../filter_button/filter_button";


export default function filter_bar() {

  const options = ["Todos", "Fresh", "In training", "Rookie", "Chapion", "Mega", "Ultimate"];

  return (
    <Conteiner>
      {options.map((optionn, index) => (
        <Filter_button key={index} option={optionn} />
      ))}
    </Conteiner>
  )
}
