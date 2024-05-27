import styled from 'styled-components';

export const Conteiner = styled.div`
	position: absolute;
	right: 3rem;
	top: 2rem;

	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	padding: 0.5rem 1rem;
	width: 150px;
	height: 50px;
	border: 1px solid ${(props) => props.theme.colors.primary};
	transition: 0.3s;

	font-family: ${(props) => props.theme.fonts.options_font};
	font-size: ${(props) => props.theme.fonts.card_title_size};
	color: ${(props) => props.theme.colors.text};

	.text {
		margin-right: 0.5rem;
	}

	/* reponsividade */
	@media only screen and (max-width: ${(props) => props.theme.screens.tablet}) {
		right: 1rem;
		top: 1rem;
		width: 120px;
		height: 40px;
		font-size: ${(props) => props.theme.fonts.options_size};
	}
	@media only screen and (max-width: ${(props) => props.theme.screens.mobile_large}) {
		right: 50%;
		top: 10rem;
		transform: translate(50%, -50%);
		width: 100px;
		height: 40px;
		font-size: ${(props) => props.theme.fonts.options_size};
	}
`;
