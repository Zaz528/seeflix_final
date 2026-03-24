import Header from '../components/Header';
import MediaList from '../components/MediaList';
import Footer from '../components/Footer';
import { trendingMovies, topShows } from '../data/media';
import './Home.css';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <MediaList title="Trending Movies" items={trendingMovies} />
        <MediaList title="Top TV Shows" items={topShows} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
