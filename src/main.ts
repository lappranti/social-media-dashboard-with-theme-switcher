// import "./style.css";
// const viteLogo = "../vite.svg";
// const typescriptLogo = "/path/to/typescript/logo.png";

// const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

// document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//     <ul>
//       ${items.map((item) => `<li>${item}</li>`).join("")}
//     </ul>
//   </div>
// `;

// const counterButton = document.getElementById("counter") as HTMLButtonElement;
// let count = 0;
// counterButton.addEventListener("click", () => {
//   count++;
//   counterButton.textContent = `Count: ${count}`;
// });

const app = document.getElementById("app");
const bntThemeContainer = document.getElementById("btnThemeContainer");
const btnTheme = document.getElementById("btnTheme");

if (localStorage.theme === "dark") {
  app?.classList.add("dark");
  if (btnTheme) {
    btnTheme.style.transform = "translateX(1px)";
  }
} else {
  app?.classList.remove("dark");
  if (btnTheme) {
    btnTheme.style.transform = "translateX(23px)";
  }
}

toggleTheme();
function toggleTheme() {
  bntThemeContainer?.addEventListener("click", () => {
    const theme = localStorage.theme;

    if (theme == "dark") {
      localStorage.theme = "light";
      app?.classList.remove("dark");
      if (btnTheme) {
        btnTheme.style.transform = "translateX(23px)";
      }
    } else {
      localStorage.theme = "dark";
      app?.classList.add("dark");
      if (btnTheme) {
        btnTheme.style.transform = "translateX(1px)";
      }
    }
  });
}

const socialListDetail = [
  {
    icon: "../images/icon-facebook.svg",
    followers: "1987",
    today: "12",
    color: "Facebook",
  },
  {
    icon: "../images/icon-twitter.svg",
    followers: "1044",
    today: "99",
    color: "Twitter",
  },
  {
    icon: "../images/icon-instagram.svg",
    followers: "11k",
    today: "1099",
    color: "Instagram",
  },
  {
    icon: "../images/icon-youtube.svg",
    followers: "8239",
    today: "144",
    color: "YouTube",
  },
];

const socialsCount = [
  {
    name: "Page Views",
    val: 87,
    icon: "../images/icon-facebook.svg",
    crois: {
      val: "3",
      type: "up",
    },
  },
  {
    name: "Likes",
    val: 52,
    icon: "../images/icon-facebook.svg",
    crois: {
      val: "2",
      type: "down",
    },
  },
  {
    name: "Likes",
    val: 5462,
    icon: "../images/icon-instagram.svg",
    crois: {
      val: "2257",
      type: "up",
    },
  },
  {
    name: "Profile Views",
    val: "52k",
    icon: "../images/icon-instagram.svg",
    crois: {
      val: "1375",
      type: "up",
    },
  },
  {
    name: "Retweets",
    val: 117,
    icon: "../images/icon-twitter.svg",
    crois: {
      val: "303",
      type: "up",
    },
  },
  {
    name: "Likes",
    val: 507,
    icon: "../images/icon-twitter.svg",
    crois: {
      val: "553",
      type: "up",
    },
  },
  {
    name: "Likes",
    val: 107,
    icon: "../images/icon-youtube.svg",
    crois: {
      val: "12",
      type: "down",
    },
  },
  {
    name: "Total Views",
    val: 1407,
    icon: "../images/icon-youtube.svg",
    crois: {
      val: "12",
      type: "down",
    },
  },
];

//  ${socialListDetail.map((item) => `<li>${item}</li>`).join("")}

document.getElementById("socialsFlowers")!.innerHTML = `
         ${socialListDetail
           .map(
             (item, index) => ` <div
          class="cursor-pointer max-w-64 w-full max-md:max-w-none max-md:w-full h-56 rounded-md border-t-4 ${
            index == 0 ? "border-Facebook" : ""
          } ${index == 1 ? "border-Twitter" : ""} ${
               index == 2 ? "border-Instagram" : ""
             }  ${
               index == 3 ? "border-YouTube" : ""
             } dark:bg-Dark-Desaturated-Blue-Card-BG dark:hover:bg-[#333A55] bg-Light-Grayish-Blue-Card-BG hover:bg-[#E1E4F0] flex flex-col items-center justify-center gap-6  transition-all">
          <div class="flex items-center justify-center gap-2">
            <img src=${item.icon} alt="">
            <span class="text-xs font-bold dark:text-Desaturated-Blue-Text text-Dark-Grayish-Blue-Text">@nathanf</span>
          </div>
          <div class="flex flex-col  items-center gap-2">
            <span class="text-5xl dark:text-White-Text text-Very-Dark-Blue-Text font-bold">${
              item.followers
            }</span>
            <span class="text-xs tracking-[.3rem] text-[#63687D] dark:text-[#8C98C6]">Followers</span>
          </div>
          <div class="flex items-center justify-center gap-2">
            <img  ${
              index == 3
                ? 'src="../images/icon-down.svg"'
                : 'src="./images/icon-up.svg"'
            }  alt="">
            <span class="text-xs font-bold  text-Lime-Green ${
              index == 3 ? "text-YouTube" : ""
            }">${item.today} Today</span>
          </div>
        </div>`
           )
           .join("")}
`;

document.getElementById("socialsCount")!.innerHTML = `
   ${socialsCount
     .map(
       (item) => `
   <div
            class="flex flex-col justify-between h-32 max-w-64 w-full max-md:max-w-none max-md:w-full p-6  rounded-md dark:bg-Dark-Desaturated-Blue-Card-BG dark:hover:bg-[#333A55] bg-Light-Grayish-Blue-Card-BG hover:bg-[#E1E4F0]  transition-all">
            <div class="flex justify-between items-center">
              <span class="font-bold text-sm dark:text-[#8C98C6] text-Very-[#63687D] transition-all">${
                item.name
              }</span>
              <img src=${item.icon} alt="">
            </div>
            <div class="flex justify-between items-center">
              <span class="font-bold text-3xl dark:text-White-Text text-Very-Dark-Blue-Text transition-all">${
                item.val
              }</span>
              <span class="flex items-center gap-2">
                <img src=${
                  item.crois.type == "up"
                    ? "../images/icon-up.svg"
                    : "../images/icon-down.svg"
                } alt="">
                <span class="font-bold text-xs text-${
                  item.crois.type == "up" ? `Lime-Green` : `Bright-Red`
                }
                }">${item.crois.val}%</span>
              </span>
            </div>
          </div>
   `
     )
     .join("")}
`;
