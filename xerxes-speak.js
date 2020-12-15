<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xerxes speak</title>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
    body
    {
        font-family: 'Montserrat', sans-serif;
    }
    
#header
{
    
    padding: 1rem;
    text-align: center;
        background-color: background-color #861657;
        background-image:linear-gradient(326deg, #861657 0%, #ffa69e 74%);
        border-top-right-radius: 2rem;
        border-bottom-left-radius: 2rem;
}
#header h2
{
    font-size: 3rem;
}
#main
{
    justify-content: center;
}
  
    #txtarea
    {
       padding: 2rem;
       margin: 2rem;
       width: 90vw ;
       height: 25vh;
       border: 2px solid black;
       font-size: 2rem;
       
    }
div #btn-click
{
    margin: auto;
}

    h2 
    {
        padding-left: 1rem;
        font-size: 2rem;
    }
    div h3{
      text-align: center;
    }
    #btn-click
    {
        display: block;
        
        border: 2px solid black;
        border-radius: 5px;
        font-size: 4rem;;
        cursor: pointer;
        
    }
    #txtoutput
    {
        border: 2px solid black;
        padding: 3rem;
       margin: 1rem;
        width: 90vw;
       height: 25vh;
       font-size: 2rem;

    }
    h3
    {
        padding:1rem;
        font-size: 2rem;
    }
    footer 
    {
       
       padding: 2rem;
       background-color: background-color #861657;
        background-image:linear-gradient(326deg, #861657 0%, #ffa69e 74%);
        border-top-right-radius: 2rem;
        border-bottom-left-radius: 2rem;
        justify-content: center;
    }
    footer div{
      font-size: 2rem;
       text-align: center;
     
    }
    </style>
</head>
<body>
    <div id="header">   <h2>Valyrian Translator</h2></div>
 
<div id="main">
    <textarea  id="txtarea"></textarea>
   
    <button id="btn-click">Translate</button>
    
  
    <h3>Translation of above mention text 👇 :</h3>
   
    <div id="txtoutput">
    </div>
   
</div>
<footer>
    <div>About</div>
    <p id="para">Are you a fan of Game of Thrones? Did you know that the Valyrian is come from the valeriya which was a town in western countries. Use the translator
        to convert your text from English to Xerxes speak orValyrian  language.</p>
</footer>
    <script>
        // referencing the id's to js 
        var txtdata = document.querySelector('#txtarea') ;
        var btn = document.querySelector('#btn-click');
        var outputDiv =document.querySelector('#txtoutput') ;
        console.log(txtdata);
        console.log(btn);
        console.log(outputDiv);

        // api formation or function
        var api = "https://api.funtranslations.com/translate/valyrian.json"
        function url(note)
        {
            return api + "?" + "text=" + note 
        }
        // this area is for error handling
        function errorEvent(error)
        {
            console.log("error occured...",error);
        alert('an error has occured so please work after some time on this page')  
        }

        btn.addEventListener('click',clickevent)
        // after btn-click
        
        function clickevent()
        {
            console.log('Updating Translation ....');

            // reading textarea 
            var txtinput = txtdata.value

            // fetching the  api
           
            fetch(url(txtinput))
        .then(response => response.json())
        .then(file => {
            var Text = file.contents.translated;
            outputDiv.innerText = Text;
        })

            
            .catch(errorEvent)
        }



    </script>
    
</body>
</html>
