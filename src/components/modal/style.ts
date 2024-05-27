import { styled } from 'styled-components';

export const Conteiner = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgb(0, 0, 0, 0.7);
	z-index: 1000;

	.content {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 35%;
		padding: 50px;
		background: linear-gradient(
			to bottom,
			${(props) => props.theme.colors.backgraund_light} 0%,
			${(props) => props.theme.colors.backgraund_dark} 100%
		);
		border-radius: 20px;
		color: black;

		.button_close {
			cursor: pointer;
			border-radius: 50%;
			position: absolute;
			top: 10px;
			right: 10px;
		}

		.description {
			font-family: ${(props) => props.theme.fonts.options_font};
			font-size: ${(props) => props.theme.fonts.options_size};
			color: ${(props) => props.theme.colors.text};
			text-align: justify;
		}
	}

	.content_modal {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		.ball {
			width: 10px;
			height: 10px;
			background-color: ${(props) => props.theme.colors.secundary};
			border-radius: 50%;
			display: inline-block;
			margin-right: 5px;
		}

		.title_modal {
			font-family: ${(props) => props.theme.fonts.card_title_font};
			font-size: 1.8rem;
			color: ${(props) => props.theme.colors.text};
		}

		.img_modal {
			width: 220px;
			height: 220px;
			border-radius: 20px;
		}

		.level_modal {
			font-family: ${(props) => props.theme.fonts.options_font};
			font-size: ${(props) => props.theme.fonts.options_size};
			color: ${(props) => props.theme.colors.text};
		}
	}
`;
