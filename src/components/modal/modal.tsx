import { useState } from 'react';
import { Conteiner } from './style';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	name: string;
}

export default async function Modal({ isOpen, onClose, name }: ModalProps) {
	if (!isOpen) return null;

	const [digimon, setDigimon] = useState<{ name: string }>({});

	await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`).then(
		async (response) => {
			if (!response.ok) {
				throw new Error('Digimon nao encontrado');
			}
			const resp = await response.json(); // Await the response.json() promise
			setDigimon(resp);
		}
	);

	return (
		<Conteiner>
			<div className="modal-overlay">
				<div className="modal">
					<button className="modal-close-button" onClick={onClose}>
						X
					</button>
					<img
						src={digimon.img}
						alt={digimon.name}
						className="image_modal"
					/>
					<h4>
						<span className="ball"></span>
						{digimon.level}
					</h4>
					<p className="text_modal">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Praesentium, dolorum quas labore ad laborum harum nobis
						eaque veritatis reiciendis doloribus consequuntur quos.
						Magni blanditiis ad eos iure, doloribus et voluptatibus!
					</p>
				</div>
			</div>
		</Conteiner>
	);
}
