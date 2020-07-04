var t1=[
  "True wisdom comes not from knowledge, but from understanding.",
  "Have a good day, may god bless you with everything.",
  "random 3",
  "randmommmm 4"
];
var par = t1[Math.floor(Math.random() * 4)];
document.write(par);

document.getElementById("demo").innerHTML=(par);
document.body.innerHTML= document.getElementById("myP").innerHTML=(par);



function cc(){
  if(converter.usd.value>0){
    document.getElementById('euro').value= (valNum/1.90).toFixed(2);
    document.getElementById('uk').value= (valNum/.90).toFixed(2);
  }
  else if (converter.eu.value>0) {
    document.getElementById('dollar').value= (valNum/1.0).toFixed(2);
    document.getElementById('uk').value= (valNum/1.10).toFixed(2);

  }
  else if (converter.gbp.value>0) {
    document.getElementById('dollar').value= (valNum/1.2).toFixed(2);
    document.getElementById('euro').value= (valNum/1.5).toFixed(2);

  }
  else {
    window.alert("Enter value greater than 0");
  }
}
