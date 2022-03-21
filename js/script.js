function Home()
{
    // alert("Home Button Pressed");
    document.getElementById("Home").style.backgroundColor = "Blue";
    document.getElementById("Home").style.color = "white";
    document.getElementById("Youtube").style.backgroundColor = "transparent";
    document.getElementById("Youtube").style.color = "black";
    document.getElementById("Instagram").style.backgroundColor = "transparent";
    document.getElementById("Instagram").style.color = "black";
    document.getElementById("Facebook").style.backgroundColor = "transparent";
    document.getElementById("Facebook").style.color = "black";
    document.getElementById("Snapchat").style.backgroundColor = "transparent";
    document.getElementById("Snapchat").style.color = "black";
    document.getElementById("WhatsApp").style.backgroundColor = "transparent";
    document.getElementById("WhatsApp").style.color = "black";
}
function Youtube()
{
    window.location.href = "../youtube.html";
}
function Instagram()
{
    window.location.href = "../html/instagram.html";
}
function Facebook()
{
    window.location.href = "../html/facebook.html";
}
function Snapchat()
{
    window.location.href = "../html/snapchat.html";
}
function WhatsApp()
{
    window.location.href = "../html/whatsapp.html";
}
function search()
{
    document.getElementById("filetype").src="./resources/Combo-Box-Icons/doc.png"
    window.open("https://www.amazon.in/");
}
function combo_box()
{
    var name = document.getElementById("option-list").value;
    var option_value = "All";
    
    if(name == "All")
    {
        option_value = "All";
        document.getElementById("filetype").src="./resources/Combo-Box-Icons/all.png"
    }
    else if (name == "Movies") 
    {
        option_value = "Movies";
        document.getElementById("filetype").src="./resources/Combo-Box-Icons/movie.png"
    }
    else if (name == "TV Shows") 
    {
        option_value = "TV Shows";
        document.getElementById("filetype").src="./resources/Combo-Box-Icons/tv_shows.png"
    }
    else if (name == "Web Series") 
    {
        option_value = "Web Series";
        document.getElementById("filetype").src="./resources/Combo-Box-Icons/webseries.png"
    }
    else if (name == "Anime") 
    {
        option_value = "Anime";
        document.getElementById("filetype").src="./resources/Combo-Box-Icons/webseries.png"
    }
    else if (name == "Audio") 
    {
        option_value = "Audio";
        document.getElementById("filetype").src="./resources/Combo-Box-Icons/audio.png"
    }
    else if (name == "Video") 
    {
        option_value = "Video";
        document.getElementById("filetype").src="./resources/Combo-Box-Icons/video.png"
    }
    else if (name == "Image") 
    {
        option_value = "Image";
        document.getElementById("filetype").src="./resources/Combo-Box-Icons/image.png"
    }
    else if (name == "PDF\/EBOOK") 
    {
        option_value = "PDF";
        document.getElementById("filetype").src="./resources/Combo-Box-Icons/pdf.png"
    }
    else if (name == "CSV\/XLSX") 
    {
        option_value = "XLSX";
        document.getElementById("filetype").src="./resources/Combo-Box-Icons/excel.png"
    }
    else if (name == "DOC\/TXT\/PPT") 
    {
        option_value = "TXT";
        document.getElementById("filetype").src="./resources/Combo-Box-Icons/doc.png"
    }
    else if (name == "Software\/Apps") 
    {
        option_value = "App";
        document.getElementById("filetype").src="./resources/Combo-Box-Icons/software.png"
    }
    else if (name == "Games") 
    {
        option_value = "Games";
        document.getElementById("filetype").src="./resources/Combo-Box-Icons/game.png"
    }
    else if (name == "Compressed") 
    {
        option_value = "zip";
        document.getElementById("filetype").src="./resources/Combo-Box-Icons/compressed.png"
    }
}
