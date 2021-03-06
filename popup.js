const dbs_credit_url = "https://www.dbs.com.sg/personal/cards/credit-cards/live-fresh-dbs-visa-paywave-platinum-card";
const uob_credit_url = "https://www.uob.com.sg/credit-cards/featured.html#one-card";
const ocbc_90_url = "https://www.ocbc.com/personal-banking/cards/90-degrees-travel-credit-card";
const ocbc_frank_url = "https://www.frankbyocbc.com/products/cards/credit-card";

$(function () {
  $("#optimal-card img").click(function (event) {
    console.log(event);
    open(dbs_credit_url);
  })

  $("#dbs-credit img").click(function (event) {
    console.log(event);
    open(dbs_credit_url);
  })


  $("#uob-credit img").click(function (event) {
    console.log(event);
    open(uob_credit_url);
  })

  $("#ocbc-90 img").click(function (event) {
    console.log(event);
    open(ocbc_90_url);
  })

  $("#ocbc-frank img").click(function (event) {
    console.log(event);
    open(ocbc_frank_url);
  });

});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#cards').addEventListener('click', onClick, false);
  document.querySelector('#help').addEventListener('click', helpPage, false);
  document.querySelector('#home').addEventListener('click', homePage, false);
  document.querySelector('#support').addEventListener('click', support, false);
  document.querySelector('#dbs-credit input').addEventListener('click', dbsCredit, false);
  document.querySelector('#uob-credit input').addEventListener('click', uobCredit, false);
  document.querySelector('#ocbc-90 input').addEventListener('click', ocbc90, false);
  document.querySelector('#ocbc-frank input').addEventListener('click', ocbcFrank, false);

  function support() {
    window.open('mailto:ddl.tdh@gmail.com');
  }

  function helpPage() {
    document.getElementById('smartpay-cards').style.display = "none";
    document.getElementById('optimal-card').style.display = "none";
    document.getElementById('help-page').style.display = "block";
  }

  function dbsCredit() {
    if (localStorage.getItem('dbs-credit') === 'true') {
      localStorage.setItem('dbs-credit', 'false');
    } else {
      localStorage.setItem('dbs-credit', 'true');
    }
    // alert((localStorage.getItem('dbs-credit') === 'true' ? 'added' : 'removed') + ' dbs credit card successfully.');
    onClick();
  }

  function uobCredit() {
    if (localStorage.getItem('uob-credit') === 'true') {
      localStorage.setItem('uob-credit', 'false');
    } else {
      localStorage.setItem('uob-credit', 'true');
    }
    // alert((localStorage.getItem('uob-credit') === 'true' ? 'added' : 'removed') + ' uob credit card successfully.');
    onClick();
  }

  function ocbc90() {
    if (localStorage.getItem('ocbc-90') === 'true') {
      localStorage.setItem('ocbc-90', 'false');
    } else {
      localStorage.setItem('ocbc-90', 'true');
    }
    // alert((localStorage.getItem('ocbc-90') === 'true' ? 'added' : 'removed') + ' ocbc 90 credit card successfully.');
    onClick();
  }

  function ocbcFrank() {
    if (localStorage.getItem('ocbc-frank') === 'true') {
      localStorage.setItem('ocbc-frank', 'false');
    } else {
      localStorage.setItem('ocbc-frank', 'true');
    }
    // alert((localStorage.getItem('ocbc-frank') === 'true' ? 'added' : 'removed') + ' ocbc frank credit card successfully.');
    onClick();
  }

  function onClick() {
    document.getElementById('smartpay-cards').style.display = "block";
    document.getElementById('optimal-card').style.display = "none";
    document.getElementById('help-page').style.display = "none";
    var cardToID = ['dbs-credit', 'uob-credit', 'ocbc-90', 'ocbc-frank'];
    for (var i = 0; i < cardToID.length; i++) {
      var card = cardToID[i];
      if (localStorage.getItem(card) === 'true') {
        document.getElementById(card).style.backgroundColor = 'gainsboro';
      } else {
        document.getElementById(card).style.backgroundColor = 'white';
      }
    }
  }

  function homePage() {
    document.getElementById('smartpay-cards').style.display = "none";
    document.getElementById('optimal-card').style.display = "block";
    document.getElementById('help-page').style.display = "none";
  }
}, false);