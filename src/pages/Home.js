import FollowersColumn from '../components/FollowersColumn'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <FollowersColumn />
        <Feed />
        <SuggestedBox />
    </div>
  );
}

export default Home;
