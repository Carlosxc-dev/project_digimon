import { useContext, useEffect, useState } from 'react';
import { Conteiner } from './style';
import { AppContext } from '../../service/render';
import Modal from '../modal/modal';

export default function Card() {
	const { someValue, setSomeValue } = useContext(AppContext); // recebe o valor do contexto
	const [openModal, setOpenModal] = useState(false);
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);
	const [selectedDigimon, setSelectedDigimon] = useState<{
		name: string;
		img: string;
		level: string;
	} | null>(null);

	const get_all_digimon = async () => {
		const response = await fetch('https://digimon-api.vercel.app/api/digimon');
		const resp = await response.json();
		setSomeValue(resp);
	};

	useEffect(() => {
		get_all_digimon();
	}, []);

	const handleOpenModal = (digimon: { name: string; img: string; level: string }) => {
		setSelectedDigimon(digimon);
		setOpenModal(true);
	};

	return (
		
		<Conteiner>
		
				{Array.isArray(someValue) &&
					someValue.map((digimon: any, index) => (
						<div 
							key={index} 
							className={`content ${hoveredCard === index ? 'scale-card' : ''}`}
							onMouseEnter={() => setHoveredCard(index)}
							onMouseLeave={() => setHoveredCard(null)}>
							<h3>{digimon.name}</h3>
							<img src={digimon.img} alt={digimon.name} />
							<button onClick={() => handleOpenModal(digimon)}>Ver detalhes</button>
						</div>
					))}
				<Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
					{selectedDigimon && (
						<div className="content_modal">
							<h3 className="title_modal">{selectedDigimon.name}</h3>
							<img
								className="img_modal"
								src={selectedDigimon.img}
								alt={selectedDigimon.name}
								/>
							<p className="level_modal">
								<span className="ball"></span>
								{selectedDigimon.level}
							</p>
						</div>
					)}
				</Modal>
		
		</Conteiner>
	);
}
