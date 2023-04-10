const cafeCocktailObj = [
  {
    categorias: [
      {
        id: "0",
        nomePt: "Café cocktails",
        nomeEn: "Café cocktails",
      },
    ],

    produtos: [
      {
        id: "0",
        nomePt: "Irish Coffee",
        nomeEn: "Irish Coffee",
        categoria: "Café cocktails",
        igredientes: "Whiskey, Café, chantilly",
        preco: "5.50",
      },
      {
        id: "1",
        nomePt: "Café algarvio",
        nomeEn: "Café algarvio",
        categoria: "Café cocktails",
        igredientes: "Café, amarguinha, chantilly",
        preco: "5.50",
      },
      {
        id: "2",
        nomePt: "Baileys coffee",
        nomeEn: "Baileys coffee",
        categoria: "Café cocktails",
        igredientes: "Café baileys, chantilly",
        preco: "5.50",
      },
    ],
  },
];

var categoriasListaPt = [
  "Pastelaria",
  "Tostas e Torradas",
  "Sandes",
  "Saladas",
  "Pequeno Almoço Inglês",
  "Bacon Rolls",
  "Bebidas",
  "Sumos Naturais de Fruta",
  "Smoothies",
  "Cocktails",
  "Bebidas Espirituosas",
  "Tapas",
  "Vinhos",
  "Gelados Bola",
  "Taças de Gelado",
  "Crepes",
  "Panquecas",
  "Acepipe Special",
  "Bubble Waffles",
  "Waffles",
  "Batidos",
  "Cafetaria",
  "Extras",
];

var vinhosTipo = ["Vinhos Brancos", "Vinhos Tintos", "Vinhos Verdes"];

var body = document.body;

var jsonPt = "https://acepipe.pt/static/scripts/precarioPT.json";

var scrollIcon = document.createElement("i");
scrollIcon.setAttribute("class", "bi bi-arrow-up");
var scrollToTopBtn = document.createElement("button");
scrollToTopBtn.setAttribute("onclick", "topFunction()");
scrollToTopBtn.setAttribute("class", "scroll-to-top rounded-circle");
scrollToTopBtn.append(scrollIcon);

function darkMode() {
  let switchBtn = document.getElementById("darkModeSwitch");
  let nav = document.getElementById("navbar");

  let navBarLink = document.querySelectorAll(".navbar-link");
  let card = document.querySelectorAll("#cardPrecario");
  let headers = document.querySelectorAll(".main-header");
  let headerPrecario = document.querySelectorAll(".header-precario");
  let prices = document.querySelectorAll("#preco");
  let prod = document.querySelectorAll("#produto");
  let igredientes = document.querySelectorAll("#igredientes");
  let catImage = document.querySelectorAll(".cat-image");
  let scrollBtn = document.querySelector(".scroll-to-top");
  let footer = document.getElementById("footer");
  let linksDiv = document.getElementById("links-div");
  let icons = document.getElementById("catHelp");
  if (switchBtn.classList.contains("dark-mode")) {
    switchBtn.classList.toggle("bi-moon-stars-fill");
    switchBtn.classList.toggle("bi-brightness-high-fill");
  } else if (switchBtn.classList.contains("dark-mode") === false) {
    switchBtn.classList.toggle("bi-brightness-high-fill");
    switchBtn.classList.toggle("bi-moon-stars-fill");
  }

  function toggler(element) {
    const d = "dark-mode";
    element.classList.toggle(d);
  }
  // acima de 2 elementos
  igredientes.forEach(toggler);
  card.forEach(toggler);
  headers.forEach(toggler);
  headerPrecario.forEach(toggler);
  prices.forEach(toggler);
  navBarLink.forEach(toggler);
  prod.forEach(toggler);
  catImage.forEach(toggler);
  // até 1 elemento de query
  toggler(scrollBtn);
  toggler(nav);
  toggler(body);
  toggler(linksDiv);
  toggler(footer);
  toggler(switchBtn);
  toggler(icons);
}

// links categorias
function categoriasPrecario(append) {
  let navBarLink, navBarLinkUl, navBarLinkLi;

  navBarLinkUl = document.createElement("ul");
  navBarLinkUl.setAttribute(
    "class",
    "navbar-link-ul p-2 align-items-center hstack gap-1"
  );

  for (let l = 0; l < categoriasListaPt.length; l++) {
    const link = categoriasListaPt[l];

    navBarLinkLi = document.createElement("li");
    navBarLinkLi.setAttribute("class", "navbar-link-li mx-auto rounded p-1");
    navBarLink = document.createElement("a");
    navBarLink.setAttribute("class", "navbar-link text-lg fst-italic ");
    navBarLink.setAttribute("href", "#" + "section" + l);
    navBarLinkUl.append(navBarLinkLi);
    navBarLinkLi.append(navBarLink);
    navBarLink.innerText = link;
    append.append(navBarLinkUl);
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// landing page
function index() {
  let navBar,
    navBarContent,
    navBarContentChild,
    navBarSubMenu,
    footer,
    navTabUl,
    darkModeBtn;
  // main bar
  navBar = document.createElement("nav");
  navBar.setAttribute("class", "navbar justify-content-center text-center");
  navBar.setAttribute("id", "navbar");
  navBar.setAttribute(
    "title",
    "Elemento onde está alojado o logotipo do Acepipe"
  );
  navBarContent = document.createElement("a");
  navBarContent.setAttribute("href", "https://acepipe.pt");
  navBarContentChild = document.createElement("img");
  navBarContentChild.setAttribute("src", "/static/img/brand.png");
  navTabUl = document.createElement("div");
  // bi bi-wrench-adjustable-circle-fill
  navTabUl.setAttribute(
    "class",
    "d-inline-flex justify-content-start align-items-center p-2 rounded shadow shadow-sm"
  );
  navTabUl.setAttribute("id", "links-div");
  let helpIcon = document.createElement("i");
  helpIcon.setAttribute("class", "bi bi-arrow-left-right mx-1 p-2 text-lg");
  helpIcon.setAttribute("id", "catHelp");

  // inside body container
  let subBody = document.createElement("div");
  subBody.setAttribute("class", "body-container");
  subBody.setAttribute("id", "body-container");

  darkModeBtn = document.createElement("i");
  darkModeBtn.setAttribute("class", "bi bi-moon-stars-fill mx-1 p-2");
  darkModeBtn.setAttribute("id", "darkModeSwitch");
  darkModeBtn.setAttribute("onclick", "darkMode()");

  footer = document.createElement("footer");
  let socials = document.createElement("div");
  let legals = document.createElement("div");
  legals.setAttribute(
    "class",
    "text-md text-center fst-italic text-center footer-text"
  );
  let legalsText = document.createElement("p");

  function socialIcons(link, cl, append) {
    let icon = document.createElement("a");
    icon.setAttribute("href", link);
    icon.setAttribute("target", "_blank");
    icon.setAttribute("rel", "noopener noreferrer");
    icon.setAttribute("class", cl + " fs-3 mx-1");
    append.append(icon);
  }
  // LinkedIn
  socialIcons(
    "https://rebrand.ly/filipemartins",
    "bi bi-linkedin",
    socials
  );
  // Instagram
  socialIcons(
    "https://www.instagram.com/acepipe.algarve/",
    "bi bi-instagram",
    socials
  );
  // facebook
  socialIcons("#", "bi bi-facebook", socials);
  footer.setAttribute(
    "class",
    "d-flex p-2 footer rounded justify-content-center gap-2 align-middle fs-3"
  );
  footer.setAttribute("id", "footer");
  body.append(navBar);
  body.append(navTabUl, subBody);
  navBar.append(navBarContent);
  navBarContent.append(navBarContentChild);

  langPick(subBody);
  navTabUl.append(darkModeBtn);
  categoriasPrecario(navTabUl);
  navTabUl.append(helpIcon);
  precarioAcepipe(jsonPt, categoriasListaPt);

  body.append(footer);

  footer.append(legals, socials);
  legals.append(legalsText);
  legalsText.innerText = "As imagens são meramente ilustrativas";
}

function langPick(appendTo) {
  let langEnLink, langDiv;
  // div idioma
  langDiv = document.createElement("div");
  langDiv.setAttribute("class", "text-center my-3");
  // bandeira inglesa
  langEnLink = document.createElement("a");
  langEnLink.setAttribute("href", "https://en.acepipe.pt");
  langEnLink.setAttribute(
    "title",
    "Ao clicar nesta ligação irá abrir uma versão deste site em inglês"
  );
  langEnLink.setAttribute(
    "class",
    "btn btn-lg btn-danger rounded fs-5 fw-bold shadow"
  );
  langEnLink.innerText = "View in English";
  langDiv.append(langEnLink);
  appendTo.append(langDiv);
}
// Escolher Linguas
// variavel é o "foo" em foo.append(bar) counter = variavel em incremento (i++)

async function precarioAcepipe(json, array) {
  let response = await fetch(json);
  let data = await response.json();
  let header, headerDiv, cardBody, catText, catImage, card;

  let subBody = document.getElementById("body-container");
  let precarioContainer = document.createElement("div");
  precarioContainer.setAttribute(
    "class",
    "transparent border-0 mt-2 container-precario"
  );
  precarioContainer.setAttribute(
    "title",
    "Espaço onde irá aparecer todas as páginas do preçário"
  );

  subBody.append(precarioContainer);

  const categoriaNoRepeat = [];

  // Content precario

  for (let i = 0; i < array.length; i++) {
    categoriaNoRepeat.push(array[i]);

    catText = array[i].toLowerCase();

    card = document.createElement("div");
    headerDiv = document.createElement("div");
    header = document.createElement("p");
    cardBody = document.createElement("div");
    // container for the sub categorias after the normal products
    let subBodyCat = document.createElement("section");
    subBodyCat.setAttribute("id", "sub-body-" + catText);

    let cardBodyChild = document.createElement("section");
    cardBodyChild.setAttribute("id", array[i]);

    card.setAttribute("class", "card mb-8 rounded shadow shadow-sm ");

    card.setAttribute("id", "cardPrecario");
    card.setAttribute(
      "title",
      "Este espaço é o equivalente a uma página de um menu"
    );

    header.setAttribute(
      "class",
      "font-bold text-2xl transparent border-0 header-precario pb-3 text-center "
    );
    header.setAttribute("id", "section" + i);
    header.setAttribute(
      "title",
      "Titulo de uma categoria que contem vários produtos."
    );

    headerDiv.setAttribute("class", "container");
    headerDiv.setAttribute("id", catText);

    cardBody.setAttribute("class", "card-body transparent border-0");
    cardBody.setAttribute("id", "card-" + catText);
    // SE NAO HOUVER IMAGENS PARA A CAT
    if (
      array[i] === "Bebidas Espirituosas" ||
      array[i] === "Vinhos" ||
      array[i] === "Extras" ||
      array[i] === "Saladas" ||
      array[i] === "Cocktails" ||
      array[i] === "Smoothies"
    ) {
      cardBody.append(cardBodyChild);
      card.append(headerDiv, cardBody);

      headerDiv.append(header);
    } else {
      catImage = document.createElement("img");
      catImage.setAttribute(
        "class",
        "card-img-top border-0 mx-auto d-block cat-image"
      );

      if (catText.startsWith("taças")) {
        catText = catText.replace("taças", "tacas");
      } else if (catText.endsWith("pequeno almoço inglês")) {
        catText = "pequeno almoco ingles";
      }
      let catImageHref = "/static/img/" + catText + ".jpg";
      catImage.setAttribute("src", catImageHref);
      card.append(catImage);
      cardBody.append(cardBodyChild, subBodyCat);
      card.append(headerDiv, cardBody);
      headerDiv.append(header);
      precarioContainer.append(card);
    }
    //   traduzir

    if (catText == "vinhos") {
      card.setAttribute("class", "card mb-8 transparent rounded");
      card.setAttribute("style", "border-bottom-width: 2px;");
      const SubCatWines = () => {
        for (let v = 0; v < vinhosTipo.length; v++) {
          // vinhos sub
          let subCatVinho = document.createElement("p");
          let subDivVinho = document.createElement("div");
          let subBodyVinho = document.createElement("div");
          subBodyVinho.setAttribute("class", "card-body transparent  border-0");
          subBodyVinho.setAttribute("id", vinhosTipo[v]);
          subCatVinho.setAttribute(
            "class",
            "text-lg transparent border-0  header-precario pb-1 text-center"
          );
          subDivVinho.setAttribute("class", "container");
          cardBody.append(subDivVinho, subBodyVinho);
          subDivVinho.append(subCatVinho);
          subCatVinho.innerText = vinhosTipo[v];
        }
        // sangrias sub
        let subCatSangria = document.createElement("p");
        let subDivSangria = document.createElement("div");
        let subBodySangria = document.createElement("div");
        subBodySangria.setAttribute("class", "card-body transparent border-0");
        subBodySangria.setAttribute("id", "sangria");
        subCatSangria.setAttribute(
          "class",
          "text-lg transparent border-0  header-precario pb-1 text-center"
        );
        subDivSangria.setAttribute("class", "container");
        cardBody.append(subDivSangria, subBodySangria);
        subDivSangria.append(subCatSangria);

        subCatSangria.innerText = "Sangrias";
        // }
      };
      SubCatWines();
    }
    if (catText === "cafetaria") {
      const SubCatCafetaria = () => {
        // TYPE: object
        // id: "0",
        // nomePt: "irish Coffee",
        // nomeEn: "irish Coffee",
        // categoria: "café cocktails",
        // igredientes: "whiskey, café e chantilly",
        // preco: "5.50",
        let subCatCafe = document.createElement("p");
        let subDivCafe = document.createElement("div");

        const textPt = cafeCocktailObj[0].categorias[0].nomePt;
        const textEn = cafeCocktailObj[0].categorias[0].nomeEn;
        let objProds = cafeCocktailObj[0].produtos;
        let postDiv = document.getElementById("sub-body-" + "cafetaria");

        subCatCafe.setAttribute(
          "class",
          "text-lg transparent border-0  header-precario pb-1 text-center"
        );
        subDivCafe.setAttribute("class", "container");

        subDivCafe.append(subCatCafe);
        postDiv.append(subDivCafe);
        subCatCafe.innerText = textPt;

        for (let i = 0; i < objProds.length; i++) {
          const unit = objProds[i];

          let prodTextPt = unit.nomePt;
          let prodTextEn = unit.nomeEn;
          let priceText = unit.preco;
          let igredText = unit.igredientes;

          let subDiv = document.createElement("div");
          subDiv.setAttribute("class", "mt-3 container");
          subDiv.setAttribute("id", "subDiv");
          //
          let itemName = document.createElement("div");
          itemName.setAttribute(
            "class",
            "card-title font-bold text-lg transparent text-wrap w-100 "
          );
          itemName.setAttribute("id", "produto");
          itemName.setAttribute(
            "title",
            "Produtos disponiveis para venda ao publico."
          );

          itemName.innerText = prodTextPt;
          //
          let itemPrice = document.createElement("p");
          itemPrice.setAttribute(
            "class",
            "text-base transparent flex-shrink-1"
          );
          itemPrice.setAttribute("id", "preco");
          itemPrice.setAttribute(
            "title",
            "Preço dos produtos disponiveis para venda ao publico."
          );

          //
          subDiv.append(itemName, itemPrice);

          if (unit.igredientes.length != 0) {
            let igredsDiv = document.createElement("div");
            igredsDiv.setAttribute(
              "class",
              "container transparent border-0 flex text-wrap flex-grow text-start fw-light fst-italic"
            );
            igredsDiv.setAttribute("id", "igredsDiv");

            igredsDiv.innerText = igredText;
            postDiv.append(subDiv, igredsDiv);
          }

          if (priceText != "PVP") {
            itemPrice.innerText = priceText + "€";
          } else {
            itemPrice.setAttribute("title", "Preço de venda ao publico");
            itemPrice.innerText = priceText;
          }
        }
      };

      SubCatCafetaria();
    }
    precarioContainer.append(card);
    header.innerText = catText;
  }

  // se as categorias estiverem postas

  if (categoriaNoRepeat.length == array.length) {
    for (let y = 0; y < data[2].data.length; y++) {
      if (data[2].data[y].categoria == "Granizados") {
        continue;
      }
      let tempDiv = document.getElementById(data[2].data[y].categoria);
      let prodDiv = document.createElement("div");
      prodDiv.setAttribute("class", "mt-3 container");
      prodDiv.setAttribute("id", "prodDiv");
      let prod = document.createElement("div");

      prod.setAttribute(
        "class",
        "card-title font-bold text-lg transparent text-wrap w-100 "
      );
      prod.setAttribute("id", "produto");
      prod.setAttribute("title", "Produtos disponiveis para venda ao publico.");
      let price = document.createElement("p");
      price.setAttribute("class", "text-base transparent flex-shrink-1");
      price.setAttribute("id", "preco");
      price.setAttribute(
        "title",
        "Preço dos produtos disponiveis para venda ao publico."
      );
      let prodFind = data[2].data[y].nome.toLowerCase();
      // traduzir

      let prodText = data[2].data[y].nome;
      let priceText = data[2].data[y].preco;

      // sangrias na sub categoria delas
      if (prodFind.startsWith("sangria de vinho")) {
        let divSangria = document.getElementById("sangria");
        divSangria.append(prodDiv);
        let sang = prodText.slice("sangria de".length);
        prod.innerText = sang;
      }
      // sub categorias de vinhos
      else if (prodFind.endsWith("(branco)")) {
        // branco
        let brancoDiv = document.getElementById(vinhosTipo[0]);
        brancoDiv.append(prodDiv);
        let bra = prodText.substr(0, prodText.length - "(branco)".length);
        prod.innerText = bra;
      } else if (prodFind.search("(tinto)") >= 1) {
        // tinto
        let tintoDiv = document.getElementById(vinhosTipo[1]);
        let tin = prodText.substr(0, prodText.length - "(tinto)".length);
        tintoDiv.append(prodDiv);
        prod.innerText = tin;
      } else if (prodFind.search("(verde)") >= 1) {
        // verde
        let verdeDiv = document.getElementById(vinhosTipo[2]);
        let ver = prodText.substr(0, prodText.length - "(verde)".length);
        verdeDiv.append(prodDiv);
        prod.innerText = ver;
      } else {
        // qualquer outro vinho
        tempDiv.append(prodDiv);
        prod.innerText = prodText;
      }
      // juntar elementos do produto e do preço ao div principal que vai ser colocado na categoria
      prodDiv.append(prod, price);

      let igredientesText = data[2].data[y].igredientes;
      if (data[2].data[y].igredientes.length != 0) {
        let igredientes = document.createElement("div");
        igredientes.setAttribute(
          "class",
          "container transparent border-0 flex text-wrap flex-grow text-start fw-light fst-italic"
        );
        igredientes.setAttribute("id", "igredientes");
        tempDiv.append(igredientes);
        igredientes.innerText = igredientesText;
      }

      // funcao sub categorias vinhos

      // Caso o value de preço seja diferente de PVP
      if (priceText != "PVP") {
        price.innerText = priceText + "€";
      } else {
        price.setAttribute("title", "Preço de venda ao publico");
        price.innerText = priceText;
      }
    }
  }
}
index();
body.append(scrollToTopBtn);
window.onscroll = function () {
  scrollFunction();
};
