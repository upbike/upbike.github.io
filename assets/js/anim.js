//Clear console
console.clear();

//Définir les émojis
const emoji = ['👾', '🤖','👻','💩','👩‍💻','👨‍💻','🤙','🖖','🤘'];
function randomEmoji() {
  let random = Math.floor(Math.random() * emoji.length);
  return emoji[random];
}

//Définir les prénoms
const teamprenom = ['Pascal FROMENTEL', 'Keany Vy KHUN'];
function randomTeam() {
  let random = Math.floor(Math.random() * teamprenom.length);
  return teamprenom[random];
}

//Welcome Message
const welcome = [
	'color: gray',
  'font-size: 15px'
  ].join(';');
console.log('%cUpbike', welcome, randomEmoji());

//Team prénoms
const team = [
	'color: yellow',
  'font-size: 15px'
  ].join(';');
console.log('%c#'+ randomTeam() +'', team);

//Message d'avertissement !!!
const style2 = [
	'color: red',
  'font-size: 30px'
  ].join(';');
console.log('%cAttention !!!', style2);

//Message de prévention
const style3 = [
	'color: blue',
  'font-size: 20px'
  ].join(';');
console.log('%cCette fonctionnalité de navigateur est réservée aux développeurs. Veuillez ne pas copier-coller de code ni exécuter de scripts ici. Cela pourrait compromettre votre compte Upbike.', style3);

//Message en savoir plus
console.log('%cPour plus d\'informations, https://en.wikipedia.org/wiki/Self-XSS', style3);

//Mentions (Keany Vy KHUN)
const style4 = [
	'color: black',
  'font-size: 15px'
  ].join(';');
console.log('');
console.log('%cAuteur: Keany Vy KHUN', style4);
