class Car 
{
constructor
({
model,
year,
color,
Motor,
weight,
})
{
    this._model = model;
    this.year = year;
    this.color = color;
    this.Motor = Motor;
    this.weight = weight;
}

get model()
{
    return this._model;
}
set model(nwmdl)
{
    if(nwmdl == "tesla")
    {
        console.error("No es posible cambiar el nombre");
    }
    else
    {
        return this._model
    }
}
}

const tesla = new Car({
    model: "X",
    year: "2021",
    color: "Black",
    Motor: "Electric",
    weight: "2301 KG",
}
)
