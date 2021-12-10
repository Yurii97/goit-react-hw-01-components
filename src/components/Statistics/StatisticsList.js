import StatisticsElem from './StatisticsElem';
import s from './StatisticsList.module.css';

function StatisticsList({ stats }) {
  return (
    <ul className={s.statList}>
      {stats.map(stat => {
        const randomColor =
          '#' + Math.floor(Math.random() * 16777215).toString(16);
        return (
          <li
            className={s.item}
            key={stat.id}
            style={{ backgroundColor: randomColor }}
          >
            <StatisticsElem label={stat.label} percentage={stat.percentage} />
          </li>
        );
      })}
    </ul>
  );
}

export default StatisticsList;
