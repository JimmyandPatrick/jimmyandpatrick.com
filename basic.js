var re = 1;
var ln = 1;
alert('Make sure to include https and www');
function redir(){
if (re === 1){
window.open('https://www.youtube.com/channel/UCMyOj6fhvKFMjxUCp3b_3gA');
}
re += 1;
}
function submit(){
if (ln === 1){
window.open('https://www.youtube.com/c/Lynja');
}
if (ln === 2){
window.open('https://youtube.com/juicewrldofficial');
}
if (ln === 3){
var inp = document.getElementById('search').value;
window.open(inp);
}
ln += 1;
}