const ItemList = ({ items }) => {
 

  return (
    <div>
      {(items || []).map((item, index) => {
        const info = item?.card?.info;

        // Case 1: Direct dish item
        if (info) {
          return (
            <div key={info.id || index} className="p-2 border-b">
              <div className="flex justify-between">
                <span className="font-medium">{info.name}</span>
                <span>
                  Rs.{(info.price || info.defaultPrice) / 100}
                </span>
              </div>
              <p className="text-sm text-gray-600">{info.description}</p>
            </div>
          );
        }

        // Case 2: Subcategory with itemCards
        if (item?.itemCards) {
          return (
            <div key={item.title || index} className="mt-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
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
