import ItemCounter from "./shopping-cart/ItemCounter";

interface ItemInCart{
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    {
        productName: 'Nintendo Switch 2',
        quantity: 10,
    },
    {
        productName: 'PlayStation 5',
        quantity: 5,
    },
    {
        productName: 'Xbox Series X',
        quantity: 8,
    },
    {
        productName: 'Xbox Series One',
        quantity: 2,
    }
]

export function FirstStepsApp() {
    return(
        <>
            <h1>Carritos de compras</h1>

            {
                itemsInCart.map(({productName, quantity}) => (
                    <ItemCounter 
                        key={productName}
                        name={productName}
                        quantity={quantity}
                    />
                ))
            }

            {/* <ItemCounter 
                name="Nintendo Switch 2"
                quantity={10}
            />
            <ItemCounter 
                name="PlayStation 5" 
                quantity={5}
            />
            <ItemCounter 
                name="Xbox Series X" 
                quantity={8}
            /> */}
        </>    
    )
}   