import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardProduto = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5K_n9nJBiaAqEJTwVTJVWHOSrJWzL4L3hw&s"
      />
      <Card.Body>
        <Card.Title>Nome do produto: {props.name} </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Preço do produto: {props.preco}
        </Card.Subtitle>
        <Card.Text>Descrição: {props.decricao}</Card.Text>
        <Card.Text>Categoria: {props.categora}</Card.Text>

        <Card.Link href={`/produtos/editar/${props.id}`}>
          <Button variant="warning">Ediatr</Button>
        </Card.Link>

        <Card.Link href={`/produtos/excluir/${props.id}`}>
          <Button variant="danger">Excluir</Button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardProduto;
