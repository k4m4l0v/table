import { TableRow } from "./TableRow"
import '../styles/table.css';
import { TableHead } from "./TableHead";

export const Table = () => {
  return (
    <div className="table__container">
      <TableHead 
        
      />
      <TableRow
        title='Выручка, руб'
        today={500521}
        yesterday={480521}
        dayOfWeek={4805121}
        sixDaysAgo={0}
        fiveDaysAgo={456000}
        fourDaysAgo={500321}
        threeDaysAgo={345678}
        twoDaysAgo={123456}
      />
      <TableRow
        title='Наличные'
        today={300000}
        yesterday={300000}
        dayOfWeek={300000}
        sixDaysAgo={150000}
        fiveDaysAgo={220000}
        fourDaysAgo={350000}
        threeDaysAgo={123456}
        twoDaysAgo={285000}
      />
      <TableRow
        title='Безналичный расчет'
        today={100000}
        yesterday={100000}
        dayOfWeek={100000}
        sixDaysAgo={100000}
        fiveDaysAgo={130000}
        fourDaysAgo={240000}
        threeDaysAgo={200000}
        twoDaysAgo={100000}
      />
      <TableRow
        title='Кредитные карты'
        today={100521}
        yesterday={100521}
        dayOfWeek={100521}
        sixDaysAgo={100521}
        fiveDaysAgo={100000}
        fourDaysAgo={0}
        threeDaysAgo={40000}
        twoDaysAgo={63864}
      />
      <TableRow
        title='Средний чек, руб'
        today={1300}
        yesterday={900}
        dayOfWeek={800}
        sixDaysAgo={0}
        fiveDaysAgo={456000}
        fourDaysAgo={500321}
        threeDaysAgo={345678}
        twoDaysAgo={123456}
      />
      <TableRow
        title='Средний гость, руб'
        today={1200}
        yesterday={800}
        dayOfWeek={800}
        sixDaysAgo={800}
        fiveDaysAgo={600}
        fourDaysAgo={350}
        threeDaysAgo={1550}
        twoDaysAgo={100}
      />
      <TableRow
        title='Удаления из чека (после оплаты), руб'
        today={1000}
        yesterday={1100}
        dayOfWeek={900}
        sixDaysAgo={400}
        fiveDaysAgo={300}
        fourDaysAgo={200}
        threeDaysAgo={670}
        twoDaysAgo={890}
      />
      <TableRow
        title='Удаления из чека (до оплаты), руб'
        today={1300}
        yesterday={1300}
        dayOfWeek={900}
        sixDaysAgo={400}
        fiveDaysAgo={2000}
        fourDaysAgo={320}
        threeDaysAgo={210}
        twoDaysAgo={460}
      />
      <TableRow
        title='Количество чеков'
        today={34}
        yesterday={36}
        dayOfWeek={34}
        sixDaysAgo={26}
        fiveDaysAgo={28}
        fourDaysAgo={30}
        threeDaysAgo={32}
        twoDaysAgo={34}
      />
      <TableRow
        title='Количество гостей'
        today={34}
        yesterday={36}
        dayOfWeek={34}
        sixDaysAgo={26}
        fiveDaysAgo={28}
        fourDaysAgo={30}
        threeDaysAgo={32}
        twoDaysAgo={34}
      />
    </div>
  )
}
