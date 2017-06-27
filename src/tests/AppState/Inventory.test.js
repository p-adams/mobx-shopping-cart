import Store from '../../stores/store'

const store = new Store()
const inventoryStore = store.inventoryStore

it('add item to inventory should increase inventory by 1', () => {
    inventoryStore.addNewItem("WKND Molinar", 2, 50.00)
    expect(inventoryStore.inventory.length).toEqual(2)
})

it('third item in inventory should have id of 3', () => {
    inventoryStore.addNewItem("X BOX ONE", 5, 250.00)
    expect(inventoryStore.inventory[2].id).toEqual(3)
})

