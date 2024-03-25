function updateShopInventory(currentStock, delivery) {
    const inventory = {};
    for (let i = 0; i < currentStock.length; i += 2) {
        const product = currentStock[i];
        const quantity = parseInt(currentStock[i + 1]);
        inventory[product] = (inventory[product] || 0) + quantity;
    }
    for (let i = 0; i < delivery.length; i += 2) {
        const product = delivery[i];
        const quantity = parseInt(delivery[i + 1]);
        inventory[product] = (inventory[product] || 0) + quantity;
    }
    for (const product in inventory) {
        console.log(`${product} -> ${inventory[product]}`);
    }
}
const currentStock = [
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
];
const delivery = [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
];
updateShopInventory(currentStock, delivery);
