import { GoSearch } from "react-icons/go";
import { Conteiner, Content } from "./style";

export default function search_bar() {
  return (
    <Conteiner>
        <Content>
          <form action="post">
            <input type="text" className="text" placeholder="Buscar"/>
            <button className="button">
              <GoSearch className="icon"/>
            </button>
          </form>
        </Content>
    </Conteiner>
  )
}
