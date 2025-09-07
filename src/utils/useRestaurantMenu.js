import { useEffect, useState } from "react"
import {MENU_API} from "./constant"


const useRestaurantMenu = (resId) =>{
    const[resInfo, setresInfo] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>{
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setresInfo(json.data);
};
    if (resId) {
      fetchData();
    }
  }, [resId]);

return resInfo;

};
export default useRestaurantMenu;