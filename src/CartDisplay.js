import React from 'react'
import {inject, observer} from 'mobx-react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/action/remove-shopping-cart';

const CartDisplay = inject("cart")(observer (({cart}) => {
        const itemStyle = {
            background: "white",
            border: '1px solid #9E9E9E',
            borderRadius: '5px',
            boxShadow: '1px 1px 7px #424242',
            margin: '10px'
        }
        return (
            <div>
                {cart.getNumItemsInCart === 0 ? "Empty" : 
                <Drawer
                    open={cart.isCartOpen}
                    openSecondary={true}>
                    <div style={{
                            color: 'white',
                            marginTop: '50px',
                            marginLeft: '25px'
                            }}>
                            <h4>Total: ${cart.calcTotal}</h4>
                    </div>
                    <MenuItem>
                        {cart.getItemsInCart.map((item, index) => {
                            return (
                                <Card style={itemStyle} key={index}>
                                    <CardText style={{color: "black"}}>
                                            <p style={{marginTop: '-20px'}}>Item: {item.item}</p>
                                            <p style={{marginTop: '-40px'}}>Quantity:
                                                <span>
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        value={item.quantity}
                                                        onChange={ e => cart.updateQuantity(item.id, e.target.value)}
                                                        style={{marginLeft: '10px', width: '30px', height: '20px', borderRadius: '5px'}}
                                                        />
                                                </span>
                                            </p>
                                            <p style={{marginTop: '-40px'}}>Price: ${item.price}</p>
                                            <FloatingActionButton>
                                                <ContentRemove onClick={() => cart.removeItemFromCart(item.id)}/>
                                            </FloatingActionButton>
                                    </CardText>
                                </Card>
                            )
                        })}
                    </MenuItem>
                </Drawer>
                }
            </div>
        )
    
}))

export default CartDisplay