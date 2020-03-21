'use strict';
const optArticleSelector = '.post';
const optTitleSelector = '.post-title';
const optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list';
const optArticleAuthorSelector = '.post-author';
const optTagsListSelector = '.tags.list';
const optAuthorsListSelector = '.authors.list';
const optCloudClassCount = 5;
const optCloudClassPrefix = 'tag-size-';
{
  const titleClickHandler = function(event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    /* [DONE] remove class 'active' from all article links
  usuń klasę active ze wszystkich linków na liście tytułów  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }
    /* [DONE] add class 'active' to the clicked link
  dodaj klasę active do klikniętego linka */
    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');  
    /* [DONE] remove class 'active' from all articles
  usuń klasę active ze wszystkich artykułów */
    const activeArticles = document.querySelectorAll('.post.active');
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active'); 
      /* [DONE] get 'href' attribute from the clicked link
  z klikniętego linka weź zawartość atrybutu href, np. #article-2,*/
      const href = clickedElement.getAttribute('href');
      console.log(href);
      /* [DONE] find the correct article using the selector (value of 'href' attribute)
      znajdź na stronie element pasujący do selektora takiego,
      jak wartość atrybutu href, np. #article-2
      –  czyli szukamy elementu o id="article-2",*/
      const findArticle = document.querySelector(href);
      console.log(findArticle);
      /* [DONE] add class 'active' to the correct article
      dodaj klasę active do znalezionego artykułu*/
      findArticle.classList.add('active');
    }
    const links = document.querySelectorAll('.titles a');
    for(let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }
  /* ostatnie zadanie z 6. modułu */
  function generateTitleLinks(customSelector = '') {
    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    /* for each article */
    let html = '';
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    for (let article of articles) {
    /* get the article id */
      const articleId = article.getAttribute('id');
      console.log(articleId);
      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log(articleTitle);
      /* get the title from the title element */
      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);
      /* insert link into titleList */
      // titleList.innerHTML = titleList.innerHTML + linkHTML;
      html = html + linkHTML;
    }
    titleList.innerHTML = html;
  }
  generateTitleLinks();
  const links = document.querySelectorAll('.titles a');
  console.log(links);
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
  /* [NEW] tag */
  function calculateTagsParams(tags) {
    const params = {min: 99999, max: 0};
      for(let tag in tags){
      if (tags[tag] > params.max) {
        params.max = tags[tag];
      }
      if (tags[tag] < params.min) {
        params.min = tags[tag];
      }
    }
    return params;
    console.log(tag + ' is used ' + tags[tag] + ' times');
    console.log(params);
    for (let tag in tags) {
      console.log(tag + 'is used' + tags[tag] + 'times');
    }
  }
  function calculateTagClass(count, params) {
    const normalizedCount = count - params.min;
    const normalizedMax = params.max - params.min;
    const percentage = normalizedCount / normalizedMax;
    const classNumber = Math.floor( ( (count - params.min) / (params.max - params.min) ) * optCloudClassCount + 1 );
    console.log(classNumber);
    return optCloudClassPrefix, classNumber;
  }
  function generateTags() {
    /* [NEW] create a new variable allTags with an empty array */
    let allTags = {};
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    /* START LOOP: for every article: */
    for (let article of articles) {
    /* find tags wrapper */
    const tagWrapper = article.querySelector(optArticleTagsSelector);
      /* make html variable with empty string */
      let html = '';
      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);
      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
      /* START LOOP: for each tag */
      for (let tag of articleTagsArray) {
        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        /* add generated code to html variable */
        html = html + linkHTML;
        /* [NEW] check if this link is NOT already in allTags */
        if (!allTags[tag]) {
        /* [NEW] add generated code to allTags array */
          allTags[tag] = 1;
        } else {
          allTags[tag]++;
        }
      /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagWrapper.innerHTML = html;
      /* END LOOP: for every article: */
    }
    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector('.tags');
    /* [NEW] */
    const tagsParams = calculateTagsParams(allTags);
    console.log('tagsParams:', tagsParams);
    /* [NEW] create variable for all links HTML code */
    let allTagsHTML = '';
    /* [NEW] START LOOP: for each tag in allTags: */
    for (let tag in allTags) {
      /* [NEW] generate code of a link and add it to allTagsHTML */
      //allTagsHTML += tag + '(' + allTags[tag] + ')';
      const tagLinkHTML = '<li class="tag-size-' + calculateTagClass(allTags[tag], tagsParams) + '">' + tag + '</li>';
      console.log('tagLinkHTML:', tagLinkHTML);
      allTagsHTML += tagLinkHTML;
      /* [NEW] END LOOP: for each tag of allTags: */
    }
    /* [NEW] add HTML from allTagsHTML to tagList */
    tagList.innerHTML = allTagsHTML;
    console.log(allTags);
  }
  generateTags();
  function tagClickHandler(event) {
    /* prevent default action for this event */
    event.preventDefault();
      /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
      /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);
      /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    console.log(tag);
      /* find all tag links with class active */
    let activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
      /* START LOOP: for each active tag link */
    for (let activeTag of activeTags) {
      /* remove class active */
      activeTag.classList.remove('active');
      /* END LOOP: for each active tag link */
    }
      /* find all tag links with "href" attribute equal to the "href" constant */
    const allTags = document.querySelectorAll('a[href^="' + href + '"]');
      /* START LOOP: for each found tag link */
    for (const tag of allTags) {
      /* add class active */
      tag.classList.add('active'); 
        /* END LOOP: for each found tag link */
    }
      /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
  function addClickListenersToTags() {
 /* find all links to tags */
    const links = document.querySelectorAll('optArticleTagsSelector');
    /* START LOOP: for each link */
    for (let link of links) {
      /* add tagClickHandler as event listener for that link */
      link.addEventListener('click', tagClickHandler);
      console.log(link);
      }
    }
  addClickListenersToTags();
  }
  /* [NEW] author */
  function calculateAuthorsParams(authors) {
    const params = {min: 99999, max: 0};
      for(let author in authors){
      if (authors[author] > params.max) {
        params.max = authors[author];
      }
      if (authors[author] < params.min) {
        params.min = authors[author];
      }
    }
    return params;
    console.log(author + 'is used' + authors[author] + 'times');
    console.log(params);
    for (let author in authors) {
      console.log(author + 'is used' + authors[author] + 'times');
    }
  }
  function calculateAuthorClass(count, params) {
    const normalizedCount = count - params.min;
    const normalizedMax = params.max - params.min;
    const percentage = normalizedCount / normalizedMax;
    const classNumber = Math.floor( ( (count - params.min) / (params.max - params.min) ) * optCloudClassCount + 1 );
    console.log(classNumber);
    return optCloudClassPrefix, classNumber;
  }
  function generateAuthors() {
    /* [NEW] */
    let allAuthors = {};
  //przypisujemy wszystkie elementy pasujące do zmiennej optArticleSelector do zmiennej articles
  const articles = document.querySelectorAll(optArticleSelector);
  //robimy pętle i przechodzimy po każdym pojedynczym article
  for (let article of articles) {
    //przypisujemy do zmiennej authorWrapper wszystkie elementy o klasie ze zmiennej optArticleAuthorSelector znajdujące się w article
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    console.log('authorWrapper: ' + authorWrapper);
    //tworzymy nową zmienną html która jest teraz pusta ''
    //przypisujemy do zmiennej articleAuthor atrybut 'data-author' z danego article
    const articleAuthor = article.getAttribute('data-author');
    console.log(articleAuthor);
    let html = '';
    //console.logujemy articleAuthor żeby zobaczyć czy mamy wyjętego dobrze autora
    //const articleAuthorArray = articleAuthor.split('');
    //for (let articleAuthor of articleAuthorArray) {
      //tworzymy zmienną linkHTML do której zapisujemy nasz html <p class="post-author">by '+ articleAuthor +'</p>
      const linkHTML = '<p class="post-author"><a href="#author-' + articleAuthor +'">by '+ articleAuthor +'</a></p>';
      //dodajemy do zmiennej html nasz linkHTML +=
      html = linkHTML + html;
      //console.logujemy sobie nasz html
      console.log(html)
      if (!allAuthors.hasOwnProperty(articleAuthor)) {
       allAuthors[articleAuthor] = 1;
      } 
      else {
        allAuthors[articleAuthor]++;
      }
      authorWrapper.innerHTML = html;
    //wrzucamy do naszego authorWrapper nasz html za pomocą .innerHTML = 
    //UWAGA - kopiujesz kod z funkcji wyżej i nie zmieniasz nazw zmiennych, poniżej była zła nazwa
    }
    const authorList = document.querySelector('.authors');
    const authorsParams = calculateAuthorsParams(allAuthors);
    console.log('authorsParams:', authorsParams);
    let allAuthorsHTML = '';
    for (let author in allAuthors) {
      allAuthorsHTML += '<li><a href="#author-' + author + '">' + author + '(' + allAuthors[author] + ')</li>'; 
    }
    authorList.innerHTML = allAuthorsHTML;
    console.log(allAuthors);
}
generateAuthors();
function authorClickHandler(event) {
  event.preventDefault();
  //zapisujemy this w nowej zmiennej clickedElement
  const clickedElement = this;
  //do nowej zmiennej href zapisujemy atrybut href z clickedElement
  const href = clickedElement.getAttribute('href');
  //tworzymy zmienną author i zapisuujemy w niej wartość href bez początkowego '#author-'
  const author = href.replace('#author-');
  console.log(author);
  //szukamy aktywnych autorów za pomocą 'a.active[href^="#author-"]' i zapisujemy ich do zmiennej activeAuthors
  let activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');
  //przechodzimy pętlą po naszych activeAuthors i z każdego usuwamy klasę active
  for (let activeAuthor of activeAuthors) {
    activeAuthor.classList.remove('active');
    }
  //tworzymy nową zmienną allAuthors i zapisujemy do niej wszystkie linki pasujące do schematu 'a[href^="' + href + '"]'
  const allAuthors = document.querySelectorAll('a[href^="' + href + '"]');
  //robimy pętle i każdemu z autorow nadajemy klasę active 
  for (allAuthor of allAuthors) {
    allAuthor.classList.add('active');
    }
  //generujemy listę tytułów dla '[data-author="' + author + '"]'
  generateTitleLinks('[data-author~="' + author + '"]');
  function addClickListenersToAuthors(){
  //przypisujemy wszystkie elementy pasujące do zmiennej optArticleAuthorSelector do zmiennej links
  const links = document.querySelectorAll('optArticleAuthorsSelector');
  //robimy pętle i dla każdego elementu link dodajemy addEventListener wywołujący funkcje authorClickHandler
  for (let link of links) {
    link.addEventListener('click', authorClickHandler);
    console.log(link);
   }
  }
addClickListenersToAuthors();
}
}