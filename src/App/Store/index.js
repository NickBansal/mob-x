import { decorate, observable, action, computed } from "mobx"

class Store {
    employeesList = [
        { name: "John Doe", salary: 150 },
        { name: "Richard Roe", salary: 225 },
        { name: "Joe Bloggs", salary: 350 },
        { name: "Tom Tom", salary: 25 },
    ];

    clearList = () => {
        this.employeesList.pop()
    };

    get totalPay() {
        return this.employeesList.reduce((acc, value) => acc += value.salary, 0)
    }
}

decorate(Store, {
    employeesList: observable,
    clearList: action,
    totalPay: computed
})

export default Store