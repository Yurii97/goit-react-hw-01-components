import StatisticsElem from './StatisticsElem';

function StatisticsList({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map(stat => (
        <li className="item" key={stat.id}>
          <StatisticsElem label={stat.label} percentage={stat.percentage} />
        </li>
      ))}
    </ul>
  );
}

export default StatisticsList;
