import { OutlineButton } from '../components/Button/Button';
import HeroSlide from '../components/HeroSlide/HeroSlide';
import MovieList from '../components/MovieList/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi';
//import { Link } from 'react-router-dom';
//import LoginSignUp from './LoginSignUp';


const Home = () => {
    return (
        <>
            <HeroSlide />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Popular</h2>
                        <a href="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </a>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Now Playing</h2>
                        <a href="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </a>
                    </div>
                    <MovieList category={category.movie} type={movieType.now_playing} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Upcoming</h2>
                        <a href="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </a>
                    </div>
                    <MovieList category={category.movie} type={movieType.upcoming} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated</h2>
                        <a href="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </a>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated} />
                </div>
            </div>

            <div className="">
                <div className="">Homeee</div>
                {/* <LoginSignUp /> */}
            </div>
        </>
    );
}

export default Home;