
function main(url){
fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

   
      response.json().then(function(data) {
        processData(data)
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

function processData(data) {
  var articleItems = [];

  for (let i = 0; i < data.articles.length; i++) {

    let author = data.articles[i].author;

    let title = data.articles[i].title;
    let description = data.articles[i].description;
    let artUrl = data.articles[i].url;

    var string=`<div class="author">Author: ${author}  </div><div class="title">title: <a href=${artUrl}>${title}</a> </div ><div class="description">description: ${description }</div >`;
articleItems.push(string);

   

}
 document.querySelector('.box').innerHTML=articleItems
}

}
/*  var id=document.getElementById('bbc')
  console.log(id)
  var id2=document.getElementById('abp')*/

function clicking1(){


  console.log('entered')
 alert('Welcome to BBC-NEWS')
  let url="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0df4ccc6d62e404db6c965c1a04a7276"
  main(url)

  

}
function clicking2(){
  alert('Welcome to CNN')
let url="https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=0df4ccc6d62e404db6c965c1a04a7276"
  main(url)

}
function clicking3(){
  alert('Welcome to BCC SPORT')
let url="https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=0df4ccc6d62e404db6c965c1a04a7276"
  main(url)


}
function clicking4(){
   alert('Welcome to ESPN')
let url="https://newsapi.org/v2/top-headlines?sources=espn&apiKey=0df4ccc6d62e404db6c965c1a04a7276"
  main(url)
 

}
function clicking5(){
    alert('Welcome to BUSINESS-INSIDER')
let url="https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=0df4ccc6d62e404db6c965c1a04a7276"
  main(url)


}
function clicking6(){
  alert('Welcome to BUZZFEED')
let url="https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=0df4ccc6d62e404db6c965c1a04a7276"
  main(url)


}
function clicking7(){
  alert('Welcome to CNBC')
let url="https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=0df4ccc6d62e404db6c965c1a04a7276"
  main(url)
  

}
function clicking8(){
   alert('Welcome to ABC-NEWS')
let url="https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=0df4ccc6d62e404db6c965c1a04a7276"
  main(url)


}
