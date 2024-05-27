import styled from 'styled-components';

export const Conteiner = styled.div`
	width: 70%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	/* reponsividade */
	@media only screen and (max-width: ${(props) => props.theme.screens.tablet}) {
		width: 80%;
	}
	@media only screen and (max-width: ${(props) => props.theme.screens.mobile_large}) {
		width: 90%;
	}
`;
