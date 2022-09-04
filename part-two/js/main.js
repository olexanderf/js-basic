let csvField = document.getElementById('csv-field');
let textField = document.getElementById('text-field');
let btnParse = document.getElementById('btn-parse');
let resultField = document.getElementById('result-field');

function parseCSV (text) {
     text.split('\n')
         .filter(part => part.charAt(0) !== "#")
         .map((str)=>{
         })
        //  .forEach(element => {
        //     console.log(element);
        //  });
    text
    
}

btnParse.addEventListener('click', ()=>{
    parseCSV(csvField.value);
})
