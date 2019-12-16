$(document).ready(function () {
    var emptyx = 0;
    var emptyy = 0;
    var i = 30;
    let timer = null;
    init = function() {
        var divs = $("div#puzzlearea").children();
        var i = 0;
        var x;
        var y;
        $("#shufflebutton").bind("click", shuffle);
        $.each(divs, function (idx, val) {
            x = ((i % 4) * 100) ;
            y = (Math.floor(i / 4) * 100) ;
            $(val).addClass("puzzlepiece");
            $(val).css({"background-image": "url(imgs/background.jpg)", top: y + "px", left: x+"px", "background-position": -x + 'px ' + (-y) + 'px'});
            $(val).attr("x", x);
            $(val).attr("y", y);
            $(val).hover(function () {
                if(moveable(this, 0, 0) != false)
                {
                    $(this).addClass("movablepiece");
                }
                else
                {
                    $(this).removeClass("movablepiece");
                }
            })
            $(val).click(function () {
                move(this);
            })
            i++;
        });
        emptyx = x + 100;
        emptyy = y;
    };
    var moveable = function (tale, x, y) {
        if(tale != null)
        {
            x = parseInt($(tale).attr("x"));
            y = parseInt($(tale).attr("y"));
        }
        if((x > emptyx && (x - 100 == emptyx && y == emptyy)) || (x < emptyx && (x + 100 == emptyx && y == emptyy))) {
            return "x";
        }
        if((y > emptyy && (y - 100 == emptyy && x == emptyx)) || (y < emptyy && (y + 100 == emptyy && x == emptyx))) {
            return "y";
        }
        return false;
    }
    var move = function(tale) {
        var x = parseInt($(tale).attr("x"));
        var y = parseInt($(tale).attr("y"));
        var tmp;
        if (moveable(null, x, y) == "x") {
            //move horizontal;
            tmp = x;
            x = emptyx;
            emptyx = tmp;
        } else if (moveable(null, x, y) == "y") {
            //move vertical;
            tmp = y;
            y = emptyy;
            emptyy = tmp;
        }
        $(tale).animate({
            top: y + "px",
            left: x + "px",
            "background-position": -x + 'px ' + (-y) + 'px'
        }, 200)
        //$(tale).css({top: y + "px", left: x+"px", "background-position": -x + 'px ' + (-y) + 'px'});
        $(tale).attr("x", x);
        $(tale).attr("y", y);
    }
    var shuffle = function () {
        if(timer == null) {
            timer = setInterval(doShuffle, 500);
        }
        else
        {
            clearInterval(timer)
        }
    }
    var doShuffle = function() {
        if(i == 0)
            clearInterval(timer);
        let neighbors = [];
        let tmpx = emptyx;
        let tmpy = emptyy - 100;
        if (tmpy >= 0)
            neighbors.push({tmpx, tmpy});
        tmpy = emptyy + 100;
        if (tmpy <= 300)
            neighbors.push({tmpx, tmpy});
        tmpy = emptyy;
        tmpx = emptyx - 100;
        if (tmpx >= 0)
            neighbors.push({tmpx, tmpy});
        tmpx = emptyx + 100;
        if (tmpx <= 300)
            neighbors.push({tmpx, tmpy});
        let randNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
        tmpx = randNeighbor.tmpx;
        tmpy = randNeighbor.tmpy;
        let randElem = $("div[x=" + tmpx + "][y=" + tmpy + "]");
        i--;
        console.log(i);
        move(randElem);
    }
    init();
});
