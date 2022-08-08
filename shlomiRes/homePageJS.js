//regisration page

date.min = new Date().toLocaleDateString('en-ca');

function alertRegFunc(){
    //debugger;
    let email=JSON.parse(localStorage.getItem('emails')||'[]');
    let pass=JSON.parse(localStorage.getItem('passwords')||'[]');
    let name=JSON.parse(localStorage.getItem('names')||'[]');
    for(let i=0;i<email.length;i++)
    {
        if(email[i]===document.getElementById('RegEmail').value)
        {
            alert('This email is already exist, please try again.');
            return;
        }
    }
    if(document.getElementById('RegPassword').value.length<8 ||!(document.getElementById('RegPassword').value.match(/[a-zA-Z]/g))){
        alert('Invalid password, please try again.');
        return;
    }
    if(document.getElementById('RegPassword').value!=document.getElementById('verifyPassword').value)
    {
        alert('Passwords are not similar, please try again.');
        return;
    }
    email.push(document.getElementById('RegEmail').value);
    pass.push(document.getElementById('RegPassword').value);
    name.push(document.getElementById('firstName').value);
    localStorage.setItem('emails',JSON.stringify(email));
    localStorage.setItem('passwords',JSON.stringify(pass));
    localStorage.setItem('names',JSON.stringify(name));
    alert('Thank you for joining us, '+document.getElementById('firstName').value+'!');
    open("Login.html");
    location.reload();
    //close();
}
function login(){
    let emails=JSON.parse(localStorage.getItem('emails')||'[]');
    let passwords=JSON.parse(localStorage.getItem('passwords')||'[]');
   let email=document.getElementById('email').value
   let pass=document.getElementById('password').value
   let flag=0;
    for(let i=0;i<email.length;i++)
    {
        if(emails[i]==email)
        {
            flag=1;
        }
        if(emails[i]==email&&passwords[i]==pass)
        {
            alert('Login succeed!');
            open('homePageLoggedIn.html');
            close();
            return;
        }
    }
    if(flag==0)
    {
        alert('This email does not exist, please create account.');
        return;
    }
    alert('Incorrect password, please try again.');
}

function validate2(){   
    document.getElementById('Button').disabled=document.getElementById('email').value.length==0||document.getElementById('password').value.length==0;
    if(document.getElementById('Button').disabled==false)
    {
        document.getElementById('Button').style.cursor="pointer";
        document.getElementById('Button').title="";
    }
    else{
        document.getElementById('Button').style.cursor="not-allowed";
    }
}

function OpenLogin(){
open('Login.html');
}
function OpenSignup(){
    open('registerPage.html');
}
function OpenLoginGuest(){
    open('homePageGuest.html');
}
var d=new Date();
document.getElementById('showDay').innerHTML=d.getDay()+7+'/';
document.getElementById('showMonth').innerHTML=d.getMonth()+1+'/'; 
document.getElementById('showYear').innerHTML=d.getFullYear(); 

function openReservation()
{
    open('newRservation.html');
}
function validate(){
    document.getElementById('RegButton').disabled=document.getElementById('firstName').value.length==0||document.getElementById('lastName').value.length==0||document.getElementById('Age').value.length==0||document.getElementById('RegEmail').value.length==0||document.getElementById('RegPassword').value.length==0||document.getElementById('verifyPassword').value.length==0;
    if(document.getElementById('RegButton').disabled==false)
    {
        document.getElementById('RegButton').style.cursor="pointer";
        document.getElementById('RegButton').title="";
    }
    else{
        document.getElementById('RegButton').style.cursor="not-allowed";
    }
}
function show(){
    if(document.getElementById('amount').value<1||document.getElementById('amount').value>16)
    {
        alert('People amount limits to maximum 16, please try again');
        return;
    }
   alert('Thank you '+ document.getElementById('fullName').value+'. Your reservation has been confirmed in '+document.getElementById('select').value+', for '+ document.getElementById('amount').value+' people'+', on: '+document.getElementById('date').value+', at: '+document.getElementById('time').value);
   open("https://formsubmit.co/el/{custom}");
}

function openReg(){
    open('registerPage.html')
}

function changeNext()
{
    if (document.getElementById("foodImg").src == "http://127.0.0.1:5500/images/fishandchips.png"){
        document.getElementById("foodImg").src = "images/sushi.png";
    }
    else if(document.getElementById("foodImg").src == "http://127.0.0.1:5500/images/sushi.png"){
        document.getElementById("foodImg").src = "images/steak.png";
    }
    else if(document.getElementById("foodImg").src == "http://127.0.0.1:5500/images/steak.png"){
        document.getElementById("foodImg").src = "images/pizza.png";
    }
    else if(document.getElementById("foodImg").src == "http://127.0.0.1:5500/images/pizza.png"){
        document.getElementById("foodImg").src = "images/pasta.png";
    }
    else if(document.getElementById("foodImg").src == "http://127.0.0.1:5500/images/pasta.png")
    {
        document.getElementById("foodImg").src = "images/schnizel.png";
    }
    else if(document.getElementById("foodImg").src == "http://127.0.0.1:5500/images/schnizel.png")
    {
        document.getElementById("foodImg").src = "images/dessert.png";
    }
    else if(document.getElementById("foodImg").src == "http://127.0.0.1:5500/images/dessert.png")
    {
        document.getElementById("foodImg").src = "images/breakfast.png";
    }
    else if(document.getElementById("foodImg").src = "images/breakfast.png")
    {
        document.getElementById("foodImg").src = "images/fishandchips.png";
    }
}
function changePrev(){
    if (document.getElementById("foodImg").src == "http://127.0.0.1:5500/images/fishandchips.png"){
        document.getElementById("foodImg").src = "images/breakfast.png";
    }
    else if(document.getElementById("foodImg").src == "http://127.0.0.1:5500/images/breakfast.png"){
        document.getElementById("foodImg").src = "images/dessert.png";
    }
    else if(document.getElementById("foodImg").src == "http://127.0.0.1:5500/images/dessert.png"){
        document.getElementById("foodImg").src = "images/schnizel.png";
    }
    else if(document.getElementById("foodImg").src == "http://127.0.0.1:5500/images/schnizel.png"){
        document.getElementById("foodImg").src = "images/pasta.png";
    }
    else if(document.getElementById("foodImg").src == "http://127.0.0.1:5500/images/pasta.png")
    {
        document.getElementById("foodImg").src = "images/pizza.png";
    }
    else if(document.getElementById("foodImg").src == "http://127.0.0.1:5500/images/pizza.png")
    {
        document.getElementById("foodImg").src = "images/steak.png";
    }
    else if(document.getElementById("foodImg").src == "http://127.0.0.1:5500/images/steak.png")
    {
        document.getElementById("foodImg").src = "images/sushi.png";
    }
    else if(document.getElementById("foodImg").src == "http://127.0.0.1:5500/images/sushi.png")
    {
        document.getElementById("foodImg").src = "images/fishandchips.png";
    }
}
function changeNextRes(){
    if(document.getElementById("resturant").textContent=='Tel-Aviv'&&document.getElementById("resturantImg").src=='http://127.0.0.1:5500/images/Tel-Aviv.png')
    {
        document.getElementById("resturant").textContent='Hertzeliya';
        document.getElementById('resturantImg').src='images/Hertzeliya.png';
        document.getElementById("description").textContent="The resturant was opened in 2018. Located on 'Isar-Harel' street, 9, Hertzeliya.";
    }
    else if(document.getElementById("resturant").textContent=='Hertzeliya'&&document.getElementById("resturantImg").src=='http://127.0.0.1:5500/images/Hertzeliya.png'){
        document.getElementById("resturant").textContent='Haifa';
        document.getElementById('resturantImg').src='images/Haifa.png';
        document.getElementById("description").textContent="The resturant was opened in 2019. Located on 'Hagolshim' street, 28, Haifa.";
    }
    else if(document.getElementById("resturant").textContent=='Haifa'&&document.getElementById("resturantImg").src=='http://127.0.0.1:5500/images/Haifa.png'){
        document.getElementById("resturant").textContent='Netanya';
        document.getElementById('resturantImg').src='images/Netanya.png';
        document.getElementById("description").textContent="The resturant was opened in 2021. Located on 'Liber-Zeev' street, 56, Netanya.";
    }
    else if(document.getElementById("resturant").textContent=='Netanya'&&document.getElementById("resturantImg").src=='http://127.0.0.1:5500/images/Netanya.png'){
        document.getElementById("resturant").textContent='Tel-Aviv';
        document.getElementById('resturantImg').src='images/Tel-Aviv.png';
        document.getElementById("description").textContent="The resturant was opened in 2020. Located on 'David-Shaul' street, 17, Tel-Aviv.";
    }
}
function changePrevRes(){
    if(document.getElementById("resturant").textContent=='Tel-Aviv'&&document.getElementById("resturantImg").src=='http://127.0.0.1:5500/images/Tel-Aviv.png'){
        document.getElementById("resturant").textContent='Netanya';
        document.getElementById('resturantImg').src='images/Netanya.png';
        document.getElementById("description").textContent="The resturant was opened in 2021. Located on 'Liber-Zeev' street, 56, Netanya.";
    }
    else if(document.getElementById("resturant").textContent=='Netanya'&&document.getElementById("resturantImg").src=='http://127.0.0.1:5500/images/Netanya.png'){
        document.getElementById("resturant").textContent='Haifa';
        document.getElementById('resturantImg').src='images/Haifa.png';
        document.getElementById("description").textContent="The resturant was opened in 2019. Located on 'Hagolshim' street, 28, Haifa.";
    }
    else if(document.getElementById("resturant").textContent=='Haifa'&&document.getElementById("resturantImg").src=='http://127.0.0.1:5500/images/Haifa.png'){
        document.getElementById("resturant").textContent='Hertzeliya';
        document.getElementById('resturantImg').src='images/Hertzeliya.png';
        document.getElementById("description").textContent="The resturant was opened in 2018. Located on 'Isar-Harel' street, 9, Hertzeliya.";
    }
    else if(document.getElementById("resturant").textContent=='Hertzeliya'&&document.getElementById("resturantImg").src=='http://127.0.0.1:5500/images/Hertzeliya.png'){
        document.getElementById("resturant").textContent='Tel-Aviv';
        document.getElementById('resturantImg').src='images/Tel-Aviv.png';
        document.getElementById("description").textContent="The resturant was opened in 2020. Located on 'David-Shaul' street, 17, Tel-Aviv.";
    }
}
function changeNextStart(){
    if(document.getElementById("start").textContent=='Cauli-flower. Price: 35 NIS.'&&document.getElementById("startImg").src=='http://127.0.0.1:5500/images/kruvit.png'){
        document.getElementById("start").innerHTML='Soup.<br> Price: 32 NIS.';
        document.getElementById('startImg').src='http://127.0.0.1:5500/images/soup.png';
    }
    else if(document.getElementById("start").textContent=='Soup. Price: 32 NIS.'&&document.getElementById("startImg").src=='http://127.0.0.1:5500/images/soup.png'){
        document.getElementById("start").innerHTML='Bread.<br> Price: 24 NIS.';
        document.getElementById('startImg').src='http://127.0.0.1:5500/images/bread.png';
    }
    else if(document.getElementById("start").textContent=='Bread. Price: 24 NIS.'&&document.getElementById("startImg").src=='http://127.0.0.1:5500/images/bread.png'){
        document.getElementById("start").innerHTML='Chips.<br> Price: 18 NIS.';
        document.getElementById('startImg').src='http://127.0.0.1:5500/images/chips.png';
    }
    else if(document.getElementById("start").textContent=='Chips. Price: 18 NIS.'&&document.getElementById("startImg").src=='http://127.0.0.1:5500/images/chips.png'){
        document.getElementById("start").innerHTML='Falafel.<br> Price: 23 NIS.';
        document.getElementById('startImg').src='http://127.0.0.1:5500/images/falafel.png';
    }
    else if(document.getElementById("start").textContent=='Falafel. Price: 23 NIS.'&&document.getElementById("startImg").src=='http://127.0.0.1:5500/images/falafel.png'){
        document.getElementById("start").innerHTML='Cauli-flower.<br> Price: 35 NIS.';
        document.getElementById('startImg').src='http://127.0.0.1:5500/images/kruvit.png';
    }
}
function changePrevStart(){
    if(document.getElementById("start").textContent=='Falafel. Price: 23 NIS.'&&document.getElementById("startImg").src=='http://127.0.0.1:5500/images/falafel.png'){
        document.getElementById("start").innerHTML='Chips.<br> Price: 18 NIS.';
        document.getElementById('startImg').src='http://127.0.0.1:5500/images/chips.png';
    }
    else if(document.getElementById("start").textContent=='Chips. Price: 18 NIS.'&&document.getElementById("startImg").src=='http://127.0.0.1:5500/images/chips.png'){
        document.getElementById("start").innerHTML='Bread.<br> Price: 24 NIS.';
        document.getElementById('startImg').src='http://127.0.0.1:5500/images/bread.png';
    }
    else if(document.getElementById("start").textContent=='Bread. Price: 24 NIS.'&&document.getElementById("startImg").src=='http://127.0.0.1:5500/images/bread.png'){
        document.getElementById("start").innerHTML='Soup.<br> Price: 32 NIS.';
        document.getElementById('startImg').src='http://127.0.0.1:5500/images/soup.png';
    }
    else if(document.getElementById("start").textContent=='Soup. Price: 32 NIS.'&&document.getElementById("startImg").src=='http://127.0.0.1:5500/images/soup.png'){
        document.getElementById("start").innerHTML='Cauli-flower.<br> Price: 35 NIS.';
        document.getElementById('startImg').src='http://127.0.0.1:5500/images/kruvit.png';
    }
    else if(document.getElementById("start").textContent=='Cauli-flower. Price: 35 NIS.'&&document.getElementById("startImg").src=='http://127.0.0.1:5500/images/kruvit.png'){
        document.getElementById("start").innerHTML='Falafel.<br> Price: 23 NIS.';
        document.getElementById('startImg').src='http://127.0.0.1:5500/images/falafel.png';
    }
}
function changeNextSalad(){
    if(document.getElementById("salad").textContent=='Pasta salad. Price: 55 NIS.'&&document.getElementById("saladImg").src=='http://127.0.0.1:5500/images/pastaSalad.png'){
        document.getElementById("salad").innerHTML='Caesar salad.<br> Price: 64 NIS.';
        document.getElementById('saladImg').src='http://127.0.0.1:5500/images/caesarSalad.png';
    }
    else if(document.getElementById("salad").textContent=='Caesar salad. Price: 64 NIS.'&&document.getElementById("saladImg").src=='http://127.0.0.1:5500/images/caesarSalad.png'){
        document.getElementById("salad").innerHTML='Tomato salad.<br> Price: 44 NIS.';
        document.getElementById('saladImg').src='http://127.0.0.1:5500/images/tomatoSalad.png';
    }
    else if(document.getElementById("salad").textContent=='Tomato salad. Price: 44 NIS.'&&document.getElementById("saladImg").src=='http://127.0.0.1:5500/images/tomatoSalad.png'){
        document.getElementById("salad").innerHTML='Chicken salad.<br> Price: 74 NIS.';
        document.getElementById('saladImg').src='http://127.0.0.1:5500/images/chickenSalad.png';
    }
    else if(document.getElementById("salad").textContent=='Chicken salad. Price: 74 NIS.'&&document.getElementById("saladImg").src=='http://127.0.0.1:5500/images/chickenSalad.png'){
        document.getElementById("salad").innerHTML='Pasta salad.<br> Price: 55 NIS.';
        document.getElementById('saladImg').src='http://127.0.0.1:5500/images/pastaSalad.png';
    }
}
function changePrevSalad(){
    if(document.getElementById("salad").textContent=='Pasta salad. Price: 55 NIS.'&&document.getElementById("saladImg").src=='http://127.0.0.1:5500/images/pastaSalad.png'){
        document.getElementById("salad").innerHTML='Chicken salad.<br> Price: 74 NIS.';
        document.getElementById('saladImg').src='http://127.0.0.1:5500/images/chickenSalad.png';
    }
    else if(document.getElementById("salad").textContent=='Chicken salad. Price: 74 NIS.'&&document.getElementById("saladImg").src=='http://127.0.0.1:5500/images/chickenSalad.png'){
        document.getElementById("salad").innerHTML='Tomato salad.<br> Price: 44 NIS.';
        document.getElementById('saladImg').src='http://127.0.0.1:5500/images/tomatoSalad.png';
    }
    else if(document.getElementById("salad").textContent=='Tomato salad. Price: 44 NIS.'&&document.getElementById("saladImg").src=='http://127.0.0.1:5500/images/tomatoSalad.png'){
        document.getElementById("salad").innerHTML='Caesar salad.<br> Price: 64 NIS.';
        document.getElementById('saladImg').src='http://127.0.0.1:5500/images/caesarSalad.png';
    }
    else if(document.getElementById("salad").textContent=='Caesar salad. Price: 64 NIS.'&&document.getElementById("saladImg").src=='http://127.0.0.1:5500/images/caesarSalad.png'){
        document.getElementById("salad").innerHTML='Pasta salad.<br> Price: 55 NIS.';
        document.getElementById('saladImg').src='http://127.0.0.1:5500/images/pastaSalad.png';
    }
}
function changeNextMain(){
    if(document.getElementById("main").textContent=='Hamburger. Price: 69 NIS.'&&document.getElementById("mainImg").src=='http://127.0.0.1:5500/images/hamburger.png'){
        document.getElementById("main").innerHTML='Sushi.<br> Price: 90 NIS.';
        document.getElementById('mainImg').src='http://127.0.0.1:5500/images/sushi2.png';
    }
    else if(document.getElementById("main").textContent=='Sushi. Price: 90 NIS.'&&document.getElementById("mainImg").src=='http://127.0.0.1:5500/images/sushi2.png'){
        document.getElementById("main").innerHTML='Pizza.<br> Price: 56 NIS.';
        document.getElementById('mainImg').src='http://127.0.0.1:5500/images/pizza2.png';
    }
    else if(document.getElementById("main").textContent=='Pizza. Price: 56 NIS.'&&document.getElementById("mainImg").src=='http://127.0.0.1:5500/images/pizza2.png'){
        document.getElementById("main").innerHTML='Steak.<br> Price: 99 NIS.';
        document.getElementById('mainImg').src='http://127.0.0.1:5500/images/steak2.png';
    }
    else if(document.getElementById("main").textContent=='Steak. Price: 99 NIS.'&&document.getElementById("mainImg").src=='http://127.0.0.1:5500/images/steak2.png'){
        document.getElementById("main").innerHTML='Fish.<br> Price: 89 NIS.';
        document.getElementById('mainImg').src='http://127.0.0.1:5500/images/fish.png';
    }
    else if(document.getElementById("main").textContent=='Fish. Price: 89 NIS.'&&document.getElementById("mainImg").src=='http://127.0.0.1:5500/images/fish.png'){
        document.getElementById("main").innerHTML='Bolognese<br> pasta.<br> Price: 66 NIS.';
        document.getElementById('mainImg').src='http://127.0.0.1:5500/images/bolognesePasta.png';
    }
    else if(document.getElementById("main").textContent=='Bolognese pasta. Price: 66 NIS.'&&document.getElementById("mainImg").src=='http://127.0.0.1:5500/images/bolognesePasta.png'){
        document.getElementById("main").innerHTML='Schnitzel.<br> Price: 58 NIS.';
        document.getElementById('mainImg').src='http://127.0.0.1:5500/images/schnizel2.png';
    }
    else if(document.getElementById("main").textContent=='Schnitzel. Price: 58 NIS.'&&document.getElementById("mainImg").src=='http://127.0.0.1:5500/images/schnizel2.png'){
        document.getElementById("main").innerHTML='Hamburger.<br> Price: 69 NIS.';
        document.getElementById('mainImg').src='http://127.0.0.1:5500/images/hamburger.png';
    }
}
function changePrevMain(){
    if(document.getElementById("main").textContent=='Hamburger. Price: 69 NIS.'&&document.getElementById("mainImg").src=='http://127.0.0.1:5500/images/hamburger.png'){
        document.getElementById("main").innerHTML='Schnitzel.<br> Price: 58 NIS.';
        document.getElementById('mainImg').src='http://127.0.0.1:5500/images/schnizel2.png';
    }
    else if(document.getElementById("main").textContent=='Schnitzel. Price: 58 NIS.'&&document.getElementById("mainImg").src=='http://127.0.0.1:5500/images/schnizel2.png'){
        document.getElementById("main").innerHTML='Bolognese<br> pasta.<br> Price: 66 NIS.';
        document.getElementById('mainImg').src='http://127.0.0.1:5500/images/bolognesePasta.png';
    }
    else if(document.getElementById("main").textContent=='Bolognese pasta. Price: 66 NIS.'&&document.getElementById("mainImg").src=='http://127.0.0.1:5500/images/bolognesePasta.png'){
        document.getElementById("main").innerHTML='Fish.<br> Price: 89 NIS.';
        document.getElementById('mainImg').src='http://127.0.0.1:5500/images/fish.png';
    }
    else if(document.getElementById("main").textContent=='Fish. Price: 89 NIS.'&&document.getElementById("mainImg").src=='http://127.0.0.1:5500/images/fish.png'){
        document.getElementById("main").innerHTML='Steak.<br> Price: 99 NIS.';
        document.getElementById('mainImg').src='http://127.0.0.1:5500/images/steak2.png';
    }
    else if(document.getElementById("main").textContent=='Steak. Price: 99 NIS.'&&document.getElementById("mainImg").src=='http://127.0.0.1:5500/images/steak2.png'){
        document.getElementById("main").innerHTML='Pizza.<br> Price: 56 NIS.';
        document.getElementById('mainImg').src='http://127.0.0.1:5500/images/pizza2.png';
    }
    else if(document.getElementById("main").textContent=='Pizza. Price: 56 NIS.'&&document.getElementById("mainImg").src=='http://127.0.0.1:5500/images/pizza2.png'){
        document.getElementById("main").innerHTML='Sushi.<br> Price: 90 NIS.';
        document.getElementById('mainImg').src='http://127.0.0.1:5500/images/sushi2.png';
    }
    else if(document.getElementById("main").textContent=='Sushi. Price: 90 NIS.'&&document.getElementById("mainImg").src=='http://127.0.0.1:5500/images/sushi2.png'){
        document.getElementById("main").innerHTML='Hamburger.<br> Price: 69 NIS.';
        document.getElementById('mainImg').src='http://127.0.0.1:5500/images/hamburger.png';
    }
}
function changeNextDessert(){
    if(document.getElementById("dessert").textContent=='Moussecake. Price: 29 NIS.'&&document.getElementById("dessertImg").src=='http://127.0.0.1:5500/images/mousseCake.png'){
        document.getElementById("dessert").innerHTML='Donuts.<br> Price: 32 NIS.';
        document.getElementById('dessertImg').src='http://127.0.0.1:5500/images/donuts.png';
    }
    else if(document.getElementById("dessert").textContent=='Donuts. Price: 32 NIS.'&&document.getElementById("dessertImg").src=='http://127.0.0.1:5500/images/donuts.png'){
        document.getElementById("dessert").innerHTML='chocolate<br> cake<br> with vanilla <br>ice cream.<br> Price: 33 NIS.';
        document.getElementById('dessertImg').src='http://127.0.0.1:5500/images/cake.png';
    }
    else if(document.getElementById("dessert").textContent=='chocolate cake with vanilla ice cream. Price: 33 NIS.'&&document.getElementById("dessertImg").src=='http://127.0.0.1:5500/images/cake.png'){
        document.getElementById("dessert").innerHTML='Mousse<br>cake.<br> Price: 29 NIS.';
        document.getElementById('dessertImg').src='http://127.0.0.1:5500/images/mousseCake.png';
    }
}
function changePrevDessert(){
    if(document.getElementById("dessert").textContent=='Moussecake. Price: 29 NIS.'&&document.getElementById("dessertImg").src=='http://127.0.0.1:5500/images/mousseCake.png'){
        document.getElementById("dessert").innerHTML='chocolate<br> cake<br> with vanilla <br>ice cream.<br> Price: 33 NIS.';
        document.getElementById('dessertImg').src='http://127.0.0.1:5500/images/cake.png';
    }
    else if(document.getElementById("dessert").textContent=='chocolate cake with vanilla ice cream. Price: 33 NIS.'&&document.getElementById("dessertImg").src=='http://127.0.0.1:5500/images/cake.png'){
        document.getElementById("dessert").innerHTML='Donuts.<br> Price: 32 NIS.';
        document.getElementById('dessertImg').src='http://127.0.0.1:5500/images/donuts.png';
    }
    else if(document.getElementById("dessert").textContent=='Donuts. Price: 32 NIS.'&&document.getElementById("dessertImg").src=='http://127.0.0.1:5500/images/donuts.png'){
        document.getElementById("dessert").innerHTML='Mousse<br>cake.<br> Price: 29 NIS.';
        document.getElementById('dessertImg').src='http://127.0.0.1:5500/images/mousseCake.png';
    }
}
function changeNextDrink(){
    if(document.getElementById("drink").textContent=='Coke. Price: 13 NIS.'&&document.getElementById("drinkImg").src=='http://127.0.0.1:5500/images/coke.png'){
        document.getElementById("drink").innerHTML='Zero coke.<br> Price: 13 NIS.';
        document.getElementById('drinkImg').src='http://127.0.0.1:5500/images/zero.png';
    }
    else if(document.getElementById("drink").textContent=='Zero coke. Price: 13 NIS.'&&document.getElementById("drinkImg").src=='http://127.0.0.1:5500/images/zero.png'){
        document.getElementById("drink").innerHTML='Sprite.<br> Price: 13 NIS.';
        document.getElementById('drinkImg').src='http://127.0.0.1:5500/images/sprite.png';
    }
    else if(document.getElementById("drink").textContent=='Sprite. Price: 13 NIS.'&&document.getElementById("drinkImg").src=='http://127.0.0.1:5500/images/sprite.png'){
        document.getElementById("drink").innerHTML='Zero sprite.<br> Price: 13 NIS.';
        document.getElementById('drinkImg').src='http://127.0.0.1:5500/images/spritezero.png';
    }
    else if(document.getElementById("drink").textContent=='Zero sprite. Price: 13 NIS.'&&document.getElementById("drinkImg").src=='http://127.0.0.1:5500/images/spritezero.png'){
        document.getElementById("drink").innerHTML='Soda.<br> Price: 10 NIS.';
        document.getElementById('drinkImg').src='http://127.0.0.1:5500/images/soda.png';
    }else if(document.getElementById("drink").textContent=='Soda. Price: 10 NIS.'&&document.getElementById("drinkImg").src=='http://127.0.0.1:5500/images/soda.png'){
        document.getElementById("drink").innerHTML='Coke.<br> Price: 13 NIS.';
        document.getElementById('drinkImg').src='http://127.0.0.1:5500/images/coke.png';
    }
}
function changePrevDrink(){
    if(document.getElementById("drink").textContent=='Coke. Price: 13 NIS.'&&document.getElementById("drinkImg").src=='http://127.0.0.1:5500/images/coke.png'){
        document.getElementById("drink").innerHTML='Soda.<br> Price: 10 NIS.';
        document.getElementById('drinkImg').src='http://127.0.0.1:5500/images/soda.png';
    }
    else if(document.getElementById("drink").textContent=='Soda. Price: 10 NIS.'&&document.getElementById("drinkImg").src=='http://127.0.0.1:5500/images/soda.png'){
        document.getElementById("drink").innerHTML='Zero sprite.<br> Price: 13 NIS.';
        document.getElementById('drinkImg').src='http://127.0.0.1:5500/images/spritezero.png';
    }
    else if(document.getElementById("drink").textContent=='Zero sprite. Price: 13 NIS.'&&document.getElementById("drinkImg").src=='http://127.0.0.1:5500/images/spritezero.png'){
        document.getElementById("drink").innerHTML='Sprite.<br> Price: 13 NIS.';
        document.getElementById('drinkImg').src='http://127.0.0.1:5500/images/sprite.png';
    }
    else if(document.getElementById("drink").textContent=='Sprite. Price: 13 NIS.'&&document.getElementById("drinkImg").src=='http://127.0.0.1:5500/images/sprite.png'){
        document.getElementById("drink").innerHTML='Zero coke.<br> Price: 13 NIS.';
        document.getElementById('drinkImg').src='http://127.0.0.1:5500/images/zero.png';
    }
    else if(document.getElementById("drink").textContent=='Zero coke. Price: 13 NIS.'&&document.getElementById("drinkImg").src=='http://127.0.0.1:5500/images/zero.png'){
        document.getElementById("drink").innerHTML='Coke.<br> Price: 13 NIS.';
        document.getElementById('drinkImg').src='http://127.0.0.1:5500/images/coke.png';
    }
}

function addStarter(){
    document.getElementById('amountStarters').textContent++;
    if(document.getElementById("start").textContent=='Cauli-flower. Price: 35 NIS.'){
        document.getElementById('amountCauliflower').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('35');
    }
    else if(document.getElementById("start").textContent=='Soup. Price: 32 NIS.'){
        document.getElementById('amountSoup').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('32');
    }
    else if(document.getElementById("start").textContent=='Bread. Price: 24 NIS.'){
        document.getElementById('amountBread').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('24');
    }
    else if(document.getElementById("start").textContent=='Chips. Price: 18 NIS.'){
        document.getElementById('amountChips').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('18');
    }
    else if(document.getElementById("start").textContent=='Falafel. Price: 23 NIS.'){
        document.getElementById('amountFalafel').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('23');
    }
}
function removeStarter(){
    if(document.getElementById('amountStarters').textContent>0){
    document.getElementById('amountStarters').textContent--;
        if(document.getElementById("start").textContent=='Cauli-flower. Price: 35 NIS.'&&document.getElementById("amountCauliflower").textContent>0){
            document.getElementById('amountCauliflower').textContent--; 
            document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('35');
        }
        else if(document.getElementById("start").textContent=='Soup. Price: 32 NIS.'&&document.getElementById("amountSoup").textContent>0){
            document.getElementById('amountSoup').textContent--; 
            document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('32');
        }
        else if(document.getElementById("start").textContent=='Bread. Price: 24 NIS.'&&document.getElementById("amountBread").textContent>0){
            document.getElementById('amountBread').textContent--; 
            document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('24');
        }
        else if(document.getElementById("start").textContent=='Chips. Price: 18 NIS.'&&document.getElementById("amountChips").textContent>0){
            document.getElementById('amountChips').textContent--; 
            document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('18');
        }
        else if(document.getElementById("start").textContent=='Falafel. Price: 23 NIS.'&& document.getElementById("amountFalafel").textContent>0){
            document.getElementById('amountFalafel').textContent--; 
            document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('23');
        }
    }
}
function addSalad(){
    document.getElementById('amountSalads').textContent++;
    if(document.getElementById("salad").textContent=='Pasta salad. Price: 55 NIS.'){
        document.getElementById('amountPastaSalad').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('55');
    }
    else if(document.getElementById("salad").textContent=='Caesar salad. Price: 64 NIS.'){
        document.getElementById('amountCaesarSalad').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('64');
    }
    else if(document.getElementById("salad").textContent=='Tomato salad. Price: 44 NIS.'){
        document.getElementById('amountTomatoSalad').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('44');
    }
    else if(document.getElementById("salad").textContent=='Schnitzel. Price: 58 NIS.'){
        document.getElementById('amountSchnitzel').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('58');
    }

}
function removeSalad(){
    if(document.getElementById('amountSalads').textContent>0){
    document.getElementById('amountSalads').textContent--;
    if(document.getElementById("salad").textContent=='Pasta salad. Price: 55 NIS.'&&document.getElementById("amountPastaSalad").textContent>0){
        document.getElementById('amountPastaSalad').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('55');
    }
    else if(document.getElementById("salad").textContent=='Caesar salad. Price: 64 NIS.'&&document.getElementById("amountCaesarSalad").textContent>0){
        document.getElementById('amountCaesarSalad').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('64');
    }
    else if(document.getElementById("salad").textContent=='Tomato salad. Price: 44 NIS.'&&document.getElementById("amountTomatoSalad").textContent>0){
        document.getElementById('amountTomatoSalad').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('44');
    }
    else if(document.getElementById("salad").textContent=='Chicken salad. Price: 74 NIS.'&&document.getElementById("amountChickenSalad").textContent>0){
        document.getElementById('amountChickenSalad').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('74');
    }
    }
}
function addMainDish(){
    document.getElementById('amountDishes').textContent++;
    if(document.getElementById("main").textContent=='Hamburger. Price: 69 NIS.'){
        document.getElementById('amountHamburger').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('69');
    }
    else if(document.getElementById("main").textContent=='Sushi. Price: 90 NIS.'){
        document.getElementById('amountSushi').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('90');
    }
    else if(document.getElementById("main").textContent=='Pizza. Price: 56 NIS.'){
        document.getElementById('amountPizza').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('56');
    }
    else if(document.getElementById("main").textContent=='Steak. Price: 99 NIS.'){
        document.getElementById('amountSteak').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('99');
    }
    else if(document.getElementById("main").textContent=='Fish. Price: 89 NIS.'){
        document.getElementById('amountFish').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('89');
    }
    else if(document.getElementById("main").textContent=='Bolognese pasta. Price: 66 NIS.'){
        document.getElementById('amountBolognese').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('66');
    }
    else if(document.getElementById("main").textContent=='Schnitzel. Price: 58 NIS.'){
        document.getElementById('amountSchnitzel').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('58');
    }
}
function removeMainDish(){
    if(document.getElementById('amountDishes').textContent>0){
    document.getElementById('amountDishes').textContent--;
    if(document.getElementById("main").textContent=='Hamburger. Price: 69 NIS.'&&document.getElementById("amountHamburger").textContent>0){
        document.getElementById('amountHamburger').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('69');
    }
    else if(document.getElementById("main").textContent=='Sushi. Price: 90 NIS.'&&document.getElementById("amountSushi").textContent>0){
        document.getElementById('amountSushi').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('90');
    }
    else if(document.getElementById("main").textContent=='Pizza. Price: 56 NIS.'&&document.getElementById("amountPizza").textContent>0){
        document.getElementById('amountPizza').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('56');
    }
    else if(document.getElementById("main").textContent=='Steak. Price: 99 NIS.'&&document.getElementById("amountSteak").textContent>0){
        document.getElementById('amountSteak').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('99');
    }
    else if(document.getElementById("main").textContent=='Fish. Price: 89 NIS.'&&document.getElementById("amountFish").textContent>0){
        document.getElementById('amountFish').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('89');
    }
    else if(document.getElementById("main").textContent=='Bolognese pasta. Price: 66 NIS.'&&document.getElementById("amountBolognese").textContent>0){
        document.getElementById('amountBolognese').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('66');
    }
    else if(document.getElementById("main").textContent=='Schnitzel. Price: 58 NIS.'&&document.getElementById("amountSchnitzel").textContent>0){
        document.getElementById('amountSchnitzel').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('58');
    }
    }
}
function addDessert(){
    document.getElementById('amountDesserts').textContent++;
    if(document.getElementById("dessert").textContent=='Moussecake. Price: 29 NIS.'){
        document.getElementById('amountMousse').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('29');
    }
    else if(document.getElementById("dessert").textContent=='Donuts. Price: 32 NIS.'){
        document.getElementById('amountDonut').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('32');
    }
    else if(document.getElementById("dessert").textContent=='chocolate cake with vanilla ice cream. Price: 33 NIS.'){
        document.getElementById('amountChocolate').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('33');
    }
}
function removeDessert(){
    if(document.getElementById('amountDesserts').textContent>0){
    document.getElementById('amountDesserts').textContent--;
    if(document.getElementById("dessert").textContent=='Moussecake. Price: 29 NIS.'&&document.getElementById("amountMousse").textContent>0){
        document.getElementById('amountMousse').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('29');
    }
    else if(document.getElementById("dessert").textContent=='Donuts. Price: 32 NIS.'&&document.getElementById("amountDonut").textContent>0){
        document.getElementById('amountDonut').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('32');
    }
    else if(document.getElementById("dessert").textContent=='chocolate cake with vanilla ice cream. Price: 33 NIS.'&&document.getElementById("amountChocolate").textContent>0){
        document.getElementById('amountChocolate').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('33');
    }
    }
}
function addDrink(){
    document.getElementById('amountDrinks').textContent++;
    if(document.getElementById("drink").textContent=='Coke. Price: 13 NIS.'){
        document.getElementById('amountCoke').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('13');
    }
    else if(document.getElementById("drink").textContent=='Zero coke. Price: 13 NIS.'){
        document.getElementById('amountZeroCoke').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('13');
    }
    else if(document.getElementById("drink").textContent=='Sprite. Price: 13 NIS.'){
        document.getElementById('amountSprite').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('13');
    }
    else if(document.getElementById("drink").textContent=='Zero sprite. Price: 13 NIS.'){
        document.getElementById('amountZeroSprite').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('13');
    }
    else if(document.getElementById("drink").textContent=='Soda. Price: 10 NIS.'){
        document.getElementById('amountSoda').textContent++; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)+JSON.parse('10');
    }
}
function removeDrink(){
    if(document.getElementById('amountDrinks').textContent>0){
    document.getElementById('amountDrinks').textContent--;
    if(document.getElementById("drink").textContent=='Coke. Price: 13 NIS.'&&document.getElementById("amountCoke").textContent>0){
        document.getElementById('amountCoke').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('13');
    }
    else if(document.getElementById("drink").textContent=='Zero coke. Price: 13 NIS.'&&document.getElementById("amountZeroCoke").textContent>0){
        document.getElementById('amountZeroCoke').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('13');
    }
    else if(document.getElementById("drink").textContent=='Sprite. Price: 13 NIS.'&&document.getElementById("amountSprite").textContent>0){
        document.getElementById('amountSprite').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('13');
    }
    else if(document.getElementById("drink").textContent=='Zero sprite. Price: 13 NIS.'&&document.getElementById("amountZeroSprite").textContent>0){
        document.getElementById('amountZeroSprite').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('13');
    }
    else if(document.getElementById("drink").textContent=='Soda. Price: 10 NIS.'&&document.getElementById("amountSoda").textContent>0){
        document.getElementById('amountSoda').textContent--; 
        document.getElementById('totalPrice').textContent=JSON.parse(document.getElementById('totalPrice').textContent)-JSON.parse('10');
    }
    }
}
function refreshtFunc(){
    location.reload();
}
function delivery(){
    if(document.getElementById('totalPrice').textContent==0){
        alert('Please choose produts!')
        return;
    }
    else if(document.getElementById('totalPrice').textContent>0&&document.getElementById('totalPrice').textContent<100)
    {
        alert('Delivery-at least 100 NIS!');
        return;
    }
    else{
        let amount=JSON.parse(localStorage.getItem('amounts')||'[]');
        amount=document.getElementById('totalPrice').textContent;
        localStorage.setItem('amounts',JSON.stringify(amount));
        open('delivery.html');
    }
}
function TA(){
    if(document.getElementById('totalPrice').textContent==0){
        alert('Please choose products!')
        return;
    }
    else if(document.getElementById('totalPrice').textContent>0&&document.getElementById('totalPrice').textContent<50)
    {
        alert('TA-at least 50 NIS!');
        return;
    }
    else{
        let amount=JSON.parse(localStorage.getItem('amounts')||'[]');
        amount=document.getElementById('totalPrice').textContent;
        localStorage.setItem('amounts',JSON.stringify(amount));
        open('ta.html');
    }
}

function remindPrice(){
    var number=JSON.parse(localStorage.getItem('amounts'));
document.getElementById('totalPrice2').textContent=number;
}

function alertPay(){
    debugger
    if(document.getElementById('numberPhone').value.length==0||document.getElementById('fullName').value.length==0||document.getElementById('card-num-input').value.length==0||document.getElementById('expiry-date-input').value.length==0||document.getElementById('secret-number-input').value.length==0||document.getElementById('card-name-input').value.length==0){
        alert('Please fill all the details!');
        return;
    }
    else if(document.getElementById('selectVisa').value=='Visa'&&document.getElementById('card-num-input').value.length!=16){
        alert('Invalid visa! Please try again.');
        return; 
    }
    else if(document.getElementById('selectVisa').value=='Diners'&&document.getElementById('card-num-input').value.length!=14){
        alert('Invalid visa! Please try again.');
        return; 
    }
    else if(document.getElementById('selectVisa').value=='American express'&&document.getElementById('card-num-input').value.length!=15){
        alert('Invalid visa! Please try again.');
        return; 
    }
    else{
        alert('Thank you '+document.getElementById('fullName').value + '! Your purchase is confirmed and you have been charged!')
    }
}
function alertGuarentee(){
    if(document.getElementById('numberPhone').value.length==0||document.getElementById('fullName').value.length==0||document.getElementById('card-num-input').value.length==0||document.getElementById('expiry-date-input').value.length==0||document.getElementById('secret-number-input').value.length==0||document.getElementById('card-name-input').value.length==0){
        alert('Please fill all the details!');
        return;
    }
    else if(document.getElementById('selectVisa').value=='Visa'&&document.getElementById('card-num-input').value.length!=16){
        alert('Invalid visa! Please try again.');
        return; 
    }
    else if(document.getElementById('selectVisa').value=='Diners'&&document.getElementById('card-num-input').value.length!=14){
        alert('Invalid visa! Please try again.');
        return; 
    }
    else if(document.getElementById('selectVisa').value=='American express'&&document.getElementById('card-num-input').value.length!=15){
        alert('Invalid visa! Please try again.');
        return; 
    }
    else{
        alert('Thank you '+document.getElementById('fullName').value + '! Your credit card is confirmed, please pay at the resturant.');
    }
}

function alertPay2(){
    debugger;
    if(document.getElementById('numberPhone').value.length==0||document.getElementById('fullName').value.length==0||document.getElementById('card-num-input').value.length==0||document.getElementById('expiry-date-input').value.length==0||document.getElementById('secret-number-input').value.length==0||document.getElementById('card-name-input').value.length==0||document.getElementById('fullAddress').value.length==0){
        alert('Please fill all the details!')
        return;
    }
    else if(document.getElementById('selectVisa').value=='Visa'&&document.getElementById('card-num-input').value.length!=16){
        alert('Invalid visa! Please try again.');
        return; 
    }
    else if(document.getElementById('selectVisa').value=='Diners'&&document.getElementById('card-num-input').value.length!=14){
        alert('Invalid visa! Please try again.');
        return; 
    }
    else if(document.getElementById('selectVisa').value=='American express'&&document.getElementById('card-num-input').value.length!=15){
        alert('Invalid visa! Please try again.');
        return; 
    }
    else{
        alert('Thank you '+document.getElementById('fullName').value + '! Your purchase is confirmed and you have been charged!')
    }
}

function alertGuarentee2(){
    if(document.getElementById('numberPhone').value.length==0||document.getElementById('fullName').value.length==0||document.getElementById('card-num-input').value.length==0||document.getElementById('expiry-date-input').value.length==0||document.getElementById('secret-number-input').value.length==0||document.getElementById('card-name-input').value.length==0||document.getElementById('fullAddress').value.length==0){
        alert('Please fill all the details!')
        return;
    }
    else if(document.getElementById('selectVisa').value=='Visa'&&document.getElementById('card-num-input').value.length!=16){
        alert('Invalid visa! Please try again.');
        return; 
    }
    else if(document.getElementById('selectVisa').value=='Diners'&&document.getElementById('card-num-input').value.length!=14){
        alert('Invalid visa! Please try again.');
        return; 
    }
    else if(document.getElementById('selectVisa').value=='American express'&&document.getElementById('card-num-input').value.length!=15){
        alert('Invalid visa! Please try again.');
        return; 
    }
    else{
        alert('Thank you '+document.getElementById('fullName').value + '! Your credit card is confirmed, please pay at the resturant.')
    }
}
