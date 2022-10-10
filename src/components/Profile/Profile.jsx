import PropTypes from "prop-types";
import { Container, Name, Tag, Location, Stats} from "./Profile.styled";


export const Profile = props => {

  return (
    <Container>
      <div class="description">
        <img src={props.avatar} alt={props.username} class="avatar" />
        <Name>{props.username}</Name>
        <Tag>@{props.tag}</Tag>
        <Location>{props.location}</Location>
      </div>

      <Stats>
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{props.stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{props.stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{props.stats.likes}</span>
        </li>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number)
};
