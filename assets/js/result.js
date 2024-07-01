
let printDataInScreen = (id) => {

    console.log("ID que chegou: " + id)
    



    fetch('../../doencas.json')
    .then(response => response.json())
    .then(data => {

        console.log("ID do json" + data.Disease[id].disease);

        document.getElementById('disease').innerText = data.Disease[id].disease; 
        
        let treatmentList = document.getElementById('treatment-list');

        data.Disease[id].treatment.forEach(treatments_ => {
            let li = document.createElement('li')

            li.innerText = `${treatments_}`;

            treatmentList.append(li);

        })


         
    

    
    
    
    })
        
}



let urlParams = new URLSearchParams(window.location.search);

let disease = urlParams.get('disease');

if (disease == "Leptospirose"){
    printDataInScreen(0);

} else if (disease == "Tétano") {
    printDataInScreen(1);

}else if (disease == "Diarreia aguda") {
    printDataInScreen(2);

}else if (disease == "Hepatite A") {
    printDataInScreen(3);

}else if (disease == "Dengue") {
    printDataInScreen(4);

}else if (disease = "Animais peçonhetos") {
    printDataInScreen(5);
}
