import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/carts/action";
import { addQuantity, removeQuantity } from "../redux/products/action";
import {
  ShoppingCart,
  User,
  Home,
  Package,
  AlertCircle,
  Plus,
  Minus,
  X,
} from "lucide-react";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  // Find the available quantity of this product
  const availableProduct = products.find((p) => p.id === item.productId);
  const availableQuantity = availableProduct ? availableProduct.quantity : 0;
  const handleDecreaseQuantity = () => {
    console.log("DECREASE clicked");
    console.log("Dispatching decreaseQuantity with ID:", item.productId);
    if (item.quantity === 1) {
      dispatch(removeFromCart(item.id));
    }
    if (item.quantity <= 0) {
      return;
    }
    dispatch(decreaseQuantity(item.productId));
    dispatch(addQuantity(item.productId, 1));
  };
  const handleIncreaseQuantity = () => {
    console.log("INCREASE clicked");
    console.log("Dispatching increaseQuantity with ID:", item.productId);

    // Check if we can increase quantity (don't exceed available stock)
    if (availableQuantity > 0) {
      dispatch(increaseQuantity(item.productId));
      dispatch(removeQuantity(item.productId, 1));
    } else {
      console.log("Not enough stock available");
    }
  };
  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
    // Restore the product quantity back to inventory
    dispatch(addQuantity(item.productId, item.quantity));
  };

  return (
    <div
      key={item.id}
      className="bg-white rounded-xl p-4 flex items-center gap-6 shadow-sm"
    >
      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-100">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
        <p className="text-gray-500 text-sm font-light">Price: ${item.price}</p>
        <p className="text-gray-400 text-xs font-light">
          Category: ${item.category}
        </p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center bg-gray-100 rounded-md border border-gray-200">
          <button
            onClick={handleDecreaseQuantity}
            className="p-1 hover:bg-gray-200 text-gray-400 transition-colors"
          >
            <Minus size={14} />
          </button>
          <span className="w-8 text-center text-gray-700 text-sm font-medium">
            {item.quantity}
          </span>
          <button
            onClick={handleIncreaseQuantity}
            className="p-1 hover:bg-gray-200 text-gray-400 transition-colors"
          >
            <Plus size={14} />
          </button>
        </div>
        <div className="text-right">
          <div className="text-gray-400 text-sm font-light">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
          <button
            onClick={handleRemoveItem}
            className="text-gray-300 hover:text-red-500 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
