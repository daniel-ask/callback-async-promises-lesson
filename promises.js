// function add(x, y) {
//   return new Promise((resolve, reject) => {
//     const answer = x + y;

//     if (isNaN(answer)) {
//       reject("WRONG");
//     }

//     resolve(answer);
//   });
// }
// let something = add(5, 7);
// something.then((data) => console.log(data))
// add(5, 6)
// 	.then((data) => add(data, 'hello'))
// 	.then((data) => add(data,1))
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));
// pending
// console.log(newPromise)
// fulfilled/rejected
// newPromise
// .then(data =>  console.log(data))
// .catch(err =>  console.log(err) )

// console.log(newPromise.then((data) => {
// 	alert(data);
// }));

function getPokemonName(num) {
  return new Promise((resolve, reject) => {
    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${num}`, (data) => {
      if (data.name) {
        resolve(data.name);
      }
      reject(new Error("That pokemon has no name"));
    });
  });
}

const pokemonList = document.querySelector("ol");
const pokemonButton = document.querySelector("#button");

const pokemonPromises = [];

pokemonButton.addEventListener("click", () => {
  for (let i = 1; i <= 6; i++) {
    pokemonPromises.push(getPokemonName(i));
  }

  Promise.all(pokemonPromises).then((pokemons) => {
    pokemons.forEach((value, index) => {
      pokemonList.innerHTML += `<li> ${value} </li>`;
    });
  });
});

pokemonButton.addEventListener('click',() => {
	getPokemonName(1).then(data => {
		pokemonList.innerHTML += `<li>${data}</li>`;
		return getPokemonName(2)
	})
	.then(data => {
		pokemonList.innerHTML += `<li>${data}</li>`;
		return getPokemonName(3)
	})
	.then(data => {
		pokemonList.innerHTML += `<li>${data}</li>`;
		return getPokemonName(4)
	})
	.then(data => {
		pokemonList.innerHTML += `<li>${data}</li>`;
		return getPokemonName(5)
	})
	.then(data => {
		pokemonList.innerHTML += `<li>${data}</li>`;
		return getPokemonName(6)
	})
	.then(data => {
		pokemonList.innerHTML += `<li>${data}</li>`;
	})
})
