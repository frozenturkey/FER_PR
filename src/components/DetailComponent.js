const {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
} = require('reactstrap');

const DetailComponent = ({ product }) => {
  const { name, image, category, price } = product;
  return (
    <Card className="w-100 w-md-25 m-5" outline={false}>
      <CardImg src={image} alt={name} className="" />
      <CardBody>
        <CardSubtitle className="text-muted" tag="h6">
          {category}
        </CardSubtitle>
        <CardTitle>{name}</CardTitle>
        <CardText>{price}</CardText>
      </CardBody>
    </Card>
  );
};

export default DetailComponent;
