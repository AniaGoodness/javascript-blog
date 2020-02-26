'use strict';
{
  const titleClickHandler = function(event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);
    /* [DONE] remove class 'active' from all article links
  usuń klasę active ze wszystkich linków na liście tytułów  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }
    /* [DONE] add class 'active' to the clicked link
  dodaj klasę active do klikniętego linka */
    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active')

    /* [DONE] remove class 'active' from all articles
  usuń klasę active ze wszystkich artykułów */
    const activeArticles = document.querySelectorAll('.post.active');
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link
  z klikniętego linka weź zawartość atrybutu href, np. #article-2,*/
    const articleSelector = clickedElement.getAttribute('href');
    console.log('clickedElement');


    // eslint-disable-next-line max-len
    /* [DONE] find the correct article using the selector (value of 'href' attribute)
  znajdź na stronie element pasujący do selektora takiego,
  jak wartość atrybutu href, np. #article-2
  – czyli szukamy elementu o id="article-2",*/
    const targetArticle = document.querySelector(articleSelector)
    console.log('targetArticle');
    /* [DONE] add class 'active' to the correct article
  dodaj klasę active do znalezionego artykułu*/

    targetArticle.classList.add('active');
  };

  // zadanie ostatnie z 6. modułu
  const optArticleSelector = '.post';
  const optTitleSelector = '.post-title';
  const optTitleListSelector = '.titles';

  // eslint-disable-next-line require-jsdoc
  function generateTitleLinks() {
    console.log(generateTitleLinks);
    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    console.log('titleList');
    titleList.innerHTML = '';

    /* for each article */
    let html = '';
    const articles = document.querySelectorAll(optArticleSelector);
    for (let article of articles) {
    /* get the article id */
      const articleId = article.getAttribute('id');
      console.log('articleId');

      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log(articleTitle);
      /* get the title from the title element */

      /* create HTML of the link */
      // eslint-disable-next-line max-len
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log('linkHTML');
      /* insert link into titleList */
      // titleList.innerHTML = titleList.innerHTML + linkHTML;
      html = html + linkHTML;
    }
    titleList.innerHTML = html;
  }

  generateTitleLinks();
  const links = document.querySelectorAll('.titles a');
  console.log('links');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}
