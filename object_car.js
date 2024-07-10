var car=
{
    title: "Car",
    name: "BMW",
    model: 1,
    yearPublished: 2002,
    printCardata: function()
    {
        console.log("The name of the  " + this.title + " is " + this.name + " it's model is " + this.model + ", published in " + this.yearPublished);
    }
};
console.log(car.printCardata());