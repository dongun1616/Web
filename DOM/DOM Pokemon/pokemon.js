// 포켓몬 이미지 생성하고 순서대로 띄우기
const container = document.querySelector('#container')
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for (let i = 1; i < 152; i++) {
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    pokemon.classList.add("pokemon")

    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`

    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon)
}