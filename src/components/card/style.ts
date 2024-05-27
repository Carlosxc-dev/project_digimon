import styled from 'styled-components';

export const Conteiner = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 1.5rem;

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		background-color: ${(props) => props.theme.colors.primary};
		border-radius: 20px;
		border: 1px solid ${(props) => props.theme.colors.border};
		padding: 1rem;

		h3 {
			font-family: ${(props) => props.theme.fonts.card_title_font};
			font-size: ${(props) => props.theme.fonts.card_title_size};
			color: ${(props) => props.theme.colors.text};
		}

		img {
			width: 150px;
			height: 150px;
			border-radius: 20px;
		}

		button {
			background-color: ${(props) => props.theme.colors.secundary};
			border: 1px solid ${(props) => props.theme.colors.primary};
			border-radius: 20px;
			padding: 0.5rem 1rem;
			cursor: pointer;
			font-family: ${(props) => props.theme.fonts.card_button_font};
			font-size: ${(props) => props.theme.fonts.card_button_size};
			color: ${(props) => props.theme.colors.text};
			transition: background-color 0.3s;
		}

		button:hover {
			background-color: ${(props) => props.theme.colors.text};
			color: ${(props) => props.theme.colors.secundary};
			border: 1px solid ${(props) => props.theme.colors.primary};
		}
	}

	/* reponsividade */
	@media only screen and (max-width: ${(props) => props.theme.screens.laptop_4k}) {
	}
	@media only screen and (max-width: ${(props) => props.theme.screens.tablet}) {
	}
	@media only screen and (max-width: ${(props) => props.theme.screens.mobile_large}) {
		.content {
			img {
				width: 100px;
				height: 100px;
			}
		}
	}
	@media only screen and (max-width: ${(props) => props.theme.screens.mobile_small}) {
		gap: 1rem;
		.content {
			gap: 0.5rem;
			img {
				width: 150px;
				height: 150px;
			}
		}
	}
`;
