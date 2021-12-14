import s from './StatisticsList.module.css';

function StatisticsList({ stats }) {
  return (
    <ul className={s.statList}>
      {stats.map(({ id, label, percentage }) => {
        const randomColor =
          '#' + Math.floor(Math.random() * 16777215).toString(16);
        return (
          // console.log(stat.id)
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: randomColor }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage} %</span>
          </li>
        );
      })}
    </ul>
  );
}

export default StatisticsList;
