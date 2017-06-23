import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

const CartDisplay = inject("cart")(observer (class CartDisplay extends Component {
    render() {
        return (
            <div>
                {this.props.cart.getItemsInCart.map((item, index) => {
                    return <div key={index}>{item.item}</div>
                })}
            </div>
        )
    }
}))

export default CartDisplay