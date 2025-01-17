import { useState, useEffect, useCallback } from 'react';
import { useParams, withRouter } from 'react-router-dom';

import './movieGrid.scss';

import MovieCard from '../MovieCard/MovieCard';
import Button, { OutlineButton } from '../Button/Button';
import Input from '../Input/Input'

import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';

const MovieGrid = props => {

  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
        try {
            let response = null;
            if (keyword === undefined) {
                const params = {};
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, {params});
                }
            } else {
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search(props.category, {params});
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
            setPage(1);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    getList();
  }, [props.category, keyword]);

const loadMore = async () => {
    try {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1
            };
            switch(props.category) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, {params});
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await tmdbApi.search(props.category, {params});
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    } catch (error) {
        console.error('Error loading more:', error);
    }
}

return (
    <>
        <div className="section mb-3">
            <MovieSearch category={props.category} keyword={keyword}/>
        </div>
        <div className="movie-grid">
            {
                items.map((item, i) => <MovieCard category={props.category} item={item} key={i}/>)
            }
        </div>
        {
            page < totalPage ? (
                <div className="movie-grid__loadmore">
                    <OutlineButton className="small" onClick={loadMore}>Load more</OutlineButton>
                </div>
            ) : null
        }
    </>
);
}

const MovieSearch = withRouter(({ history, category: propCategory, keyword: propKeyword }) => {
    const [keyword, setKeyword] = useState(propKeyword ? propKeyword : '');

    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                const categoryPath = category[propCategory] || propCategory;
                history.push(`/${categoryPath}/search/${encodeURIComponent(keyword.trim())}`);
                window.location.reload();
            }
        },
        [keyword, propCategory, history]
    );

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, goToSearch]);

    return (
        <div className="movie-search">
            <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button className="small" onClick={goToSearch}>Search</Button>
        </div>
    )
});

export default MovieGrid;