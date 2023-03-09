function pic()
{
    const pico = {
        durabilidad: 250,
        alto: "60cm",
        ancho: "30cm",
    }
    function props()
    {
        var x;
        x = console.log(`Las propiedades del pico son: Durabilidad - ${pico.durabilidad}, Alto - ${pico.alto}, Ancho - ${pico.ancho}`)
    }
    return props();
}
pic();

function obmau()
{
    function mtcl(km,model,color) // Si quieres cambiar el nombre que aparecera lo puedes hacer en this.model en este caso podemos poner this.modelo y aparecera modelo en vez de model
    {
        this.km = km;
        this.model = model;
        this.color = color;

    }
    const nwmt = new mtcl(48000,"AKT","Negro",);
    console.log(nwmt);
}
obmau();