import FollowersColumn from '../components/FollowersColumn'
import Feed from '../components/Feed'
import SuggestedBox from '../components/SuggestedBox';

const Home = () => {
  return (
    <div className="container">
        <FollowersColumn />
        <Feed />
        <SuggestedBox />
    </div>
  );
}

export default Home;
