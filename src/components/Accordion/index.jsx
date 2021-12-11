import { Container, Summary } from "./Accordion.styles";

export default function Accordion({ title, children, defaultOpen, mx = {} }) {
    return (
        <Container mx={mx}>
            <div>
                <details open={defaultOpen && true}>
                    <Summary>{title}</Summary>
                    {children}
                </details>
            </div>
        </Container>
    );
}
