import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';

import { SideBar } from './components/SideBar';
import { MainContent } from './components/MainContent';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
	const [selectedGenreId, setSelectedGenreId] = useState<number>(1);

  return (
    <div className="main-container">
			<SideBar
				selectedGenreId={selectedGenreId}
				setSelectedGenreId={setSelectedGenreId}
			/>

			<MainContent
				selectedGenreId={selectedGenreId}
			/>
    </div>
  )
}
