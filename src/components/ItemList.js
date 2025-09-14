import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);
const  dispatch = useDispatch();


  const handleAddItem =(item) =>{
    //dispatch an action
    dispatch(addItem(item));

  };

  return (
    <div>
      {(items || []).map((item, index) => {
        const info = item?.card?.info;
        // console.log(info);

        // Case 1: Direct dish item
        if (info) {
          return (
            <div key={info.id || index} className="p-2 border-b">
              <div className="flex">
                {/* Image with Add button */}
                {info.imageId && (
                  <div className="relative w-24 h-24 mr-4">
                    <img
                      src={`https://media-assets.swiggy.com/${info.imageId}`}
                      alt={info.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      className="absolute top-1 right-1 bg-white text-sm px-2 py-1 rounded shadow-md hover:scale-105 transition"
                      onClick={() => handleAddItem(item)}
                    >
                      Add+
                    </button>
                  </div>
                )}

                {/* Text details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <span className="font-medium">{info.name}</span>
                    <span>Rs.{(info.price || info.defaultPrice) / 100}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {info.description}
                  </p>
                </div>
              </div>
            </div>
          );
        }

        // Case 2: Subcategory with itemCards
        if (item?.itemCards) {
          return (
            <div key={item.title || index} className="mt-4">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              {/* Recursively render its itemCards */}
              <ItemList items={item.itemCards} />
            </div>
          );
        }

        // Skip unknown structures
        console.warn("Skipping unrecognized item:", item);
        return null;
      })}
    </div>
  );
};

export default ItemList;
