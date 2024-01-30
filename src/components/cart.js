export default function Cart({ item,increaseCount,decreaseCount }) {
    console.log(item.variety._id)
    return (
        <div className="col-span-1 bg-white rounded-lg hover:shadow-md p-4">
            <img src={item.variety.imageUrl} alt={item.Title} className="w-full rounded-lg" />
            <div className="flex flex-col justify-between space-y-2">
                <div className="my-5 h-10">
                    <h2 className="font-semibold text-gray-900">{item.Title}</h2>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center">
                        <div style={{ backgroundColor: item.hexColor }} className={`w-6 h-6 rounded-full ml-2`} />
                        <span>{item.color}</span>
                    </div>
                    {
                        item.sizes.length === 0 ? null :
                            <div className="flex flex-row items-center">
                                <span>{"اندازه: " + item.variety.size}</span>
                            </div>
                    }
                </div>
                <div className="flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                        <button onClick={increaseCount} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </button>
                        <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={item.variety.count} min="0" />
                        <button onClick={decreaseCount} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </button>
                    </div>
                    <div className="flex items-center">
                        <p className="text-sm">{item.variety.price.toLocaleString() + "  تومان"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}