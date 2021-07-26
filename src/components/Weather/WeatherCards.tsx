import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { deleteCityAction } from "../../redux/actions/weatherAction";



function WeatherCard(props: any) {
  const { index, cityname } = props;
  const { isDarkMode } = useSelector((store: AppStore) => store.app);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCityAction(cityname));
  };
  return (
    <>
      {cityname ? (
        <div className="p-4 lg:w-full">
          <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={handleDelete}
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div className="p-6 hover:bg-indigo-700 hover:text-white transistion duration-300 ease-in">
              <h1
                className={
                  isDarkMode
                    ? "text-2xl text-white font-semibold mb-3 text-center"
                    : "text-2xl font-semibold mb-3 text-center"
                }
              >
                {cityname}
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default WeatherCard;
