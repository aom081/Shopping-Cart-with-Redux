import React from "react";
import Card from "../component/card";
import AddProduct from "../component/addProduct";

const Home = () => {
  const cards = new Array(6).fill(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((_, i) => (
              <div key={i} className="flex justify-center">
                <Card />
              </div>
            ))}
          </div>
        </div>

        <aside className="md:col-span-1">
          <div className="sticky top-6">
            <AddProduct />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;
