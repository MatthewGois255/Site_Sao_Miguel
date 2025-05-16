
/* ================ Progress Bar ================ */

let progressScroll = () => {
    let
    scrollTop = document.documentElement.scrollTop,
    scrollBottom = (document.documentElement.scrollHeight - window.innerHeight),
    scrollPercent = scrollTop / scrollBottom * 100 + '%'

    // console.log(scrollTop, scrollBottom, scrollPercent)

    document.querySelector('#progress-bar').style.setProperty('--scrollAmount', scrollPercent)
}

document.addEventListener("scroll", progressScroll)

/* ================ (end) Progress Bar ================ */