import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { Button } from '../../components/Button';
import './styles.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar() {
	const [selectedGenreId, setSelectedGenreId] = useState(1);

	const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

	useEffect(() => {
    api.get<GenreResponseProps[]>('genres')
		.then(response => {
      setGenres(response.data);
    });
  }, []);


  return (
    <div className="sidebar-container">
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </div>
  )
}
