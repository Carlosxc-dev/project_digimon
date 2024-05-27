import { Conteiner } from './style';
import { CiLight } from 'react-icons/ci';
import { MdNightlight } from 'react-icons/md';

export default function tema(prop: { icon: string }) {
	return (
		<Conteiner>
			<p className="text">Tema:</p>
			<p>{prop.icon === 'light' ? <CiLight size={30} /> : <MdNightlight size={30} />}</p>
		</Conteiner>
	);
}
