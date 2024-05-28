import React from 'react';
import '../styles/Calendar.scss';

interface CalendarProps {
  tasks: string[] | any[];
  onAnimationEnd?: () => void;
  className: string;
  animationClass?: string
}

const Calendar: React.FC<CalendarProps> = ({ tasks, onAnimationEnd, className, animationClass }) => {
  return (
    <div className={`calendar ${className} ${animationClass || ''}`} onAnimationEnd={onAnimationEnd}>
      <div className="tasks">
        {tasks.length > 0 ? (
          tasks.map((task, index) => <div key={index} className="task">{task}</div>)
        ) : (
          <p>No tasks for today.</p>
        )}
      </div>
    </div>
  );
};

export default Calendar;