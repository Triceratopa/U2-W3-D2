// catturo elementi dall'html
const save = document.getElementById("save");
const remove = document.getElementById("remove");
const form = document.querySelector("form");
const p = document.querySelector("p");
//definiamo la chiave che viene utilizzata per salvare e recuperare i dati
const localStorageKey = "nome";
// ora verifico se estiste un elemento salvato nel local storage
// se c'è è convertito in un array
// se no si crea un array vuoto
let localArr 
if(localStorage.getItem(localStorageKey)){
    localArr=JSON.parse(localStorage.getItem(localStorageKey))
} else{
    localArr=[]
}
//uso un if per controllare l'array che mi si è formato nel local
//se ce ne è uno gli dico di mostrare nel p l'ultimo 
if (localArr.length > 0) {
  let lastNameIndex = localArr.length - 1;
  p.innerHTML = `${localArr[lastNameIndex]}`;
}
//creo la funzione per salvare un nome nuovo richiamo l'input con il nome
// in questo modo si salva il valore
const saveFnc = () => {
  const nome = document.getElementById("nome").value
//un nome deve avere più di un carattere
  if (nome.length > 1) {
    //pusho il nome nell'array dello storage
    localArr.push(nome)
//con setItem salvo il nome come stringa poichè js va in tilt con gli array
//quindi uso json
    localStorage.setItem(localStorageKey, JSON.stringify(localArr))
// mostro  l'ultimo nome nell'elemento p dell'html
    let lastNameIndex = localArr.length - 1;
    p.innerHTML = `${localArr[lastNameIndex]}`
    form.reset() // reset mi riporta l'input vuoto
  }
};
// creo la funzione per cancellare la memoria dell local
const removeFnc = () => {
  localStorage.removeItem(localStorageKey) //removeItem rimuove gli elementi
  localArr = [] // mi ritorna l'array vuoto
  p.innerText = "" //in questo modo non mostra più l'ultimo nome
}

form.addEventListener("submit", (e) => {
  e.preventDefault() // blocca il comportamento di default del form
  saveFnc() //richiamo la funzione per salvare il nome
});

remove.addEventListener("click", removeFnc)
