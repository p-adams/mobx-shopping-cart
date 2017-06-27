import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import SellerNav from './SellerNav'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddToCart from 'material-ui/svg-icons/action/add-shopping-cart';


const ProductDisplay = inject("inventory")(observer (class ProductDisplay extends Component {
    render() {
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
                                <p style={pStyle}>{item.quantity} left!</p>
                                <p style={pStyle}>${item.price}</p>
                                <p style={pStyle}>Sold by: <a href="#">{item.seller}</a></p>
                                    <FloatingActionButton>
                                        <AddToCart/>
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