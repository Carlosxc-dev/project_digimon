import { Conteiner } from './style';

export default function Modal({ isOpen, setModalOpen, children }: any) {
	if (isOpen) {
		return (
			<Conteiner>
				<div className="content">
					<button className="button_close" onClick={setModalOpen}>
						X
					</button>
					<div>{children}</div>
					<p className="description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi
						ducimus sit culpa quod? Consequuntur veniam aperiam, magni inventore magnam
						ipsum optio odio saepe ullam eaque. Modi id cupiditate maiores?
					</p>
				</div>
			</Conteiner>
		);
	}

	return null;
}
