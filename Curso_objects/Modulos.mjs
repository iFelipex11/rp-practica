function videoPlay(id)
{
    const Urlsecreta = "https://platziultrasecreto.com/" + id;
    console.log("Se esta reproduciendo desde la url" + Urlsecreta);
}

function videoStop(id)
{
    const Urlsecreta = "https://platziultrasecreto.com/" + id;
    console.log("Pausamos la url " + Urlsecreta);
}

export class PlatziClass
{
    constructor({
        name,
        videoID})
    {
        this.name = name;
        this.videoID = videoID;
    }


    reproducir()
    {   
        videoPlay(this.videoID);
    }   
    pausar()
    {
        videoStop(this.videoID);
    }
}