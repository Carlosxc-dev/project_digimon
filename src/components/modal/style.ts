import { styled } from 'styled-components';

export const Conteiner = styled.div`
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal {
		background: ${(props) => props.theme.colors.primary};
		padding: 20px;
		border-radius: 20px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		position: relative;
		width: 80%;
		max-width: 500px;
		height: 80%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.modal-close-button {
		position: absolute;
		top: 10px;
		right: 10px;
		background: none;
		border: none;
		font-size: 20px;
		cursor: pointer;
	}
`;
