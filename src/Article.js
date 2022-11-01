import './Article.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Article = (props) => {
    const {article} = props;
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.body}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Article;


