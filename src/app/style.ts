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

export const Btn = styled.header`
		position: fixed;
		bottom: 20px;
		right: 30px;
		background-color: ${(props) => props.theme.colors.primary};
		border: none;
		border-radius: 50%;
		color: ${(props) => props.theme.colors.text};
		cursor: pointer;
		transition: 0.3s;

		&:hover{
			background-color: ${(props) => props.theme.colors.secondary};
			transform: scale(1.1);
		}

		@media only screen and (max-width: ${(props) => props.theme.screens.mobile_large}) {
			bottom: 10px;
			right: 5px;
		}
		@media only screen and (max-width: ${(props) => props.theme.screens.mobile_small}) {
			right: 20px;
		}
	}
	
`;
