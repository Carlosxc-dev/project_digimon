import  React, { useEffect, useState } from 'react'; 
import { Conteiner } from "./style";

export default function card() {
  const [digimon, setDigimon] = useState<Promise<any>[]>([]);

  async function getCards() {
    fetch('https://digimon-api.vercel.app/api/digimon')
      .then(async response => {
        const all_digimon = await response.json();
        setDigimon(all_digimon);
      });
  }
  useEffect(() => {
    getCards();
  }, []);


  return (
    <Conteiner>
      {
      digimon.map((digimon: any, index) => { // Fix: Add type annotation 'any' to 'digimon'
        return (
          <div key={index} className='content'>
            <h3>{digimon.name}</h3>
            <img src={digimon.img} alt={digimon.name}/>
            <button>Ver detalhes</button>
          </div>
        )
      })}
        
    </Conteiner>
  )
}
