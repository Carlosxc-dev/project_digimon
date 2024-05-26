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
`;
