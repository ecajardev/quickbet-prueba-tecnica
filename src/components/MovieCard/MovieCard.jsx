import { Link, withRouter } from 'react-router-dom';
import './movieCard.scss';
import Button from '../Button/Button';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const MovieCard = withRouter(({ history, item, category: propCategory }) => {
    const link = '/' + category[propCategory] + '/' + item.id;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    const handleClick = (e) => {
        e.preventDefault();
        history.push(link);
        setTimeout(() => {
            window.location.href = link;
        }, 100);
    };

    return (
        <Link to={link} onClick={handleClick}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h6>{item.title || item.name}</h6>
        </Link>
    );
});

export default MovieCard;