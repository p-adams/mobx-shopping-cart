import React from 'react'
import {inject, observer} from 'mobx-react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {Card, CardHeader, CardText} from 'material-ui/Card'

const CartDisplay = inject("cart")(observer (({cart}) => {
        const itemStyle = {
            background: "white",
            border: "1px solid red",
            margin: '10px'
        }
        return (
            <Drawer
                open={cart.isCartOpen}
                openSecondary={true}>
                <MenuItem>
                    {cart.getItemsInCart.map((item, index) => {
                        return (
                            <Card style={itemStyle} key={index}>
                                <CardText style={{color: "black"}}>
                                        <p>item: {item.item}</p>
                                        <p>quantity: {item.quantity}</p>
                                        <p>price: {item.price}</p>
                                        <button>remove</button>
                                </CardText>
                            </Card>
                        )
                    })}
                 </MenuItem>
            </Drawer>
        )
    
}))

export default CartDisplay