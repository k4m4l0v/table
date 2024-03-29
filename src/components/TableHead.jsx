import '../styles/table-row.css';

export const TableHead = () => {
  return (
    <div className="table-row__container">
      <div className="table-row">
        <span className="table-row__item table-head__item">
          Показатель
        </span>
        <span className="table-row__item table-head__item table-row__item_today">
          Текущий день
        </span>
        <span className='table-row__item table-head__item'>
          Вчера
        </span>
        <span className='table-row__item table-head__item'>
          Этот день недели
        </span>
      </div>
    </div>
  )
}
