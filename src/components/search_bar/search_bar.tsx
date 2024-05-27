import { GoSearch } from 'react-icons/go';
import { Conteiner, Content } from './style';
import { useContext, useState } from 'react';
import { AppContext } from '../../createContext/createContext';

export default function search_bar() {
	const [name, setName] = useState('');
	const { setSomeValue } = useContext(AppContext);

	const handle_change = (event: any) => {
		console.log(event.target.value);
		setName(event.target.value);
	};

	const get_digimon_by_name = async (name: string) => {
		if (name === '') {
			alert('Digite o nome de um digimon');
			return;
		}

		await fetch(
			`https://digimon-api.vercel.app/api/digimon/name/${name}`
		).then(async (response) => {
			if (!response.ok) {
				alert('Digimon nao encontrado');
			}
			const resp = await response.json(); // Await the response.json() promise
			setSomeValue(resp);
		});
	};

	return (
		<Conteiner>
			<Content>
				<form>
					<input
						type="text"
						className="text"
						placeholder="Buscar Digimon..."
						onChange={handle_change}
					/>
					<button
						className="button"
						onClick={(e) => {
							e.preventDefault();
							get_digimon_by_name(name);
						}}>
						<GoSearch size={25} />
					</button>
				</form>
			</Content>
		</Conteiner>
	);
}
