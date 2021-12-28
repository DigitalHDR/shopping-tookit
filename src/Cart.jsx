import React from 'react'
import { useCart } from "react-use-cart"

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart()

  if (isEmpty) return <h1 className='text-center'>Your cart is empty</h1>;

  return (
    <section className='py-4 container'>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12">
          <h5>Cart ({totalUniqueItems}) total Item: ({totalItems})</h5>
          <table className='table table-borderless m-0'>
            <tbody>
              {items.map((item, index) => {
                return (
                    <tr key={index} className='d-flex justify-content-between align-items-center'>
                      <td>
                        <img src={item.img} style={{ height: '6rem' }} alt="" />
                      </td>
                      <td >{item.title}</td>
                      <td>{item.price}</td>
                      <td>Quantity ({item.quantity})</td>
                      <td>
                        <button
                          className='btn btn-info ms-2'
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                        <button
                          className='btn btn-info ms-2'
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                        <button
                          className='btn btn-danger ms-2'
                          onClick={() =>
                            removeItem(item.id, item.quantity)}>Remove item</button>
                      </td>
                    </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total Price: $ {cartTotal}</h2>
        </div>
        <div className="col-auto">
          <button className='btn btn-danger m-2'
            onClick={() => emptyCart()}>Clear Cart</button>
          <button className='btn btn-primary m-2'>Buy Now</button>
        </div>
      </div>
    </section>
  )
}

export default Cart

