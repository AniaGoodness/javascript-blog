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
  /* [DONE] add class 'active' to the clicked link
  dodaj klasę active do klikniętego linka */
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active')

  /* [IN PROGRESS] remove class 'active' from all articles
  usuń klasę active ze wszystkich artykułów */
  const activeArticles = document.querySelectorAll('.post p.active');
  for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link
  z klikniętego linka weź zawartość atrybutu href, np. #article-2,*/
  const articleSelector = clickedElement.getAttribute("href");
  console.log('clickedElement')

  /* find the correct article using the selector (value of 'href' attribute)
  znajdź na stronie element pasujący do selektora takiego,
  jak wartość atrybutu href, np. #article-2
  – czyli szukamy elementu o id="article-2",*/
  const questArticle = document.querySelector(articleSelector);



  /* add class 'active' to the correct article
  dodaj klasę active do znalezionego artykułu*/

  questArticle.classList.add('active');


}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
