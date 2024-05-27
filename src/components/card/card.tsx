import { useContext, useEffect, useState } from 'react';
import { Conteiner } from './style';
import { AppContext } from '../../service/render';

export default function card() {
	const { someValue, setSomeValue } = useContext(AppContext); // recebe o valor do contexto

	const get_all_digimon = async () => {
		const response = await fetch('https://digimon-api.vercel.app/api/digimon');
		const resp = await response.json();
		setSomeValue(resp);
	};

	useEffect(() => {
		get_all_digimon();
	}, []);

	const [, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	return (
		<Conteiner>
			{Array.isArray(someValue) &&
				someValue.map((digimon: any, index) => {
					return (
						<div key={index} className="content">
							<h3>{digimon.name}</h3>
							<img src={digimon.img} alt={digimon.name} />
							<button onClick={openModal}>Ver detalhes</button>
						</div>
					);
				})}
		</Conteiner>
	);
}
