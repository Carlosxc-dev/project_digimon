import styled from 'styled-components';

export const Conteiner = styled.div`
	position: fixed;
	right: 3rem;
	top: 2rem;

	cursor: pointer;
	display: flex;
	justify-content: space-between;
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
`;
