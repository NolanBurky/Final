var names = [];
var imgs = [];
var date = [];
var desc = [];
var request = new XMLHttpRequest();
request.open('GET', 'https://api.themoviedb.org/3/tv/popular?api_key=c11fd57ad4297fc53a2e40a2080ecbf7&language=en-US&page=1', true);
request.onload = function(){
    var data = JSON.parse(this.response)
    console.log(data);  
    //var names = [];
    names.push(data.results[0].name);
    names.push(data.results[1].name);
    names.push(data.results[2].name);
    names.push(data.results[3].name);
    names.push(data.results[4].name);
    names.push(data.results[5].name);
    imgs.push(data.results[0].backdrop_path);
    imgs.push(data.results[1].backdrop_path);
    imgs.push(data.results[2].backdrop_path);
    imgs.push(data.results[3].backdrop_path);
    imgs.push(data.results[4].backdrop_path);
    imgs.push(data.results[5].backdrop_path);
    date.push(data.results[0].first_air_date);
    date.push(data.results[1].first_air_date);
    date.push(data.results[2].first_air_date);
    date.push(data.results[3].first_air_date);
    date.push(data.results[4].first_air_date);
    date.push(data.results[5].first_air_date);
    desc.push(data.results[0].overview);
    desc.push(data.results[1].overview);
    desc.push(data.results[2].overview);
    desc.push(data.results[3].overview);
    desc.push(data.results[4].overview);
    desc.push(data.results[5].overview);
}
request.send();
console.log(names);
console.log(imgs);
console.log(date);
console.log(desc);