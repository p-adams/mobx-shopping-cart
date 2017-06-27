import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import SellerNav from './SellerNav'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddToCart from 'material-ui/svg-icons/action/add-shopping-cart';
import TextField from 'material-ui/TextField'


const ProductDisplay = inject("inventory", "cart")(observer (class ProductDisplay extends Component {
    constructor() {
        super()
        this.getQuantity = this.getQuantity.bind(this)
    }
    getQuantity(e) {
        this.props.inventory.getPurchaseQuantity(e.target.value)
    }
    render() {
        let quantity = this.props.inventory.purchaseQuantity
        let cartStyle = {
            padding: '20px',
            background: '#303030',
            boxShadow: '5px 5px 10px #424242',
            marginTop: '55px'
        }
        let pStyle = {
            fontSize: '12px',
            color: '#EEEEEE'
        }
        return (
            <div className="container" style={{color: '#EEEEEE'}}>
                <div className="jumbotron" style={{background: '#E0F7FA'}}>
                <SellerNav/>
                <Card style={{background: 'white'}}>
                    {this.props.inventory.getInventory.map((item, index) => {
                        return <CardText
                                    key={index}
                                    style={cartStyle}
                               >
                               <div style={{padding: '25px'}}>
                                <p style={pStyle}>Item: {item.item}</p>
                                <p style={pStyle}>Quantity: {item.quantity} left!</p>
                                <TextField
                                    id="quantity"
                                    type="number"
                                    value={quantity}
                                    onChange={this.getQuantity}
                                    style={{width: '50px', marginBottom: '15px'}}
                                />
                                <p style={pStyle}>Price: ${item.price}</p>
                                <p style={pStyle}>Sold by: <a href="#">{item.seller}</a></p>
                                    <FloatingActionButton disabled={true}>
                                        <AddToCart onClick={() => this.props.cart.addItemToCart(item)}/>
                                    </FloatingActionButton>
                                </div>
                               </CardText>
                    })}
                </Card>
                </div>
            </div>
        )
    }
}))

export default ProductDisplay