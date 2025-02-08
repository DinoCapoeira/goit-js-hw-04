function isEnoughCapacity(products, containerSize) {
  let totalQuantity = Object.values(products).reduce(
    (sum, quantity) => sum + quantity
  );
  return totalQuantity <= containerSize;
}
