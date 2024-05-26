import { Conteiner } from './style';
import { CiLight } from 'react-icons/ci';
import { MdNightlight } from 'react-icons/md';

export default function tema(prop: { icon: string }) {
	return (
		<Conteiner>
			<p>Tema:</p>
			<p>
				{prop.icon === 'light' ? (
					<MdNightlight size={30} />
				) : (
					<CiLight size={30} />
				)}
			</p>
		</Conteiner>
	);
}
