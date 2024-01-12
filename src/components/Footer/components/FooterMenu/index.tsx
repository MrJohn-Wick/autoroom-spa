import { ListStyled } from "./styled";
import { FooterMenuProps } from "./types";

export function FooterMenu(props: FooterMenuProps) {
    console.log(props);
    return (
        <ListStyled>
            {props.links.map((item, i) => <li key={i}><a href={item.url}>{item.title}</a></li>)}
        </ListStyled>
    );
}