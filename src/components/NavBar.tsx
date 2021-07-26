import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/actions/appAction";
import { AppStore } from "../redux/store";
function Navbar() {
  const { isDarkMode } = useSelector((store: AppStore) => store.app);
  const dispatch = useDispatch();
  const setIsDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <nav className="dark:text-white mb-4">
      <div className="bg-gradient-to-r from-blue-100 dark:from-black via-green-200 dark:via-transparent to-indigo-400 dark:to-gray-700 w-auto h-10 ">
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={60}
          className="ml-20"
        />
      </div>
    </nav>
  );
}
export default Navbar;
