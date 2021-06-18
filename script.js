// console.log(1)

// setTimeout(() => {
// 	console.log(2)
// }, 1000)

// setInterval(() => {
// 	const now = new Date();
// 	console.log(now);
// }, 1000);

// console.log(3);
// function adder(x,y, callback){
// 	const answer = x + y;
// 	return callback(answer);
// }

// function sendAlert(x){
// 	alert(`The answer is ${x}`);
// }

// adder(5,8, sendAlert);
function getPokemon() {
  document.querySelector("ol").innerHTML = "";
  $.getJSON(`https://pokeapi.co/api/v2/pokemon/1`, (data) => {
    document.querySelector("ol").innerHTML += `<p>1. ${data.name}</p>`;
    $.getJSON(`https://pokeapi.co/api/v2/pokemon/2`, (data) => {
      document.querySelector("ol").innerHTML += `<p>2. ${data.name}</p>`;
      $.getJSON(`https://pokeapi.co/api/v2/pokemon/3`, (data) => {
        document.querySelector("ol").innerHTML += `<p>3. ${data.name}</p>`;
        $.getJSON(`https://pokeapi.co/api/v2/pokemon/4`, (data) => {
          document.querySelector("ol").innerHTML += `<p>4. ${data.name}</p>`;
          $.getJSON(`https://pokeapi.co/api/v2/pokemon/5`, (data) => {
            document.querySelector("ol").innerHTML += `<p>5. ${data.name}</p>`;
            $.getJSON(`https://pokeapi.co/api/v2/pokemon/6`, (data) => {
              document.querySelector(
                "ol"
              ).innerHTML += `<p>6. ${data.name}</p>`;
            });
          });
        });
      });
    });
  });
}
document.querySelector("#button").addEventListener("click", getPokemon);
