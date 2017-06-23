import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

const AppBarComponent = inject("cart")(observer(({cart}) => {
    const style = {
        color: 'white'
    }
    return (
        <AppBar title={<span style={style}>MobX Shopping Cart</span>}
        iconElementRight={<RaisedButton
                                onClick={() => cart.showCart()}
                                style={{color: 'white', marginRight: '250px'}}
                                label={!cart.isCartOpen ? "View Cart" : "Close Cart"} />}
        />
    )
}))

export default AppBarComponent