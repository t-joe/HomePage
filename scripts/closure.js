var createAcc = (function () {
    var accountName;
    var deposit;
     return   function(accName, dep) {
            this.accountName = accName;
            this.deposit = dep;
        }
})();

var rudyTimer = (function () {
    var timer = null;
    function displayTxt() {
        document.getElementById("rudyTxt").innerHTML += " Rudy!";
    }
    return function () {
        if(timer == null)
        {
            timer = setInterval(displayTxt, 1000);
        }
        else
        {
            clearInterval(timer);
            timer = null;
        }
    }
})();
var accounts = [];

function createAccount() {
    var accName = document.getElementById("accName").value;
    var deposit = document.getElementById("diposite").value;
    accounts.push(new createAcc(accName, deposit));
}

function displayAccounts() {
    accounts.forEach(e => document.getElementById("accountList").value += ("Account name: " + e.accountName  + ", balance: "+ e.deposit + "\n"));
}