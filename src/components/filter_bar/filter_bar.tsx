import { useContext } from 'react';
import { AppContext } from '../../service/render';
import { Conteiner } from './style';

export default function filter_bar() {
	const { someValue, setSomeValue } = useContext(AppContext); // recebe o valor do contexto

	const get_all_digimon = async () => {
		const response = await fetch(
			'https://digimon-api.vercel.app/api/digimon'
		);
		const resp = await response.json();
		setSomeValue(resp);
	};

	const get_digimon_by_level = async (level: string) => {
		const response = await fetch(
			`https://digimon-api.vercel.app/api/digimon/level/${level}`
		);
		const resp = await response.json();
		setSomeValue(resp);
	};

	return (
		<Conteiner>
			<button onClick={() => get_all_digimon()}>Todos</button>
			<button onClick={() => get_digimon_by_level('Fresh')}>Fresh</button>
			<button onClick={() => get_digimon_by_level('In training')}>
				In training
			</button>
			<button onClick={() => get_digimon_by_level('Champion')}>
				Champion
			</button>
			<button onClick={() => get_digimon_by_level('Mega')}>Mega</button>
			<button onClick={() => get_digimon_by_level('Ultimate')}>
				Ultimate
			</button>
		</Conteiner>
	);
}
