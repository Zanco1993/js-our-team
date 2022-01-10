function newcard(container, member) {
  container.innerHTML += `
  <div class="team-card">
    <div class="card-image">
      <img
        src="./img/${member.image}" 
        alt="member"
      />
    </div>
    <div class="card-text">
      <h3>${member.name}</h3>
      <p>${member.role}</p>
    </div>
  </div>
  `
}


const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];


/*
 Viene fornito un layout di base e un file js in cui è definito un array di oggetti che rappresentano i membro del team.
 Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
 Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.
*/
  
// richiamo il mio container per poi aggiugere i vari membri del team

const teamContainer = document.querySelector(".team-container");
const teamCard = document.querySelector(".team-card");
const cardImage = document.querySelector(".card-image");


// metodo innerHtml funzionante

for(let i = 1; i < team.length; i++) {
  
  newcard(teamContainer, team[i]);

}



//------------------------------------------------------------------

// parte bonus

// seleziono ID button dell'html
const addMember = document.getElementById("addMemberButton");

// aggiungo il comando di attesa del click 
// quando verrà premuto andrò a prendermi valori dei campi
// Name Role Image
// ed aggiungerò la carta nuova 

addMember.addEventListener("click", function(){
  let newMemberName = document.getElementById("name").value
  let newMemberRole = document.getElementById("role").value
  let newMemberImage = document.getElementById("image").value

  const newMember = {
    "name": newMemberName,
    "role": newMemberRole,
    "image": newMemberImage
  };

 // indico una condizione che mi blocchi l'aggiunta del nuovo membro 
 // se manca anche solo un dato
  if(newMemberName === "" || newMemberRole === "" || newMemberImage === "") {
    alert("Attenzione, valori non inseriti correttamente!!!")
    return false;
  }

  // push del nuovo dato acquisito
  team.push(newMember);
  // richiamo la funzione per la creazione della carta inserendo i nuovi
  // dati acquisiti
  newcard(teamContainer, newMember)

})
