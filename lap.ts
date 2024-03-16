let laptop ={
    make: "dell",
    model: "latitude 15",
    year: 2024,
    describe: function() {
        console.log(`this  laptop is  a ${this.year} ${this.make} ${this.model}.`);
    
    }
}
laptop.describe()