import { useContext, useState } from 'react';
import { AppContext } from '../../createContext/createContext';
import { Conteiner } from './style';

export default function filter_bar() {
	const { setSomeValue } = useContext(AppContext); // recebe o valor do contexto
	const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

	const get_all_digimon = async () => {
		const response = await fetch(
			'https://digimon-api.vercel.app/api/digimon'
		);
		const resp = await response.json();
		setSomeValue(resp);
		setSelectedLevel(null);
	};

	const get_digimon_by_level = async (level: string) => {
		const response = await fetch(
			`https://digimon-api.vercel.app/api/digimon/level/${level}`
		);
		const resp = await response.json();
		setSomeValue(resp);
		setSelectedLevel(level);
	};

	return (
		<Conteiner>
			<button onClick={() => get_all_digimon()} 
				className={selectedLevel === null ? 'selected' : ''}
			>Todos</button>
			<button onClick={() => get_digimon_by_level('Fresh')}
				className={selectedLevel === 'Fresh' ? 'selected' : ''}
			>Fresh</button>
			<button onClick={() => get_digimon_by_level('In training')}
				className={selectedLevel === 'In training' ? 'selected' : ''}
			>
				In training
			</button>
			<button onClick={() => get_digimon_by_level('Champion')}
				className={selectedLevel === 'Champion' ? 'selected' : ''}
			>
				Champion
			</button>
			<button onClick={() => get_digimon_by_level('Mega')}
				className={selectedLevel === 'Mega' ? 'selected' : ''}
			>Mega</button>
			<button onClick={() => get_digimon_by_level('Ultimate')}
				className={selectedLevel === 'Ultimate' ? 'selected' : ''}
			>
				Ultimate
			</button>
			<button onClick={() => get_digimon_by_level('Armor')} 
				className={selectedLevel === 'Armor' ? 'selected' : ''}
			>Armor</button>
		</Conteiner>
	);
}
