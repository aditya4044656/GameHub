let getHomeButton = document.getElementsByClassName("HomePage")[0];
let getExploreButton = document.getElementsByClassName("ExplorePage")[0];
let EsportsButton = document.getElementsByClassName("E-Sports-Page")[0];
let LiveButton = document.getElementsByClassName("LiveStream")[0];
let getHomePage = document.getElementsByClassName("page1")[0];
let EsportsPage = document.getElementsByClassName("page2")[0];
let ExplorePage = document.getElementsByClassName("page3")[0];
let LivePage = document.getElementsByClassName("page4")[0];
getHomeButton.addEventListener("click", function(){
   getHomePage.style.display = "block"
   EsportsPage.style.display = "none"
   ExplorePage.style.display = "none"
   LivePage.style.display = "none"
})
EsportsButton.addEventListener("click", function(){
    getHomePage.style.display = "none"
    EsportsPage.style.display = "block"
    ExplorePage.style.display = "none"
    LivePage.style.display = "none"
})
getExploreButton.addEventListener("click", function(){
    getHomePage.style.display = "none"
    EsportsPage.style.display = "none"
    ExplorePage.style.display = "block"
    LivePage.style.display = "none"
})
LiveButton.addEventListener("click", function(){
    getHomePage.style.display = "none"
    EsportsPage.style.display = "none"
    ExplorePage.style.display = "none"
    LivePage.style.display = "block"
})