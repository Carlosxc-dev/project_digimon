import Global_styles from "../styles/global_styles"
import {ThemeProvider} from 'styled-components'
import Dark from '../styles/theme/dark'
import { Conteiner } from "./style";
import Logo from '../components/logo/logo'

export default function App() {
	return (
		<ThemeProvider theme={Dark}>
			<Global_styles/>
			<Conteiner>
				<Logo/>
			</Conteiner>
		</ThemeProvider>
	)
}



