import styled from 'styled-components';

export const Conteiner = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 2rem 0;

	
	button {
		background-color: ${(props) => props.theme.colors.primary};
		border: 1px solid ${(props) => props.theme.colors.border};
		border-radius: 10px;
		cursor: pointer;
		transition: 0.3s;
		color: ${(props) => props.theme.colors.text};
		font-size: ${(props) => props.theme.fonts.options_size};
		width: 100px;
		height: 40px;
		font-family: ${(props) => props.theme.fonts.options_font};
	}

	button:hover {
		background-color: ${(props) => props.theme.colors.text};
		color: ${(props) => props.theme.colors.primary};
	}

	/* reponsividade */
	@media only screen and (max-width: ${(props) => props.theme.screens.laptop_4k}) {
	}
	@media only screen and (max-width: ${(props) => props.theme.screens.laptop_large}) {
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		margin: 1rem 0;
		margin-bottom: 2rem;
	}
	@media only screen and (max-width: ${(props) => props.theme.screens.tablet}) {
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
	}
	@media only screen and (max-width: ${(props) => props.theme.screens.mobile_large}) {
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		gap: 1rem;
		margin: 1rem 0;
		margin-bottom: 2rem;

		button {
			width: 80px;
			height: 30px;
			font-size: 12px;
		}
	}
`;
