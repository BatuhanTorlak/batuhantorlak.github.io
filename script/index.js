const h2w = document.getElementsByClassName("js-align-h2w")
const w2h = document.getElementsByClassName("js-align-w2h")
const nextButton = document.getElementById("nextButton")
const body = document.getElementsByTagName("body")[0]


const Sizing = () => 
{
    for (var x = 0; x < h2w.length; x++)
    {
        h2w[x].style.width = h2w[x].clientHeight.toString() + "px";
    }

    for (var x = 0; x < w2h.length; x++)
    {
        w2h[x].style.height = w2h[x].clientWidth.toString() + "px";
    }
}

let _lastScrollTime = null
let _newScrollTimeout = false
let _scrollHandlerAvaliable = true
let _date = new Date()

body.onresize = Sizing;
document.onwheel = (e) => {
    _lastScrollTime = _date.getTime()
    if (!_newScrollTimeout && _scrollHandlerAvaliable)
    {
        _scrollHandlerAvaliable = false
        setTimeout(() => {
            let _currTime = _date.getTime()
            if (_currTime - _lastScrollTime < 100)
            {
                _newScrollTimeout = true
                setTimeout(() => {
                    _newScrollTimeout = false
                }, 500)
                alert("Şu anda yapım aşamasındadır! Lütfen başka bir zaman tekrar deneyin!")
            }
            _scrollHandlerAvaliable = true
        }, 300);
    }
}
Sizing();

nextButton.onclick = () => {
    alert("Şu anda yapım aşamasındadır! Lütfen başka bir zaman tekrar deneyin!")
}