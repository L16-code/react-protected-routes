import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../types/RootInterface"
import { clearCart, placeOrder, removeFromCart } from "../../actions/rootReducer"
import { useNavigate } from "react-router-dom"
import data from "../../resources/productsData"
import { Bounce, toast } from "react-toastify"
import { ProductWithQuantity } from "../../types/productType"

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cartItems = useSelector((state: RootState) => state.root.item)
    let new_arr: ProductWithQuantity[] = []
    let TotalValue = 0;
    Object.entries(cartItems.items).forEach(([id, quantity]) => {
        const item = data.find(item => item.id === Number(id));
        // TotalValue +=item?.price;
        if (item) {
            TotalValue += item.price * quantity;
            new_arr.push({
                ...item,
                quantity: quantity
            });
        }
    });
    console.log(new_arr)
    const ItemRemoveHandler = (id: string) => {
        dispatch(removeFromCart(id))
    }
    const BuyHandler = () => {
        const check = confirm("Are you sure you want to Buy this item?")
        if (check) {
            toast.success('Hurray !!The Item is Placed ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            dispatch(placeOrder(new_arr))
            navigate("/myorders")
            dispatch(clearCart())
        }else{
            toast.error('Sorry!!The Item is not Placed ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }
    return (
        <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ margin: "2rem", fontWeight: "bold" }}>MyCart</h1>
            <div style={{ width: '80%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: "aliceblue", display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "2rem" }}>
                <div className="cart-page">
                    {/* <h1>Your Cart</h1> */}
                    {Object.keys(cartItems.items).length === 0 ? (
                        <div>
                            <p>Your cart is empty</p>
                            <button onClick={() => navigate('/')} style={{ backgroundColor: "green", padding: "4px" }}>Continue Shopping</button>
                        </div>
                    ) : (
                        <>
                            <div className="cart-items">
                                {
                                    new_arr.map((item) => {
                                        return (
                                            <div key={item.id} className="cart-item">
                                                <img src={item.image} alt={item.name} />
                                                <div className="cart-item-details">
                                                    <h2>{item.name}</h2>
                                                    <p>${item.price}</p>
                                                    <p>Quantity:{item.quantity}</p>
                                                    <button onClick={() => ItemRemoveHandler(item.id.toString())}>Remove</button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="cart-summary">
                                <h2>Total: ${TotalValue}</h2>
                                <button onClick={() =>  BuyHandler()  } style={{ backgroundColor: "green", margin: "2rem" }}>Buy</button>
                                <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart