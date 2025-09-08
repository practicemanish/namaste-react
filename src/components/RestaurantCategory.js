import ItemList from "./ItemList";


const RestaurantCategory =({data})=>{
    // console.log(data);

    return(
        <div>
            {/* Header */}
           <div className="w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-50 "> 
           <div className="flex justify-between">
            <span className="font-bold text-lg" >{data.title}({data.categories?.length || 0})</span>

            <span>⬇️</span>
            </div>
            {/* Accordian Body */}
            <ItemList items={data?.categories} />
            </div>

        </div>
    );
};
export default RestaurantCategory;