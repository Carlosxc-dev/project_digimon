import React from "react";
import { Conteiner } from "./style";

interface FilterButtonProps {
  option: string;
}

export default function filter_button({ option }: FilterButtonProps) {
  return (
    <Conteiner>
      <h3>{option}</h3>
    </Conteiner>
  )
}
