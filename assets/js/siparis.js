const products = document.querySelectorAll('.products li');
const orderList = document.querySelector('.orders');

const orders = [
    {
        name: 'Elma',
        quantity: 3,
    },
    {
        name: 'Armut',
        quantity: 1,
    },
    {
        name: 'Kavun',
        quantity: 5,
    }, 
]

function renderOrders() {
    orderList.innerHTML = '';

    for(const order of orders) {
        orderList.innerHTML += `<li>${order.name} x${order.quantity}</li>`
    }
}

function addOrder() {
    const orderName = this.innerText;
    const order = orders.find(x => x.name === this.innerText)
    
    if(order) {
        order.quantity++;
    } else{
        orders.push(
            {
                name: orderName,
                quantity: 1
            }
        )
    }
    renderOrders();
}

for(const product of products) {
    product.addEventListener('click',addOrder);
}
renderOrders();