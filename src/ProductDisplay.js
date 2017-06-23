import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

const ProductDisplay = inject("inventory")(observer (class ProductDisplay extends Component {
    render() {
        return (
            <div>
                {this.props.inventory.getInventory.map((item, index) => {
                    return <div key={index}>{item.item} - {item.price}</div>
                })}
            </div>
        )
    }
}))

export default ProductDisplay