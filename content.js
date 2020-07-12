// Wrapper Background
wrapperDiv = document.createElement("div");
wrapperDiv.style.position = "absolute";
wrapperDiv.style.left = "0px";
wrapperDiv.style.top = "0px";
wrapperDiv.style.backgroundColor = "black";
wrapperDiv.style.opacity = "0.5";
wrapperDiv.style.zIndex = "2000";
wrapperDiv.style.height = "1000000px";
wrapperDiv.style.width = "100%";
wrapperDiv.id = 'wrapper';

// iFrame
iframeElement = document.createElement("iframe");
iframeElement.style.width = "100%";
iframeElement.style.height = "100%";
wrapperDiv.appendChild(iframeElement);

// Modal parent
parentDiv = document.createElement("div");
parentDiv.style.position = 'absolute';
parentDiv.style.width = '400px';
parentDiv.style.border = '1px solid rgb(51, 102, 153)';
parentDiv.style.backgroundColor = 'rgb(255, 255, 255)';
parentDiv.style.zIndex = '2001';
parentDiv.style.overflow = 'auto';
parentDiv.style.textAlign = 'center';
parentDiv.style.top = '150px';
parentDiv.style.left = ((document.body.clientWidth / 2) - 200) + 'px';
parentDiv.id = 'parent';

childDiv = document.createElement("div");
childDiv.appendChild(getIntro());
childDiv.appendChild(getSelection());
childDiv.appendChild(getLoading());
childDiv.appendChild(getSelected());
childDiv.appendChild(getFeedback());
parentDiv.appendChild(childDiv);

document.body.appendChild(wrapperDiv);
document.body.appendChild(parentDiv);

function getIntro() {
    innerElement = document.createElement('div');
    innerElement.style.maxWidth = "100%";
    innerElement.id = 'intro';
    headerElement = document.createElement('img');
    headerElement.src = 'https://i.ibb.co/g78fD63/header.png';
    headerElement.width = 400;
    infoElement = document.createElement('img');
    infoElement.src = 'https://i.ibb.co/qszHStP/intro.png';
    infoElement.width = 400;
    buttonElement = document.createElement('button');
    buttonElement.type = "button";
    buttonElement.textContent = "Let's Go!";
    buttonElement.style.backgroundColor = 'green';
    buttonElement.style.border = 'none';
    buttonElement.style.color = 'white';
    buttonElement.style.textAlign = 'center';
    buttonElement.style.padding = '10px 20px';
    buttonElement.style.textDecoration = 'none';
    buttonElement.style.display = 'inline-block';
    buttonElement.style.fontSize = '12px';
    buttonElement.style.margin = '10px 5px';
    buttonElement.style.cursor = 'pointer';
    buttonElement.addEventListener("click", function () {
        intro = document.getElementById('intro');
        intro.style.display = "none";
        selection = document.getElementById('selection');
        selection.style.display = "block";
    });
    footerElement = document.createElement('img');
    footerElement.src = "https://i.ibb.co/NNs7wGB/footer.png";
    footerElement.width = 400;
    innerElement.appendChild(headerElement);
    innerElement.appendChild(infoElement);
    innerElement.appendChild(buttonElement);
    innerElement.appendChild(footerElement);
    return innerElement
}


function getSelection() {
    innerElement = document.createElement('div');
    innerElement.style.maxWidth = "100%";
    innerElement.id = 'selection';
    innerElement.style.display = 'none';
    headerElement = document.createElement('img');
    headerElement.src = 'https://i.ibb.co/g78fD63/header.png';
    headerElement.width = 400;
    textElement = document.createElement('h3');
    textElement.textContent = "Choose your credit cards";
    card1 = getCard('DBS Live Fresh', 'https://res.cloudinary.com/valuechampion/image/upload/c_limit,dpr_1.0,f_auto,h_1600,q_auto,w_1600/v1/referral_logos/sg/credit_cards/DBS_Live_Fresh_09.11.19.png');
    card2 = getCard('UOB One', 'https://community.whatcard.sg/uploads/default/original/1X/7e7cca7c5b59efaf5227b15f6285e73cd4793d38.jpeg');
    card3 = getCard('OCBC 90n', 'https://milelion-com0.exactdn.com/wp-content/uploads/2019/08/High-res-card-face.jpg?strip=all&lossy=0&quality=85&resize=253%2C161&ssl=1');
    card4 = getCard('OCBC Frank', 'https://images.contentstack.io/v3/assets/bltc05b5aa7ae1c3a47/bltf0ddb12ac9efdf8d/5cbd879ac40378ef1ec253b6/OCBC%20FRANK.png');
    card5 = getCard('POSB Everyday', 'https://s.yimg.com/ny/api/res/1.2/LE63DPxPGfoyInybUlH7Xg--/YXBwaWQ9aGlnaGxhbmRlcjtoPTY2Ng--/https://d11zeux9tyyeep.cloudfront.net/product/881/image_everyday@2x.png');
    card6 = getCard('MayBank World', 'https://ringgitplus.com/img/card-400/519489e2193821ed4a0000ec.jpg?v4=1');
    row1 = getRow(card1, card2, card3);
    row2 = getRow(card4, card5, card6);
    tableElement = getTable(row1, row2);
    buttonElement = document.createElement('button');
    buttonElement.type = "button";
    buttonElement.textContent = "Next";
    buttonElement.style.backgroundColor = 'blue';
    buttonElement.style.border = 'none';
    buttonElement.style.color = 'white';
    buttonElement.style.textAlign = 'center';
    buttonElement.style.padding = '10px 20px';
    buttonElement.style.textDecoration = 'none';
    buttonElement.style.display = 'inline-block';
    buttonElement.style.fontSize = '12px';
    buttonElement.style.margin = '10px 5px';
    buttonElement.style.cursor = 'pointer';
    buttonElement.addEventListener("click", function () {
        selection = document.getElementById('selection');
        selection.style.display = "none";
        loading = document.getElementById('loading');
        loading.style.display = "block";
        fade(loading.children[1])
    });
    footerElement = document.createElement('img');
    footerElement.src = "https://i.ibb.co/NNs7wGB/footer.png";
    footerElement.width = 400;
    innerElement.appendChild(headerElement);
    innerElement.appendChild(textElement);
    innerElement.appendChild(tableElement);
    innerElement.appendChild(buttonElement);
    innerElement.appendChild(footerElement);
    return innerElement
}


function getLoading() {
    innerElement = document.createElement('div');
    innerElement.style.maxWidth = "100%";
    innerElement.style.display = 'none';
    innerElement.id = 'loading';
    headerElement = document.createElement('img');
    headerElement.src = 'https://i.ibb.co/g78fD63/header.png';
    headerElement.width = 400;
    infoElement = document.createElement('img');
    infoElement.src = 'https://i.ibb.co/gPHD4zg/loading.png';
    infoElement.width = 400;
    footerElement = document.createElement('img');
    footerElement.src = "https://i.ibb.co/NNs7wGB/footer.png";
    footerElement.width = 400;
    innerElement.appendChild(headerElement);
    innerElement.appendChild(infoElement);
    innerElement.appendChild(footerElement);
    return innerElement
}


function getSelected() {
    innerElement = document.createElement('div');
    innerElement.style.maxWidth = "100%";
    innerElement.style.display = 'none';
    innerElement.id = 'selected';
    headerElement = document.createElement('img');
    headerElement.src = 'https://i.ibb.co/g78fD63/header.png';
    headerElement.width = 400;
    infoElement = document.createElement('img');
    infoElement.src = 'https://i.ibb.co/HFGV9WJ/selection.png';
    infoElement.width = 400;
    infoElement.addEventListener('click', function () {
        selected = document.getElementById('selected');
        selected.style.display = "none";
        feedback = document.getElementById('feedback');
        feedback.style.display = "block";
    });
    footerElement = document.createElement('img');
    footerElement.src = "https://i.ibb.co/NNs7wGB/footer.png";
    footerElement.width = 400;
    innerElement.appendChild(headerElement);
    innerElement.appendChild(infoElement);
    innerElement.appendChild(footerElement);
    return innerElement
}


function getFeedback() {
    innerElement = document.createElement('div');
    innerElement.style.maxWidth = "100%";
    innerElement.style.display = 'none';
    innerElement.id = 'feedback';
    headerElement = document.createElement('img');
    headerElement.src = 'https://i.ibb.co/g78fD63/header.png';
    headerElement.width = 400;
    infoElement = document.createElement('img');
    infoElement.src = 'https://i.ibb.co/qj1tpc7/feedback.png';
    infoElement.width = 400;
    infoElement.addEventListener('click', function () {
        wrapper = document.getElementById('wrapper');
        parent = document.getElementById('parent');
        parent.style.display = 'none';
        wrapper.style.display = 'none';
    });
    innerElement.appendChild(headerElement);
    innerElement.appendChild(infoElement);
    return innerElement
}

function getTable(row1, row2) {
    tableElement = document.createElement('div');
    tableElement.style.width = "100%";
    tableElement.style.display = "table";
    tableElement.appendChild(row1);
    tableElement.appendChild(row2);
    return tableElement
}

function getRow(card1, card2, card3) {
    rowElement = document.createElement('div');
    rowElement.style.display = "table-row";
    rowElement.appendChild(card1);
    rowElement.appendChild(card2);
    rowElement.appendChild(card3);
    return rowElement
}


function getCard(name, link) {
    cardElement = document.createElement('div');
    cardElement.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)';
    cardElement.style.width = '33%';
    cardElement.style.display = 'table-cell';
    cardElement.style.backgroundColor = "#F5F5DC";
    cardElement.id = name;
    imageElement = document.createElement('img');
    imageElement.src = link;
    imageElement.width = 100;
    nameElement = document.createElement('h4');
    nameElement.style.padding = "2px 16px";
    nameElement.textContent = name;
    cardElement.appendChild(imageElement);
    cardElement.appendChild(nameElement);
    cardElement.addEventListener("click", function () {
        element = document.getElementById(name);
        if (element.style.backgroundColor !== "rgb(127, 255, 212)") {
            element.style.backgroundColor = "#7FFFD4";
        } else {
            element.style.backgroundColor = "#F5F5DC";
        }
    });
    return cardElement
}


function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            fadeIn(element);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 150);
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 0.9){
            clearInterval(timer);
            document.getElementById('loading').style.display = 'none';
            document.getElementById('selected').style.display = 'block';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 150);
}
