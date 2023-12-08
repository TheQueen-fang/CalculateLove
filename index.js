function love() {
    let h2 = document.getElementById("h2");
    let txt1 = document.getElementById("txt1").value;
    console.log(txt1+"");
    let txt2 = document.getElementById("txt2").value;
    if (txt1 == "" || txt2 =="") { alert( "Love","plz enter your name"); return; }
    //removing space 
    let combinedValue = (txt1 + txt2).replace(/\s/g, "").toLowerCase();
    
    let random = Math.floor(Math.random() * 100);
    if (localStorage.getItem(combinedValue)!=null) {
        h2.innerText = localStorage.getItem(combinedValue)+"%";
    } else {
        localStorage.setItem(combinedValue, random);
        h2.innerText = random + "%";

    }
    
    
    
    



}