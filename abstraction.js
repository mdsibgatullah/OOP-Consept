// This is Abstraction


class BatterArry {
    constructor(){
        this.items = [];
    }


    getItem(){
        return [...this.items];
    }


    addItem(item){
        this.items.push(item);
    }


    removeItem(deleteItem){
        this.items = this.items.filter((item)=> item !== deleteItem)
    }


    modifyItem(itemToChange, newValue){
        const index = this.items.indexOf(itemToChange);
        if(index !== -1){
            this.items[index] = newValue;
        }
    }
}


let ami = new BatterArry();
ami.addItem("ami")
ami.addItem("tumi");
ami.removeItem("tumi");
ami.modifyItem("ami", "tumi")


console.log(ami.getItem())
