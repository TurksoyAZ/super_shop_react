
import './Product.css'

const Product = (props) => {
    return (
        <div>
            <img src={props.url} alt="" />
            <p>{props.marke}</p>
            <p>{props.preis}</p>
            <button>Buy Now</button>
        </div>
    )
}

export default Product;