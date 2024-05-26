import styled from 'styled-components';

export const Conteiner = styled.div`
	width: 100%;
	margin: 2rem 0;
`;

export const Content = styled.div`
	width: 80%;
	margin: 0 auto;

	form {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		padding: 0.5rem 1rem;

		border: 1px solid ${(props) => props.theme.colors.border};
		background-color: ${(props) => props.theme.colors.primary};
		border-radius: 10px;

		.text {
			width: 100%;
			border: none;
			background-color: transparent;
			outline: none;
			font-size: ${(props) => props.theme.fonts.options_size};
			color: ${(props) => props.theme.colors.text};
		}

		.text::placeholder {
			color: ${(props) => props.theme.colors.text};
			font-family: ${(props) => props.theme.fonts.options_font};
		}

		.button {
			background-color: transparent;
			border: none;
			cursor: pointer;
			color: ${(props) => props.theme.colors.text};
		}
	}
`;
