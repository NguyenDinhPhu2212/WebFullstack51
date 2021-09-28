const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    return (
        <div>
            <div className="flex flex-wrap justify-center">
                {cart.map((item) => {
                    return <CardItem key={item.id} item={item} />;
                })}
            </div>
            <div className="mt-10">
                <span className="text-gray-900 font-bold text-xl">Total</span>:{" "}
                $
                {cart.reduce((sum, item) => {
                    return sum + item.price * item.count;
                }, 0)}
            </div>
        </div>
    );
};
const CardItem = ({ item }) => {
    return (
        <div className=" w-1/3 flex mb-4 ml-10 mr-10 border border-gray-300 rounded-sm">
            <img
                className="w-48 h-48 object-cover"
                src={item.url}
                alt="Card image"
            />
            <div className="w-48 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                        {item.name}
                    </div>
                    <p className="text-gray-700 text-base">
                        Price: ${item.price}/1kg
                    </p>
                    <p className="text-gray-700 text-base">Count: {item.count}</p>
                </div>
            </div>
        </div>
    );
};
export default Cart;
