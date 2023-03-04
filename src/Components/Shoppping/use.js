// useEffect(() => {
//     console.log('local storage first line', products)
//     const storeCart = getStoreCart();
//     const saveCart = [];
//     for(const id in storeCart){
//         const addedProduct = products.find(product=> product.id === id);
//         if(addedProduct){
//             const quantity = storeCart[id];
//             addedProduct.quantity = quantity;
//             saveCart.push(addedProduct);
//             // console.log(addedProduct);
//         }
//     }
//     setCart(saveCart);
// },[products]);