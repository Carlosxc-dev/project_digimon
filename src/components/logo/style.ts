import styled from 'styled-components';

export const Conteiner = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 2rem 0;

	img {
		width: 345px;
		height: 166px;
	}

	/* reponsividade */
	@media only screen and (max-width: ${(props) => props.theme.screens.tablet}) {
		img {
			width: 300px;
			height: 144px;
		}
	}
	@media only screen and (max-width: ${(props) => props.theme.screens.mobile_large}) {
		margin-bottom: 3rem;
		img {
			width: 200px;
			height: 96px;
		}
	}
`;
