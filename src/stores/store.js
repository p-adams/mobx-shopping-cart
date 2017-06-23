import {extendObservable} from 'mobx'
import CartStore from './CartStore'
import InventoryStore from './InventoryStore'

class AppState {
    constructor() {
        extendObservable(this, {
           cartStore: new CartStore(),
           inventoryStore: new InventoryStore()
        })
    }
}

export default AppState