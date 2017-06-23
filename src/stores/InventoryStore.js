import {action, computed, extendObservable} from 'mobx'


class Item {
    constructor(id, item, quantity, price) {
        extendObservable(this, {
            id,
            item,
            quantity,
            price,
        })
    }

}

class InventoryStore {
    constructor() {
        extendObservable(this, {
            id: 2,
            inventory: [new Item(1, "Nike Air Max", 4, 109.99)],
            getInventory: computed(() => {
                return this.inventory
            }),
            addNewItem: action((item, quantity, price) => {
                this.inventory.push(new Item(this.id++, item, quantity, price))
            })
        })
    }
}

export default InventoryStore