function main2(strUser2,search){
console.log('enteres')
alert(`Welcome to ${strUser2} ,you are searching ${search}`)
fetch(`https://newsapi.org/v2/everything?sources=${strUser2}&q=${search}&apiKey=0df4ccc6d62e404db6c965c1a04a7276`)
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
    console.log('catch')
    console.log('Fetch Error :-S', err);
  });

function processData(data) {
  console.log(data.totalResults)
  if(data.totalResults==0)
  {
    alert('Not found');
    main("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0df4ccc6d62e404db6c965c1a04a7276")
  }
  var articleItems = [];

  for (let i = 0; i < data.articles.length; i++) {

    let author = data.articles[i].author;

    let title = data.articles[i].title;
    let description = data.articles[i].description;
    let artUrl = data.articles[i].url;

    var string=`<div class="author">Author: ${author}  </div><div class="title"><a href=${artUrl}>title: ${title} </a></div ><div class="description">description: ${description }</div >`;
     articleItems.push(string)

   
}
document.querySelector('.box').innerHTML=articleItems
}
}

var strUser2 ;
var search;
function test(){

  // Inorder to get the Test as value i.e "Communication"
  var sel2 = document.getElementById("soflow");
  strUser2 = sel2.options[sel2.selectedIndex].value;
  console.log(strUser2);

  }

  function answers(){

if(!strUser2){
alert('Select Source');
  }
  else{
    searchbox(strUser2);
  }
}

function searchbox(){
   search=document.getElementById('input1').value;
   if(!search)
   {
    alert('please fill search')
   } 
   else
   {
console.log(search)
    main2(strUser2,search)
   }

}
