const orders = [
    {
        date: '2005-05-05',
        subTotal: 90.24,
        items:[
            {
                product:{
                    id:'redshoe',
                    description: 'Old Read Shoe',
                    price: 45.12
                
                },
                quantity: 2

            }
        ]
    }
];

function getAllOrders(){
    return orders;
}


module.exports = {
    getAllOrders,
};