// 배열의 일반적인 상태 업데이트 패턴
const shoppingCart = [
    { id: 1, product: "HDMI Cable", price: 4 },
    { id: 2, product: "Easy Bake Ovan", price: 28 },
    { id: 3, product: "Peach Pie", price: 4.5 }
];

// 배열에 추가
[...shoppingCart, { id: 4, product: "Coffee Mug", price: 7.99 }];

// 배열에서 삭제
shoppingCart.filter((item) => item.id !== 2);

// 배열에 모든 요소 업데이트
shoppingCart.map((item) => {
    return {
        ...item,
        product: item.product.toLowerCase(),
    }
})

// 배열 안에 특정 요소하나만 업데이트
shoppingCart.map((item) => {
    if (item.id === 3) {
        return { ...item, price: 10.99 }
    }
    else {
        return item
    }
})