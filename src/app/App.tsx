import Global_styles from '../styles/global_styles';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Conteiner, Btn } from './style';

//themes
import Dark from '../styles/theme/dark';
import Light from '../styles/theme/light';

//components
import Logo from '../components/logo/logo';
import Search_bar from '../components/search_bar/search_bar';
import Filter_bar from '../components/filter_bar/filter_bar';
import Card from '../components/card/card';
import Theme from '../components/tema/tema';

//
import { FaArrowCircleUp } from "react-icons/fa";

export default function App() {
	const [theme, setTheme] = useState(Light);

	const handle_theme = () => {
		theme === Light ? setTheme(Dark) : setTheme(Light);
	};

	const handle_scroll = () => {
		window.scrollTo(0, 0);
	};

	return (
		<ThemeProvider theme={theme}>
			<Global_styles />
			<Conteiner>
				<Logo />
				<Search_bar />
				<Filter_bar />
				<Card />
			</Conteiner>

			{/* //button theme */}
			<button onClick={handle_theme}>
				<Theme icon={theme.title} />
			</button>
			
			{/* //button scroll */}
			<Btn onClick={handle_scroll} className='scroll'>
				<FaArrowCircleUp size={30} />
			</Btn>
		</ThemeProvider>
	);
}
