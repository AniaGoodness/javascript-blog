'use strict'

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);
  /* [DONE] remove class 'active' from all article links
  usuń klasę active ze wszystkich linków na liście tytułów  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
  }
  /* [IN PROGRESS] add class 'active' to the clicked link
  dodaj klasę active do klikniętego linka */
  console.log('clickedElement:', clickedElement);
  for(let clickedElement of clickedElements){
  clickedElement.classList.add('active')
  }
  /* [DONE] remove class 'active' from all articles
  usuń klasę active ze wszystkich artykułów */
  const activeArticles = document.querySelectorAll('.post-content p.active');

  for(let activeArticle of activeArticles){
  activeLink.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link
  z klikniętego linka weź zawartość atrybutu href, np. #article-2,*/
  const articleSelector = document.clickedElement("href");
  var a = href.getAttribute("article-1");

  /* find the correct article using the selector (value of 'href' attribute)
  znajdź na stronie element pasujący do selektora takiego,
  jak wartość atrybutu href, np. #article-2
  – czyli szukamy elementu o id="article-2",*/



  /* add class 'active' to the correct article
  dodaj klasę active do znalezionego artykułu*/
  for(let activeArticle of activeArticles){
  activeLink.classList.add('active');
  }

}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
