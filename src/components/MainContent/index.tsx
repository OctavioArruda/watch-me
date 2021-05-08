import { useEffect, useState } from "react";

import { MovieCard } from '../MovieCard';
import { api } from "../../services/api";

import './styles.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MainContextProps {
	selectedGenreId: number;
}

export function MainContent({ selectedGenreId } : MainContextProps) {
	const [ movies, setMovies ] = useState<MovieProps[]>([]);
	const [ selectedGenre, setSelectedGenre ] = useState<GenreResponseProps>({} as GenreResponseProps);

	useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
			 .then(response => {
				 console.log('api fetching genres by id')
				 console.log(response.data);
      	 setMovies(response.data);
    });

		api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    });
	}, [ selectedGenreId ]);

  return (
		<div className="container">
			<header>
				<span className="category">
					Categoria:&ensp;
					<span>
						{selectedGenre.title}
					</span>
				</span>
			</header>

			<main>
				<div className="movies-list">
					{movies.map(movie => (
						<MovieCard
							key ={movie.imdbID}
							title={movie.Title}
							poster={movie.Poster}
							runtime={movie.Runtime}
							rating={movie.Ratings[0].Value}
						/>
					))}
				</div>
			</main>
		</div>
	)
}
