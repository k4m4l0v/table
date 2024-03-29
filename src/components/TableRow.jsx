import { useState } from "react"
import { Chart } from "./Chart";
import '../styles/table-row.css';

export const TableRow = ({title, today, yesterday, dayOfWeek, sixDaysAgo, fiveDaysAgo, fourDaysAgo, threeDaysAgo, twoDaysAgo}) => {
  const [isOpen, setIsOpen] = useState(false);
  let percent = Math.floor((Math.abs(yesterday - today) / yesterday) * 100);

  if (today < yesterday) {
    percent *= -1;
  }

  return (
    <div className="table-row__container">
      <div 
        className="table-row"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="table-row__item table-row__item_title">
          {title}
        </span>
        <span className="table-row__item table-row__item_today">
          {today}
        </span>
        <span className={`table-row__item table-row__item_yesterday ${yesterday < today ? 'green' : yesterday === today ? '' : 'red'}`}>
          <span>
            {yesterday}
          </span>
          <span 
            className={percent >= 0 ? 'positive-percent' : 'negative-percent'}
          >
            {percent}%
          </span>
        </span>
        <span className={`table-row__item ${dayOfWeek < today ? 'green' : dayOfWeek === today ? '' : 'red'}`}>
          {dayOfWeek}
        </span>
      </div>
      {isOpen && 
        <Chart
          sixDaysAgo={sixDaysAgo}
          fiveDaysAgo={fiveDaysAgo}
          fourDaysAgo={fourDaysAgo}
          threeDaysAgo={threeDaysAgo}
          twoDaysAgo={twoDaysAgo}
          yesterday={yesterday}
          today={today}
          name={title}
        />
      }
    </div>
  )
}
