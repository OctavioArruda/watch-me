import { useState } from 'react';
import { SideBar } from './components/SideBar';
import { MainContent } from './components/MainContent';

import './styles/global.scss';

export function App() {
	const [ selectedGenreId, setSelectedGenreId ] = useState<number>(1);

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
