import { MediaItem } from '../data/media';
import MediaCard from './MediaCard';
import './MediaList.css';

interface MediaListProps {
  title: string;
  items: MediaItem[];
}

function MediaList({ title, items }: MediaListProps) {
  return (
    <section className="media-list">
      <div className="media-list__inner">
        <h2 className="media-list__title">{title}</h2>
        <div className="media-list__grid">
          {items.map((item) => (
            <MediaCard
              key={item.id}
              title={item.title}
              cover={item.cover}
              rating={item.rating}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MediaList;
