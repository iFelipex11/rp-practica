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