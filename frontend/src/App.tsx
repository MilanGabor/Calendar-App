import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calendar from './components/Calendar';
import Spinner from './components/Spinner';
import { data } from './data/data';
import './styles/App.scss';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [ direction, setDirection ] = useState<'next' | 'prev' | ''>('');
  const [ inTransition, setInTransition ] = useState(false);

  const handlePrevious = () => {
    if (!isAnimating && currentIndex > 0) {
      setDirection('prev');
      setIsAnimating(true);
      setInTransition(true);
    } else if (currentIndex <= 0) {
      alert('No previous day available');
    }
  };

  const handleNext = () => {
    if (!isAnimating && currentIndex < data.length - 1) {
      setDirection('next');
      setIsAnimating(true);
      setInTransition(true);
    } else if (currentIndex >= data.length - 1) {
      alert('No next day available');
    }
  };

  const handleExitAnimationEnd = () => {
    setInTransition(false);
    if (direction === 'next' && currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleEnterAnimationEnd = () => {
    setDirection('');
    setIsAnimating(false);
  };

  const prevDay = currentIndex > 0 ? data[currentIndex - 1] : null;
  const nextDay = currentIndex < data.length - 1 ? data[currentIndex + 1] : null
  const currentDay = data[currentIndex];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className='app'>
              <div className='inner'>

              <div className="navigation">
                <button onClick={handlePrevious} disabled={isAnimating}>Previous</button>
                <span>{!inTransition ? currentDay.date : <Spinner/>}</span>
                <button onClick={handleNext} disabled={isAnimating}>Next</button>
              </div>
              {!inTransition && (
                <Calendar
                  tasks={currentDay.tasks}
                  className='current-day'
                />
              )}
              {direction === 'prev' && inTransition && (
                <Calendar
                  tasks={currentDay.tasks}
                  onAnimationEnd={handleExitAnimationEnd}
                  className='prev-day'
                />
              )}
              {direction === 'next' && inTransition && (
                <Calendar
                  tasks={currentDay.tasks}
                  onAnimationEnd={handleExitAnimationEnd}
                  className='next-day'
                />
              )}
              {direction === 'prev' && inTransition && prevDay && (
                <Calendar
                  tasks={prevDay.tasks}
                  onAnimationEnd={handleEnterAnimationEnd}
                  className='current-day'
                  animationClass='enter-from-left'
                />
              )}
              {direction === 'next' && inTransition && nextDay && (
                <Calendar
                  tasks={nextDay.tasks}
                  onAnimationEnd={handleEnterAnimationEnd}
                  className='current-day'
                  animationClass='enter-from-right'
                />
              )}
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;