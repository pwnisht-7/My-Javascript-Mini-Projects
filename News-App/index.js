const navItems = document.querySelectorAll(".nav_items li");
const button = document.querySelector('.nav_option button')
const NewsContainer = document.querySelector('.news_contents')

// button.addEventListener('click', () => {
//   const query = document.querySelector('#input_text').innerText
//   // console.log(data)
//   FetchNews(query);
//   query.innerHTML = ''
//   console.log("clicked")
// })
navItems.forEach(navitem => {
  navitem.addEventListener('click', (e) => {
    let query = e.target.innerText;
    NewsContainer.innerHTML = ''
    FetchNews(query)
  })
});
const FetchNews = async (query = "nepal") => {
  const Api_Url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=e346fd48786d4145a063800d38b40b2d`
  try {
    let Response = await fetch(Api_Url);
    let NewsData = await Response.json()
    let Articles = NewsData.articles
    BindData(Articles)
  } catch (error) {
    console.log('Failed To Fetch News', error)
  }
}

function BindData(Articles) {
  Articles.forEach(Article => {
    if (!Article.urlToImage) return ;
   else{
    // console.log(Article)
    const article = document.createElement('div')
    article.setAttribute("class","news_articles")

    const Image = document.createElement('div');
    Image.setAttribute("class","news_image")
    const image = document.createElement('img')
    image.setAttribute("src",`${Article.urlToImage}`)
    image.setAttribute("alt","Logo")
    Image.appendChild(image)

    const Description = document.createElement('div');
    Description.setAttribute("class","news_description")
    const para = document.createElement('p')
    para.setAttribute("class","news")
    para.innerText = Article.description
    Description.appendChild(para)

    const title = document.createElement('div')
    title.setAttribute("class","news_title")
    const heading = document.createElement('h1')
    heading.innerText = Article.title
    title.appendChild(heading)

    const newsDescription = document.createElement('div')
    newsDescription.setAttribute("class","news_detail")

    const url = document.createElement('div')
    url.setAttribute("class","url")
    const anchor = document.createElement("a")
    anchor.innerText = "Read Full Article"
    anchor.href = Article.url
    url.appendChild(anchor)


    newsDescription.appendChild(url)
    const author = document.createElement('div')
    author.setAttribute("class","news_publisher")
    const sheading = document.createElement('h1')
    sheading.setAttribute("class","news_author") 
    sheading.innerText = Article.source.name
    author.appendChild(sheading)

    const date =  document.createElement('h1')
    date.setAttribute("class","news_date")
    date.innerText = Article.publishedAt
    author.appendChild(date)
    newsDescription.appendChild(author)

    article.appendChild(Image);
    article.appendChild(title);
    article.appendChild(Description);
    article.appendChild(newsDescription);;
    NewsContainer.appendChild(article)
   }
  });
}

