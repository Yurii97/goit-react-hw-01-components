import StatisticsTitle from './StatisticsTitle';
import StatisticsList from './StatisticsList';
import PropTypes from 'prop-types';

function Statistics({ title, data }) {
  return (
    <section className="statistics">
      {{ title } && <StatisticsTitle title={title} />}
      <StatisticsList stats={data} />
    </section>
  );
}

Statistics.prototype = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
