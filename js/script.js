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
  const optArticleTagsSelector = '.post-tags .list';
  const optArticleAuthorSelector = 'author-name';

  // eslint-disable-next-line require-jsdoc
  function generateTitleLinks(customSelector = '') {
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

  generateTitleLinks('[data-tags~="' + tag + '"]');
  const links = document.querySelectorAll('.titles a');
  console.log('links');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
  // eslint-disable-next-line require-jsdoc
  function generateTags() {
  /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    /* START LOOP: for every article: */
    for (let article of articles) {
    /* find tags wrapper */
      const titleList = article.querySelector(optArticleTagsSelector);
      console.log('titleList');
      /* make html variable with empty string */
      let html = '';
      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);
      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);
      /* START LOOP: for each tag */
      for (let tag of articleTagsArray) {
        console.log(tag);
        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + articleTagsArray + '">' + tag + '</a></li>';
        /* add generated code to html variable */
        html = html + linkHTML;
      /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;
      /* END LOOP: for every article: */
    }
    generateTags();

    // eslint-disable-next-line require-jsdoc
    function tagClickHandler(event) {
      /* make new constant named "clickedElement" and give it the value of "this" */
      const clickedElement = this;
      /* make a new constant "href" and read the attribute "href" of the clicked element */
      const href = clickedElement.getAttribute('href');
      /* make a new constant "tag" and extract tag from the "href" constant */
      const tag = href.replace('#tag-', '');
      /* find all tag links with class active */
      const tagActiveLinks = linkHTML.querySelectorAll('.active')
      /* START LOOP: for each active tag link */
      for (let tagActiveLink of tagActiveLinks) {
      /* remove class active */
        tagActiveLink.classList.remove('active');
      /* END LOOP: for each active tag link */
      }
      /* find all tag links with "href" attribute equal to the "href" constant */
      const allTags = document.querySelectorAll('a[href^="' + href + '"]');
      /* START LOOP: for each found tag link */
      for (let allTag of allTags) {
      /* add class active */
        allTag.classList.add('active'); 
        /* END LOOP: for each found tag link */
      }
      /* execute function "generateTitleLinks" with article selector as argument */
      generateTitleLinks('[data-tags~="' + tag + '"]');
    }
  
    function addClickListenersToTags() {
 /* find all links to tags */
     const allTagLinks = document.querySelectorAll('a[href^="' + href + '"]');
    /* START LOOP: for each link */
    for (let allTagLink of allTagLinks) {
      /* add tagClickHandler as event listener for that link */
      allTagLinks.addEventListener('click', function () {
        const links = document.querySelectorAll('.post-tags .list');
        console.log('links:', links);
      });
    }
    /* END LOOP: for each link */
    }
  }
  addClickListenersToTags();
 

  function generateAuthors() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);;
  console.log(customSelector);
  for (let article of articles) {
      const titleList = article.querySelector(optArticleTagsSelector);
      console.log('titleList');
  addClickListenersToAuthors()

  authorClickHandler()

  }
 generateAuthors()
  } 
}