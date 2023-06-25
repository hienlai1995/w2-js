"use strick";
const arrNav = [
  {
    nametype: "Get Data",
    id: "getdata",
    listdata: [
      {
        key: "Get Data",
        idsub: "subgetdata",
        subdata: [
          "Occurrences",
          "GBIF API",
          "Specie",
          "Datasets",
          "Occurrence snapshot",
          "hosted-portals",
          "Trens",
        ],
      },
    ],
  },
  {
    nametype: "How-to",
    id: "howto",
    listdata: [
      {
        key: "Sharedata",
        idsub: "sharedata",
        subdata: [
          "quick-start guide",
          "data sets classer",
          "Data hosting",
          "Standards",
          "Become a Publisher",
          "Data quality",
          "Data paper",
        ],
      },
      {
        key: "Use data",
        idsub: "usedata",

        subdata: [
          "Featured data use",
          "Citation guide lines",
          "GBIF citations",
          "Citations widget",
        ],
      },
    ],
  },
  {
    nametype: "Tools",
    id: "tools",
    listdata: [
      {
        key: "PSublishing",
        idsub: "psublishing",
        subdata: [
          "IPT",
          "Data validator",
          "Scientific Collections",
          "Suggest a dataset",
          "New data model",
        ],
      },
      {
        key: "Data access and use",
        idsub: "Dataaccessanduse",
        subdata: [
          "Hosted portals",
          "Data processing",
          "Derived datasets",
          "rgbif",
          "pygbif",
          "MAXENT",
          "Tools catalogue",
        ],
      },
      {
        key: "GBIF labs",
        idsub: "gbiflabs",
        subdata: [
          "Species matching",
          "Name parser",
          "Sequence ID",
          "Relative observation trends",
          "GBIF data blog",
        ],
      },
    ],
  },
  {
    nametype: "Community",
    id: "community",
    listdata: [
      {
        key: "Network",
        idsub: "network",
        subdata: [
          "Participant network",
          "Nodes",
          "Publishers",
          "Network contacts",
          "Community forum",
          "alliance for biodiversity knowledge",
        ],
      },
      {
        key: "Volunteers",
        idsub: "volunteers",
        subdata: [
          "Mentors",
          "Ambassadors",
          "Translators",
          "Citizen scientists",
        ],
      },
      {
        key: "Activities",
        idsub: "activities",
        subdata: [
          "Capacity enhancement",
          "Programmes & projects",
          "Training and learning resources",
          "Data Use Club",
          "Living Atlases",
        ],
      },
    ],
  },
  {
    nametype: "About",
    id: "about",
    listdata: [
      {
        key: "Inside GBIF",
        idsub: "insidegbif",
        subdata: [
          "What is GBIF?",
          "Become a member",
          "Governance",
          "Implementation plan",
          "Work Programme",
          "Funders",
          "Partnerships",
          "Release notes",
          "Contacts",
        ],
      },
      {
        key: "News & outreach",
        idsub: "newsoutreach",
        subdata: [
          "News",
          "Newsletters and lists",
          "Events",
          "Awards",
          "Science Review",
          "Data use",
        ],
      },
    ],
  },
];
let b = Math.round(Math.random() * 4);
document.getElementById(
  "headerfather"
).style.backgroundImage = `url(./image/backgroundimage/code${b}.jpg)`;
const leftnav = document.getElementById("leftnav");
for (let i = 0; i < arrNav.length; i++) {
  // text += `<li id="${arrNav[i].id}" class="listyle"><a href="#" class="liofastyle">${arrNav[i].nametype}</a><div id="container${i}" class="disble contaisub">`;
  const list = document.createElement("li");
  const lista = document.createElement("a");
  const listdiv = document.createElement("div");
  list.id = arrNav[i].id;
  list.classList.add("listyle");
  lista.setAttribute("href", "#");
  lista.textContent = arrNav[i].nametype;
  lista.classList.add("liofastyle");
  listdiv.id = `container${i}`;
  listdiv.classList.add("disble", "contaisub");
  list.appendChild(lista);
  list.appendChild(listdiv);
  leftnav.appendChild(list);
  for (let j = 0; j < arrNav[i].listdata.length; j++) {
    // text += `<ul id="${arrNav[i].listdata[j].idsub}" class="subnav"><h2 class="tittleSubnav">${arrNav[i].listdata[j].key}</h2>`;
    const listul = document.createElement("ul");
    const listh2 = document.createElement("h2");
    listul.id = arrNav[i].listdata[j].idsub;
    listul.classList.add("subnav");
    listh2.classList.add("tittleSubnav");
    listh2.textContent = arrNav[i].listdata[j].key;
    listul.appendChild(listh2);
    listdiv.appendChild(listul);
    for (let k = 0; k < arrNav[i].listdata[j].subdata.length; k++) {
      // text += `<li ><a href="#" class ="astyle">${arrNav[i].listdata[j].subdata[k]}</a></li>`;
      const listsub = document.createElement("li");
      const listainli = document.createElement("a");
      listainli.classList.add("astyle");
      listainli.textContent = arrNav[i].listdata[j].subdata[k];
      listsub.appendChild(listainli);
      listul.appendChild(listsub);
    }
    // text += "</ul>";
  }
}

let isclickofgetdata = false;
let isclickhowto = false;
let = isclickoftools = false;
let isclickofcommunity = false;
let = isclickofabout = false;
// showsubmenu
function showsubmenu(idofclick) {
  document.getElementById(idofclick).addEventListener("click", function () {
    switch (idofclick) {
      case "getdata":
        isclickofgetdata = true;
        isclickhowto = false;
        isclickoftools = false;
        isclickofcommunity = false;
        isclickofabout = false;
        break;
      case "howto":
        isclickofgetdata = false;
        isclickhowto = true;
        isclickoftools = false;
        isclickofcommunity = false;
        isclickofabout = false;
        break;
      case "tools":
        isclickofgetdata = false;
        isclickhowto = false;
        isclickoftools = true;
        isclickofcommunity = false;
        isclickofabout = false;
        break;
      case "community":
        isclickofgetdata = false;
        isclickhowto = false;
        isclickoftools = false;
        isclickofcommunity = true;
        isclickofabout = false;
        break;
      case "about":
        isclickofgetdata = false;
        isclickhowto = false;
        isclickoftools = false;
        isclickofcommunity = false;
        isclickofabout = true;
        break;
    }
    //
    if (isclickofgetdata) {
      document.getElementById("subgetdata").classList.add("activesubmenu");
      document.getElementById("container0").classList.remove("disble");
      document.getElementById("container0").classList.add("containersubmenu");
      document.getElementById("container0").style.marginLeft = "82px";
      document.getElementById("getdata").classList.add("colorgreen");
    } else {
      document.getElementById("subgetdata").classList.remove("activesubmenu");
      document.getElementById("container0").classList.add("disble");
      document
        .getElementById("container0")
        .classList.remove("containersubmenu");
      document.getElementById("getdata").classList.remove("colorgreen");
    }
    //
    if (isclickhowto) {
      document.getElementById("sharedata").classList.add("activesubmenu");
      document.getElementById("usedata").classList.add("activesubmenu");
      document.getElementById("howto").classList.add("colorgreen");
      document.getElementById("container1").style.marginLeft = "300px";
      document.getElementById("container1").classList.remove("disble");
      document.getElementById("container1").classList.add("containersubmenu");
    } else {
      document.getElementById("sharedata").classList.remove("activesubmenu");
      document.getElementById("usedata").classList.remove("activesubmenu");
      document.getElementById("container1").classList.add("disble");
      document.getElementById("container1").classList.add("containersubmenu");
      document.getElementById("howto").classList.remove("colorgreen");
    }
    if (isclickoftools) {
      document.getElementById("psublishing").classList.add("activesubmenu");
      document
        .getElementById("Dataaccessanduse")
        .classList.add("activesubmenu");
      document.getElementById("gbiflabs").classList.add("activesubmenu");
      document.getElementById("container2").classList.remove("disble");
      document.getElementById("container2").classList.add("containersubmenu");
      document.getElementById("tools").classList.add("colorgreen");
      document.getElementById("container2").style.marginLeft = "516px";
    } else {
      document.getElementById("psublishing").classList.remove("activesubmenu");
      document
        .getElementById("Dataaccessanduse")
        .classList.remove("activesubmenu");
      document.getElementById("gbiflabs").classList.remove("activesubmenu");
      document.getElementById("container2").classList.add("disble");
      document
        .getElementById("container2")
        .classList.remove("containersubmenu");
      document.getElementById("tools").classList.remove("colorgreen");
    }
    //
    if (isclickofcommunity) {
      document.getElementById("network").classList.add("activesubmenu");
      document.getElementById("volunteers").classList.add("activesubmenu");
      document.getElementById("activities").classList.add("activesubmenu");
      document.getElementById("container3").classList.remove("disble");
      document.getElementById("container3").classList.add("containersubmenu");
      document.getElementById("community").classList.add("colorgreen");
      document.getElementById("container3").style.marginLeft = "462px";
    } else {
      document.getElementById("network").classList.remove("activesubmenu");
      document.getElementById("volunteers").classList.remove("activesubmenu");
      document.getElementById("activities").classList.remove("activesubmenu");
      document
        .getElementById("container3")
        .classList.remove("containersubmenu");
      document.getElementById("container3").classList.add("disble");
      document.getElementById("community").classList.remove("colorgreen");
    }
    if (isclickofabout) {
      document.getElementById("insidegbif").classList.add("activesubmenu");
      document.getElementById("newsoutreach").classList.add("activesubmenu");
      document.getElementById("container4").classList.remove("disble");
      document.getElementById("container4").classList.add("containersubmenu");
      document.getElementById("about").classList.add("colorgreen");
      document.getElementById("container4").style.marginLeft = "310px";
    } else {
      document.getElementById("insidegbif").classList.remove("activesubmenu");
      document.getElementById("newsoutreach").classList.remove("activesubmenu");
      document.getElementById("container4").classList.add("disble");
      document
        .getElementById("container4")
        .classList.remove("containersubmenu");
      document.getElementById("about").classList.remove("colorgreen");
    }
    removerinputform();
    removelanguageform();
  });
}
for (let i = 0; i < arrNav.length; i++) {
  for (let j = 0; j < arrNav[i].listdata.length; j++) {
    showsubmenu(arrNav[i].id);
  }
}
//  remover submenu
function removesubmenu() {
  for (let i = 0; i < arrNav.length; i++) {
    document.getElementById(arrNav[i].id).classList.remove("colorgreen");
    document
      .getElementById(`container${i}`)
      .classList.remove("containersubmenu");
    for (let j = 0; j < arrNav[i].listdata.length; j++) {
      document
        .getElementById(arrNav[i].listdata[j].idsub)
        .classList.remove("activesubmenu");
    }
  }
}
// remove frominput
function removerinputform() {
  document.getElementById("inputloginform").classList.add("enable");
  document.getElementById("inputloginform").classList.remove("loginformstyle");
  document.getElementById("inputloginform").classList.remove("w3-container");
  document.getElementById("showlogin").classList.add("showloginstyle");
  document.getElementById("showlogin").classList.remove("enable");
  document.getElementById("showregister").classList.remove("showloginstyle");
  document.getElementById("showregister").classList.add("enable");
  document.getElementById("inputloginform").style.height = "400px";
  document.getElementById("scrolloginfom").style.backgroundColor = "green";
  document.getElementById("scrollregisterfom").style.backgroundColor = "gray";
}
// remove form language
function removelanguageform() {
  document.getElementById("choselanguage").classList.add("enable");
  document.getElementById("choselanguage").classList.remove("loginformstyle");
}
// inputdisplay
const collecinput = document.getElementById("collecinput");
collecinput.addEventListener("click", function () {
  removesubmenu();
  removelanguageform();
  document.getElementById("inputloginform").classList.remove("enable");
  document.getElementById("inputloginform").classList.add("loginformstyle");
  document.getElementById("inputloginform").classList.add("w3-container");
  document.getElementById("scrolloginfom").style.backgroundColor = "green";
  document.getElementById("scrollregisterfom").style.backgroundColor = "gray";
});
// close of inputform
document.getElementById("close").addEventListener("click", function () {
  removerinputform();
});
document.getElementById("loginfom").addEventListener("click", function () {
  removesubmenu();
  removelanguageform();
  document.getElementById("showlogin").classList.add("showloginstyle");
  document.getElementById("showlogin").classList.remove("enable");
  document.getElementById("showregister").classList.remove("showloginstyle");
  document.getElementById("showregister").classList.add("enable");
  document.getElementById("inputloginform").style.height = "400px";
  document.getElementById("scrolloginfom").style.backgroundColor = "green";
  document.getElementById("scrollregisterfom").style.backgroundColor = "gray";
});
document.getElementById("registerfom").addEventListener("click", function () {
  removesubmenu();
  removelanguageform();
  document.getElementById("showlogin").classList.add("enable");
  document.getElementById("showlogin").classList.remove("showloginstyle");
  document.getElementById("showregister").classList.remove("enable");
  document.getElementById("showregister").classList.add("showloginstyle");
  document.getElementById("inputloginform").style.height = "550px";
  document.getElementById("scrollregisterfom").style.backgroundColor = "green";
  document.getElementById("scrolloginfom").style.backgroundColor = "gray";
});
// chosse language display
document
  .getElementById("languagechoose")
  .addEventListener("click", function () {
    removerinputform();
    removesubmenu();
    document.getElementById("choselanguage").classList.add("loginformstyle");
    document.getElementById("choselanguage").classList.remove("enable");
  });
document
  .getElementById("closeoflanguage")
  .addEventListener("click", function () {
    removelanguageform();
    removerinputform();
    removesubmenu();
  });
const bodyboss = document.getElementById("bodyboss");
const navboss = document.getElementById("navboss");
const inputloginform = document.getElementById("inputloginform");
const choselanguage = document.getElementById("choselanguage");
const languagechoose = document.getElementById("languagechoose");
bodyboss.addEventListener("click", (e) => {
  if (!navboss.contains(e.target)) {
    removesubmenu();
  }
  if (!inputloginform.contains(e.target) && !collecinput.contains(e.target)) {
    removerinputform();
  }
  if (!choselanguage.contains(e.target) && !languagechoose.contains(e.target)) {
    removelanguageform();
  }
});
