import StatisticsElem from './StatisticsElem';
import s from './StatisticsList.module.css';

function StatisticsList({ stats }) {
  return (
    <ul className={s.statList}>
      {stats.map(stat => (
        <li className={s.item} key={stat.id}>
          <StatisticsElem label={stat.label} percentage={stat.percentage} />
        </li>
      ))}
    </ul>
  );
}

export default StatisticsList;
