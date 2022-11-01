import './Article.css';

function Article(props) {
    const {article} = props;
    return (
            <div className="article">{article.title}</div>
    );
}

export default Article;


