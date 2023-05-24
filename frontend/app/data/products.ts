
import hat from "../../public/images/products/hat.svg"
import sneaker from "../../public/images/products/sneaker.svg"
import leather_shoe_picture from "../../public/images/products/leather_shoes.svg"

export async function getStoredProducts() {
    return [
        {
            id: "1",
            name: "Leather Shoe",
            price: 60,
            discount: null,
            category: 'men',
            picture: leather_shoe_picture
        },
        {
            id: "2",
            name: "Sneaker",
            price: 60,
            discount: 20,
            category: 'unisex',
            picture: sneaker
        },
        {
            id: "3",
            name: "Hat",
            price: 10,
            discount: null,
            category: null,
            picture: hat
        },
        {
            id: "4",
            name: "Leather Shoe",
            price: 60,
            discount: null,
            category: 'men',
            picture: leather_shoe_picture
        },
        {
            id: "5",
            name: "Sneaker",
            price: 60,
            discount: 20,
            category: 'unisex',
            picture: sneaker
        },
        {
            id: "6",
            name: "Hat",
            price: 10,
            discount: null,
            category: null,
            picture: hat
        },
    ]
}