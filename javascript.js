var text =  document.getElementById('texte');
var paragraphe = document.getElementById('texte1');

text.addEventListener('click', function(){
    paragraphe.style.fontSize = "10em";
});

text.addEventListener('dblclick', function(){
   paragraphe.style.fontSize = "1em";
});