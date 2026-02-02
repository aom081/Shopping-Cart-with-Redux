import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/product/productSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    nameProduct: "",
    Category: "",
    imageURL: "",
    Price: "",
    Quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // normalize numeric fields
    const payload = {
      nameProduct: form.nameProduct,
      Category: form.Category,
      imageURL: form.imageURL,
      Price: Number(form.Price) || 0,
      Quantity: Number(form.Quantity) || 0,
      id: Date.now(),
    };

    dispatch(addProduct(payload));
    setForm({
      nameProduct: "",
      Category: "",
      imageURL: "",
      Price: "",
      Quantity: "",
    });
  };

  return (
    <form className="bg-base-200 p-4 rounded" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-3">Add Product</h2>

      <label className="block mb-2">
        <span className="text-sm">Name</span>
        <input
          name="nameProduct"
          value={form.nameProduct}
          onChange={handleChange}
          className="input input-bordered w-full mt-1"
          required
        />
      </label>

      <label className="block mb-2">
        <span className="text-sm">Category</span>
        <input
          name="Category"
          value={form.Category}
          onChange={handleChange}
          className="input input-bordered w-full mt-1"
        />
      </label>

      <label className="block mb-2">
        <span className="text-sm">Image URL</span>
        <input
          name="imageURL"
          value={form.imageURL}
          onChange={handleChange}
          className="input input-bordered w-full mt-1"
        />
      </label>

      <label className="block mb-2">
        <span className="text-sm">Price</span>
        <input
          name="Price"
          value={form.Price}
          onChange={handleChange}
          type="number"
          step="0.01"
          className="input input-bordered w-full mt-1"
        />
      </label>

      <label className="block mb-4">
        <span className="text-sm">Quantity</span>
        <input
          name="Quantity"
          value={form.Quantity}
          onChange={handleChange}
          type="number"
          className="input input-bordered w-full mt-1"
        />
      </label>

      <button className="btn btn-primary w-full" type="submit">
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
