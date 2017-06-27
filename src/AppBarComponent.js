import React from 'react'
import {inject, observer} from 'mobx-react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart'
import Badge from 'material-ui/Badge'
import IconButton from 'material-ui/IconButton'

const AppBarComponent = inject("cart")(observer(({cart}) => {
    const style = {
        fontSize: '40px',
        color: 'white'
    }
    return (
        <AppBar title={<span style={style}>souk</span>}
        iconElementRight={  <div style={{marginRight: '250px'}}>
                            <Badge
                                badgeContent={cart.getNumItemsInCart}
                                badgeStyle={{background: '#EC407A', color: 'white'}}
                                primary={true}
                            >
                                <ShoppingCart/>
                            </Badge>
                            <RaisedButton
                                onClick={() => cart.showCart()}
                                style={{color: 'white', marginLeft: '50px'}}
                                label={!cart.isCartOpen ? "View Cart" : "Close Cart"} />
                            </div>
                         }
        />
    )
}))

export default AppBarComponent