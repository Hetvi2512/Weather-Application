import {  useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
const HourlyWeather = () => {
  const { selectedCity, error } = useSelector(
    (store: AppStore) => store.weather
  );
  const { isDarkMode } = useSelector((store: AppStore) => store.app);
  if (selectedCity)
  
    return (
      <div className="m-4">
       <div className="">
       <section className="md:h-full flex items-center text-gray-600">
        <div className="container px-2 py-4 mx-auto">
          <div className="flex flex-row -m-4 overflow-scroll overflow-y-hidden ">
           
           {selectedCity.hourly.map((item,index)=>{
               return(
                
                <div className=" h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow:hidden mx-3">
                  <img src={getIconUrl(item.weather[0].icon)}/>
                  <div className="p-6 hover:bg-indigo-700 hover:text-white transistion duration-300 ease-in">
                  <h1 className={isDarkMode ?" text-lg font-medium text-white mb-1":" text-lg font-medium text-black-500 mb-1"}>
                  { (new Date(item.dt* 1000)).toLocaleTimeString('en-US',{ hour12: true })}
                    </h1>

                    <h1 className="text-lg font-medium text-indigo-500 mb-1">
                    {Math.round(item.temp - 273.15)}&deg; C
                 
                    </h1>
                  </div>
            
              </div>
               )
           })}
   </div>
        </div>
      </section>
       </div>
      </div>
    );
  return (
    <>
      <div></div>
    </>
  );
  function getIconUrl(iconcode:string){
   
    let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    return iconurl
  }
};



export default HourlyWeather