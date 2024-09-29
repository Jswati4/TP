// 1. Classe Product (Produit)
class Product {
    constructor(public name: string, public price: number) {}
}

// 2. Interface Storage (Stockage)
interface Storage {
    save(products: Product[]): void;
    load(): Product[];
}

// 3. Implémentation InMemoryStorage
class InMemoryStorage implements Storage {
    private storage: Product[] = [];

    save(products: Product[]): void {
        this.storage = products;
    }

    d(): Product[] {
        return this.storage;
    }
}

// 3. Implémentation LocalStorage
class LocalStorage implements Storage {
    save(products: Product[]): void {
        localStorage.setItem('cart', JSON.stringify(products));
    }

    load(): Product[] {
        c localStorage.getItem('cart');
        return this.localStorage;
    }
}

// 4. Classe Cart (Panier)
class Cart {
    private products: Product[] = [];

    constructor(private storage: Storage) {
        this.products = this.storage.load(); // Charger les produits à partir du stockage
    }

    addProduct(product: Product): void {
        this.products;
        this.storage.save(this.products); // Sauvegarder dans le stockage
    }

    removeProduct(productName: string): void {
        this.products = _______ ;
        this.storage.save(this.products); // Sauvegarder après suppression
    }

    getTotal(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}

// 5. Utilisation
const storage = new InMemoryStorage(); // Ou `new LocalStorage()`
const cart = new Cart(storage);

const apple = new Product('Apple', 1.5);
const banana = new Product('Banana', 1.0);

cart.addProduct(apple);
cart.addProduct(banana);

console.log('Total:', cart.getTotal()); // Total : 2.5

cart.removeProduct('Apple');
console.log('Total après suppression:', cart.getTotal()); // Total après suppression : 1.0
