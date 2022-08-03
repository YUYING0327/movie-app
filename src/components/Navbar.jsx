import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="h-14 bg-gray-900 ">
      <div className="h-full px-10 items-center flex justify-between">
        <div className="flex items-center">
          <div>
            <Link to="/">
              <h1 className="text-2xl border border-gray-200 px-2 rounded-full mr-5 bg-gray-700 text-gray-300">
                Movie App
              </h1>
            </Link>
          </div>
          <div className="space-x-5">
            <Link className="relative group" to="/movies/popular">
              Popular<span className="hovereffect"></span>
            </Link>
            <Link className="relative group" to="/movies/top_rated">
              Top Rated<span className="hovereffect"></span>
            </Link>
            <Link className="relative group" to="/movies/upcoming">
              Upcoming<span className="hovereffect"></span>
            </Link>
          </div>
        </div>
        <div>Avatar</div>
      </div>
    </div>
  );
};

export default Navbar;
