import { useSelector } from "react-redux"

export default function Cart() {


    const {cartItems} = useSelector(state => state.products)

    return (
        <>
            <h1>Product list:</h1>
            <div>
                {cartItems.length>0 &&
                    <ol>
                        {cartItems.map(t =>
                            <li
                                key={t.product.id}
                            >{t.product.name}</li>
                        )}
                    </ol>
                }
            </div>
        </>
    )
}