import Global_styles from '../styles/global_styles';
import { ThemeProvider } from 'styled-components';
import Dark from '../styles/theme/dark';
import { Conteiner } from './style';

//components
import Logo from '../components/logo/logo';
import Search_bar from '../components/search_bar/search_bar';
import Filter_bar from '../components/filter_bar/filter_bar';
import Card from '../components/card/card';
import Theme from '../components/tema/tema';

export default function App() {
	return (
		<ThemeProvider theme={Dark}>
			<Global_styles />
			<Conteiner>
				<Logo />
				<Theme />
				<Search_bar />
				<Filter_bar />
				<Card />
			</Conteiner>
		</ThemeProvider>
	);
}
