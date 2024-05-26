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
		width: 130px;
		height: 50px;
		font-family: ${(props) => props.theme.fonts.options_font};
	}

	button:hover {
		background-color: ${(props) => props.theme.colors.secundary};
		color: ${(props) => props.theme.colors.text};
	}
`;
