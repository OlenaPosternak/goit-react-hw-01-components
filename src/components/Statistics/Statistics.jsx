import PropTypes from 'prop-types';
import { Container, Item, StatList, Title } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Container>
      {title ? { title } : <Title>Upload stats</Title>}

      <StatList>
        {stats.map(item => (
          <Item key={item.id}>
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}</span>
          </Item>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
