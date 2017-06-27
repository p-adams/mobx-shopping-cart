import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

const SellerForm = inject("inventory")(observer (class SellerForm extends Component {
    render() {
        let inv = this.props.inventory
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={() => inv.toggleSeller()}
            />,
            <FlatButton
                label="Sell"
                primary={true}
                onClick={() => inv.addItem()}
            />
        ]
        return (
            <Dialog
            autoDetectWindowHeight={true}
                actions={actions}
                modal={true}
                open={inv.isSeller}>
                <div>
                    <TextField
                        id="name"
                        hintText="item name..."
                        value={inv.item}
                        onChange={e => inv.getItem(e.target.value)}
                    /><br/>
                    <TextField
                        id="quantity"
                        value={inv.quantity}
                        onChange={e => inv.getQuantity(e.target.value)}
                        type="number"
                        min="0"
                    /><br/>
                    <TextField
                        id="price"
                        hintText="item price..."
                        value={inv.price}
                        onChange={e => inv.getPrice(e.target.value)}
                    />
                    <TextField
                        id="seller"
                        hintText="seller name..."
                        value={inv.seller}
                        onChange={e => inv.getSeller(e.target.value)}
                    />
                </div>
            </Dialog>
        )
    }
}))

export default SellerForm

