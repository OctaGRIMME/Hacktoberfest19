const mongoose = require('mongoose');
const Customer = require('./models/customer') //Import model

//to get rid of mongo warning
mongoose.Promise = global.Promise;

//connect to db
const db = mongoose.connect('mongodb://localhost:27017/testcli', { useNewUrlParser: true }, { useUnifiedTopology: true }); 

//add customer
const addcustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('New Customer Added');
        db.close(); //if we don't close the db it will hang
    })
}

//update customer
const updatecustomer = (_id, customer) => {
    Customer.update({ _id }, customer)
    .then(customer => {
        console.info('Cutomer Updated');
        db.close();
    });
}

//remove customer
const removecustomer = (_id) => {
    Customer.remove({ _id })
    .then(customer => {
        console.info('Cutomer Removed');
        db.close();
    });
}

//to print all customers
const listcustomers = () => {
    Customer.find()
    .then(customers => {
        console.info(customers);
        console.info(`${customers.length} customers`);
        db.close();
    })
}


//find customer
const findcustomer = (name) => {
    //make case insensitive
    const search = new RegExp(name, 'i');
    Customer.find({$or: [{firstname: search}, {lastname: search}]})
    .then(customer => {
        console.info(customer);
        console.info(`${customer.length} matches`);;
        db.close();
    });
}


//export the methods
module.exports = {
    addcustomer,
    findcustomer,
    updatecustomer,
    removecustomer,
    listcustomers
}


