import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
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
const MyCart = () => {
  const cartItems = useSelector((state) => state.carts);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 4.99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="max-w-[1200px] mx-auto py-12 px-6">
      <h1 className="text-2xl font-medium text-white mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items List */}
        <div className="flex-1 space-y-6">
          {cartItems.length === 0 ? (
            <div className="bg-[#242b35] p-12 rounded-xl text-center border border-slate-700">
              <Package size={48} className="mx-auto text-slate-600 mb-4" />
              <p className="text-slate-400 font-light text-lg">
                Your cart is empty
              </p>
            </div>
          ) : (
            cartItems.map((item) => <CartItem item={item} />)
          )}
        </div>

        {/* Order Summary */}
        <aside className="lg:w-[350px]">
          <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100">
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-500 font-light">
                <span>Subtotal</span>
                <span className="text-gray-900 font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-gray-500 font-light pb-4 border-b border-gray-100">
                <span>Shipping</span>
                <span className="text-gray-900 font-medium">
                  ${shipping.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-end pt-2">
                <span className="text-gray-400 font-light text-lg">Total</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-400">
                    ${total.toFixed(2)} USD
                  </div>
                  <div className="text-[10px] text-gray-400 font-light uppercase">
                    including VAT
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#4285f4] hover:bg-[#3b77db] text-white py-3 rounded-lg font-medium transition-colors shadow-md active:scale-[0.98]">
              Check out
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MyCart;
