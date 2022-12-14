import Product from "../Product/Product";
import './Product.css'

let Products = [
    {
        url: 'https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg',
        marke: 'CocoOil',
        preis: '30$'
    },
    {
        url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        marke: 'Polaroid',
        preis: '60$'
    },
    {
        url: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        marke: 'Maui Moisture',
        preis: '20$'
    }
]

const ProductList = () => {
    return (
        <section className="container1">

            <h1>Super Shop</h1>

            <div className="divProduct">
                {Products.map((el, i) => {
                    return (
                        <Product key={i}
                            url={el.url}
                            marke={el.marke}
                            preis={el.preis}
                        />
                    )
                })}
            </div>

        </section>
    )
}

export default ProductList;