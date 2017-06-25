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
                                <CardHeader titleColor="black" title={item.item}/>
                            </Card>
                        )
                    })}
                 </MenuItem>
            </Drawer>
        )
    
}))

export default CartDisplay