function likeProduct(productId, userId) {
    const product = products.find(product => product._id === productId);

    if (product) {
        const index = product.likes.indexOf(userId);
        if (index === -1) {
            // User has not liked the product, so add like
            product.likes.push(userId);
            console.log('Product liked successfully');
        } else {
            // User has already liked the product, so remove like
            product.likes.splice(index, 1);
            console.log('Product like removed successfully');
        }
    } else {
        console.log('Product not found');
    }
}
