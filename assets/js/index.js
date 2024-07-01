const buttonSend = document.getElementsByClassName('send')[0];


buttonSend.addEventListener('click', () => {
    
    const checkboxes = document.querySelectorAll('input[name="disease"]:checked'); 

    let checkedCheckBoxes = []; 

    checkboxes.forEach(checkbox => {
        checkedCheckBoxes.push(checkbox.id)
    });



    fetchDisease(checkedCheckBoxes);


})



const fetchDisease = (checkedCheckBoxes) => {
   
    let newcheckedCheckBoxes = checkedCheckBoxes.map(item => {
        return item.replace(/-/g, ' ')
    })

    fetch('../../doencas.json')
    .then(response => response.json())
    .then(data => {
        
        getDisease(data, newcheckedCheckBoxes);
    })  
    
}

const getDisease = (data, symptoms) => {

    let leptospirose = 0; 
    let tetano = 0; 
    let diarreiaAguda = 0;
    let hepatiteA = 0; 
    let dengue = 0;
    let animaisPeconhentos = 0;

    for(let i=0; i<symptoms.length; i++) {

        //check if the user has Leptospirose symptom
        if (data.Disease[0].symptom.includes(symptoms[i])) {
            leptospirose++;
        }

        // check if the user has tetano symptom
        if (data.Disease[1].symptom.includes(symptoms[i])) {
            tetano++;
        }

        //check if the user has Diarreia aguda symptom
        if (data.Disease[2].symptom.includes(symptoms[i])) {
            diarreiaAguda++;
        }

        //check if the user has Hepatite A symptom
        if (data.Disease[3].symptom.includes(symptoms[i])) {
            hepatiteA++;
        }

        //check if the user has Dengue symptom
        if (data.Disease[4].symptom.includes(symptoms[i])) {
            dengue++;
        }

        //check if the user has Animais Peçonhentos symptom
        if (data.Disease[5].symptom.includes(symptoms[i])) {
            animaisPeconhentos++;
        }
    }

    // Check the disease with the most symptoms

    let diseases = [leptospirose, tetano, diarreiaAguda, hepatiteA, dengue, animaisPeconhentos]

    let greatestValue = -Infinity; 
    let greatestIndex = -1;

    for (let i=0; i<diseases.length; i++) {
        if (diseases[i] > greatestValue) {
            greatestValue = diseases[i];

            greatestIndex = i;
        }
    }

    if (greatestIndex == 0) {
        //Leptospirose

        let disease = "Leptospirose";
        let url = `../../result.html?disease=${encodeURIComponent(disease)}`;

        window.location.href = url;
    
    } 

    if (greatestIndex == 1) {
        //Tétano

        let disease = "Tétano";
        let url = `../../result.html?disease=${encodeURIComponent(disease)}`;

        window.location.href = url;
    }

    if (greatestIndex == 2) {
        //Diarreia aguda
    
        let disease = "Diarreia aguda";
        let url = `../../result.html?disease=${encodeURIComponent(disease)}`;

        window.location.href = url;
    }

    if (greatestIndex == 3) {
        //Hepatite A

        let disease = "Hepatite A";
        let url = `../../result.html?disease=${encodeURIComponent(disease)}`;

        window.location.href = url;
    }

    if (greatestIndex == 4) {
        //Dengue
        
        let disease = "Dengue";
        let url = `../../result.html?disease=${encodeURIComponent(disease)}`;

        window.location.href = url;
    }

    if (greatestIndex == 5) {
        //Animais peçonhentos
        
        let disease = "Animais peçonhetos";
        let url = `../../result.html?disease=${encodeURIComponent(disease)}`;

        window.location.href = url;
    }

}




