import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddToCart from 'material-ui/svg-icons/action/add-shopping-cart';

const ProductDisplay = inject("inventory")(observer (class ProductDisplay extends Component {
    render() {
        let cartStyle = {
            border: '1px solid white',
            padding: '20px',
            background: '#757575',
            marginTop: '55px'
        }
        return (
            <div className="container" style={{color: '#EEEEEE'}}>
                <div className="jumbotron" style={{background: '#E0F7FA'}}>
                <Card>
                    {this.props.inventory.getInventory.map((item, index) => {
                        return <CardText
                                    key={index}
                                    style={cartStyle}
                               >
                               <p>Item: {item.item}</p>
                               <p>{item.quantity} left!</p>
                               <p>{item.price}</p>
                                <FloatingActionButton>
                                    <AddToCart/>
                                </FloatingActionButton>
                               </CardText>
                    })}
                </Card>
                </div>
            </div>
        )
    }
}))

export default ProductDisplay