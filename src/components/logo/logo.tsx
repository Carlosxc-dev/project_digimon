import { Conteiner } from './style';
import img from '../../assets/logo.png';

export default function logo() {
	return (
		<Conteiner>
			<img src={img} alt="logo do digimon" />
		</Conteiner>
	);
}
