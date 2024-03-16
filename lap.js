var laptop = {
    make: "dell",
    model: "latitude 15",
    year: 2024,
    describe: function () {
        console.log("this  laptop is  a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
laptop.describe();
