import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const CartDisplay = inject("cart")(observer (({cart}) => {
    
        return (
            <Drawer
                open={cart.isCartOpen}
                openSecondary={true}>
                <MenuItem>
                    {cart.getItemsInCart.map((item, index) => {
                        return <div key={index}>{item.item}</div>
                    })}
                 </MenuItem>
            </Drawer>
        )
    
}))

export default CartDisplay