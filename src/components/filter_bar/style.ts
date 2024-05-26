import styled from 'styled-components';

export const Conteiner = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 2rem 0;

	button {
		background-color: ${(props) => props.theme.colors.primary};
		border: 1px solid ${(props) => props.theme.colors.primary};
		border-radius: 10px;
		cursor: pointer;
		transition: 0.3s;
		padding: 0.5rem 1rem;
		color: ${(props) => props.theme.colors.text};
	}

	button:hover {
		background-color: ${(props) => props.theme.colors.secundary};
		color: ${(props) => props.theme.colors.text};
	}
`;
