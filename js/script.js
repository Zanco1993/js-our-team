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

// attraverso un ciclo for, "cammino" nella lista per quanti sono gli elementi

// primo metodo non concluso

// for(let i = 0; i < team.length; i++) {

//   const name = document.createElement("div");
//   name.className = 'team-card';
//   teamContainer.append(name);

//   const card = document.createElement("div");
//   card.className = 'card-image';
//   teamCard.append(card);

//   const image = document.createElement("img");
//   image.src = team[i].image;
//   cardImage.append(image);

// }


// secondo metodo innerHtml
for(let i = 0; i < team.length; i++) {
  
  teamContainer.innerHTML += `
  <div class="team-card">
    <div class="card-image">
      <img
        src="./img/${team[i+1].image}" 
        alt="member"
      />
    </div>
    <div class="card-text">
      <h3>${team[i+1].name}</h3>
      <p>${team[i+1].role}</p>
    </div>
  </div>
  `
}

// aggiunto il +1 perchè volevo che rimanesse la carta iniziale già scritta nell'html
