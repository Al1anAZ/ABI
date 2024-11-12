const header = document.getElementsByClassName("header")[0];
const mainBtnContainer = document.getElementsByClassName(
  "main__textAndBtnsContainer"
)[0];
const mainTitleContainer = document.getElementsByClassName(
  "main__titleContainer"
)[0];

let currentSection = 0;
let currentIsNotAllStage = 0;
let currentFeedBackStage = 0;
let currentWeOfferStage = 0;
let currentFeatureListings = 0;
let currenPaymentPlan = 0;
const sections = document.getElementsByTagName("section");
const mainSection = document.querySelector(".main");
const statsSection = document.querySelector(".stats");
const textSection = document.querySelector(".text");
const IsNotAllSection = document.querySelector(".isNotAll");
const feedBackSection = document.querySelector(".feedBack");
const featuredListingsSection = document.querySelector(".featuredListings");
const weOfferYouSection = document.querySelector(".weOfferYou");
const paymentPlanSection = document.querySelector(".paymentPlan");
const joinUsSection = document.querySelector(".joinUs");
const askAnswerSection = document.querySelector(".askAnswer");
const containerFeaturedListings = document.querySelector(
  ".featuredListings__prjctsContainer"
);
const items = document.querySelectorAll(".stats__item");
const spans = document.querySelectorAll(".text__titile");

let currentItem = 0;
let currentSpan = 0;
let isAnimatingStats = false;
let isAnimatingText = false;
let isAnimatingIsNotAll = false;
let isAnimatingFeedBack = false;
let isAnimatingWeOfferU = false;
let isAnimatingFeatureListings = false;
let isAnimatingPaymentPlan = false;
let firstAnimationWeOfferU = true;
function scrollToSection(index) {
  sections[index].scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  containerFeaturedListings.scrollLeft =
    (containerFeaturedListings.scrollWidth -
      containerFeaturedListings.clientWidth) /
    2;
});
if (window.innerWidth > 1430) {
  window.addEventListener("wheel", (event) => {
    if (currentSection === 1) {
      //Анимация для stats
      if (!isAnimatingStats) {
        if (event.deltaY > 0 && currentItem < items.length - 1) {
          isAnimatingStats = true;
          items[currentItem].style.opacity = 0;
          currentItem++;
          statsSection.querySelector(
            ".stats__content"
          ).style.transform = `translateX(-${currentItem * 100}vw)`;
          setTimeout(() => {
            items[currentItem].style.opacity = 1;
            isAnimatingStats = false;
          }, 600);
        } else if (event.deltaY < 0 && currentItem > 0) {
          isAnimatingStats = true;
          items[currentItem].style.opacity = 0;
          currentItem--;
          statsSection.querySelector(
            ".stats__content"
          ).style.transform = `translateX(-${currentItem * 100}vw)`;
          setTimeout(() => {
            items[currentItem].style.opacity = 1;
            isAnimatingStats = false;
          }, 600);
        } else if (event.deltaY > 0 && currentItem === items.length - 1) {
          currentSection++;
          scrollToSection(currentSection);
        } else if (event.deltaY < 0 && currentItem === 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
      }
    }
    //Анимация для WeOfferU
    else if (currentSection === 2) {
      if (!isAnimatingWeOfferU) {
        if (event.deltaY > 0 && currentWeOfferStage === 2) {
          currentSection++;
          scrollToSection(currentSection);
        } else if (event.deltaY > 0 && currentWeOfferStage < 2) {
          if (!firstAnimationWeOfferU) {
            isAnimatingWeOfferU = true;
            currentWeOfferStage++;
            handleWeOfferUStage(currentWeOfferStage);
          }
          setTimeout(() => {
            isAnimatingWeOfferU = false;
            firstAnimationWeOfferU = false;
          }, 1500);
        } else if (event.deltaY < 0 && currentWeOfferStage > 0) {
          isAnimatingWeOfferU = true;
          currentWeOfferStage--;
          handleWeOfferUStage(currentWeOfferStage);
          setTimeout(() => {
            isAnimatingWeOfferU = false;
          }, 1500);
        } else if (event.deltaY < 0 && currentWeOfferStage === 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
      }
    }
    //Анимация для text
    else if (currentSection === 3) {
      if (!isAnimatingText) {
        if (event.deltaY > 0 && currentSpan < spans.length) {
          isAnimatingText = true;
          spans[currentSpan].classList.add("text__titile__active");
          currentSpan++;
          setTimeout(() => {
            isAnimatingText = false;
          }, 300);
        } else if (event.deltaY < 0 && currentSpan > 0) {
          isAnimatingText = true;
          currentSpan--;
          spans[currentSpan].classList.remove("text__titile__active");
          setTimeout(() => {
            isAnimatingText = false;
          }, 300);
        } else if (event.deltaY > 0 && currentSpan === spans.length) {
          currentSection++;
          scrollToSection(currentSection);
        } else if (event.deltaY < 0 && currentSpan === 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
      }
    }
    //Анимация для FeatureListins
    else if (currentSection === 4) {
      if (!isAnimatingFeatureListings) {
        if (event.deltaY > 0 && currentFeatureListings === 1) {
          currentSection++;
          scrollToSection(currentSection);
        } else if (event.deltaY > 0 && currentFeatureListings < 1) {
          isAnimatingFeatureListings = true;
          currentFeatureListings++;
          handleFeaturedListings(currentFeatureListings);
          setTimeout(() => {
            isAnimatingFeatureListings = false;
          }, 500);
        } else if (event.deltaY < 0 && currentFeatureListings > 0) {
          isAnimatingFeatureListings = true;
          currentFeatureListings--;
          handleFeaturedListings(currentFeatureListings);
          setTimeout(() => {
            isAnimatingFeatureListings = false;
          }, 500);
        } else if (event.deltaY < 0 && currentFeatureListings === 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
      }
    }
    //Анимация для isNotAll
    else if (currentSection === 5) {
      if (!isAnimatingIsNotAll) {
        if (event.deltaY > 0 && currentIsNotAllStage === 2) {
          currentSection++;
          scrollToSection(currentSection);
        } else if (event.deltaY > 0 && currentIsNotAllStage < 2) {
          isAnimatingIsNotAll = true;
          currentIsNotAllStage++;
          handleThirdStage(currentIsNotAllStage);
          setTimeout(() => {
            isAnimatingIsNotAll = false;
          }, 500);
        } else if (event.deltaY < 0 && currentIsNotAllStage > 0) {
          isAnimatingIsNotAll = true;
          currentIsNotAllStage--;
          handleThirdStage(currentIsNotAllStage);
          setTimeout(() => {
            isAnimatingIsNotAll = false;
          }, 500);
        } else if (event.deltaY < 0 && currentIsNotAllStage === 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
      }
    }
    //Анимация для FeedBack
    else if (currentSection === 6) {
      if (!isAnimatingFeedBack) {
        if (event.deltaY > 0 && currentFeedBackStage === 3) {
          currentSection++;
          scrollToSection(currentSection);
        } else if (event.deltaY > 0 && currentFeedBackStage < 3) {
          isAnimatingFeedBack = true;
          currentFeedBackStage++;
          handleFeedBackStage(currentFeedBackStage);
          setTimeout(() => {
            isAnimatingFeedBack = false;
          }, 500);
        } else if (event.deltaY < 0 && currentFeedBackStage > 0) {
          isAnimatingFeedBack = true;
          currentFeedBackStage--;
          handleFeedBackStage(currentFeedBackStage);
          setTimeout(() => {
            isAnimatingFeedBack = false;
          }, 500);
        } else if (event.deltaY < 0 && currentFeedBackStage === 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
      }
    }
    //Анимация для PaymentPlan
    else if (currentSection === 7) {
      if (!isAnimatingPaymentPlan) {
        if (event.deltaY > 0 && currenPaymentPlan === 1) {
          currentSection++;
          scrollToSection(currentSection);
        } else if (event.deltaY > 0 && currenPaymentPlan < 1) {
          isAnimatingPaymentPlan = true;
          currenPaymentPlan++;
          handlePaymentPlan(currenPaymentPlan);
          setTimeout(() => {
            isAnimatingPaymentPlan = false;
          }, 500);
        } else if (event.deltaY < 0 && currenPaymentPlan > 0) {
          isAnimatingPaymentPlan = true;
          currenPaymentPlan--;
          handlePaymentPlan(currenPaymentPlan);
          setTimeout(() => {
            isAnimatingPaymentPlan = false;
          }, 500);
        } else if (event.deltaY < 0 && currenPaymentPlan === 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
      }
    } else {
      if (event.deltaY > 0) {
        if (currentSection < sections.length - 1) {
          if (currentSection < 9) {
            currentSection++;
            scrollToSection(currentSection);
          }
        }
      } else {
        if (currentSection > 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
      }
    }

    if (currentSection !== 0) {
      mainSection.classList.add("main__hidden");
    } else {
      mainSection.classList.remove("main__hidden");
    }
    if (currentSection !== 1) {
      statsSection.classList.add("stats__hidden");
    } else {
      statsSection.classList.remove("stats__hidden");
    }
    if (currentSection !== 3) {
      textSection.classList.add("text__hidden");
    } else {
      textSection.classList.remove("text__hidden");
    }
    if (currentSection !== 4) {
      featuredListingsSection.classList.add("featuredListings__hidden");
    } else {
      featuredListingsSection.classList.remove("featuredListings__hidden");
    }
    if (currentSection !== 5) {
      IsNotAllSection.classList.add("isNotAll__hidden");
    } else {
      IsNotAllSection.classList.remove("isNotAll__hidden");
    }
    if (currentSection !== 6) {
      feedBackSection.classList.add("feedBack__hidden");
    } else {
      feedBackSection.classList.remove("feedBack__hidden");
    }
    if (currentSection !== 7) {
      paymentPlanSection.classList.add("paymentPlan__hidden");
    } else {
      paymentPlanSection.classList.remove("paymentPlan__hidden");
    }
    if (currentSection !== 8) {
      askAnswerSection.classList.add("askAnswer__hidden");
    } else {
      askAnswerSection.classList.remove("askAnswer__hidden");
    }
    if (currentSection !== 9) {
      joinUsSection.classList.add("joinUs__hidden");
    } else {
      joinUsSection.classList.remove("joinUs__hidden");
    }
    if (currentSection !== 2) {
      firstAnimationWeOfferU = true;
      diagramSecond.classList.add("weOfferYou__diagramSecond__animationOut");
      diagramFirst.classList.add("weOfferYou__diagramFirst__animationOut");
      diagramFirst.classList.remove("weOfferYou__diagramFirst__animationIn");
      diagramSecond.classList.remove("weOfferYou__diagramSecond__animationIn");
      leftSideDiagramText.classList.remove(
        "weOfferYou__leftSideContainer__text__leftSideDiagramTextIn"
      );
      leftSideDiagramText.classList.add(
        "weOfferYou__leftSideContainer__text__leftSideDiagramTextOut"
      );
      leftSideDiagramTopCard.classList.add(
        "weOfferYou__leftSideContainer__topCard__leftSideDiagramTopCardOut"
      );
      leftSideDiagramTopCard.classList.remove(
        "weOfferYou__leftSideContainer__topCard__leftSideDiagramTopCardIn"
      );
      leftSideDiagramTitle.classList.add(
        "weOfferYou__leftSideContainer__topContainer__title__leftSideDiagramTitleOut"
      );
      leftSideDiagramTitle.classList.remove(
        "weOfferYou__leftSideContainer__topContainer__title__leftSideDiagramTitleIn"
      );
      weOfferYouSection.classList.add("weOfferYou__hidden");
    } else {
      if (!isAnimatingWeOfferU) {
        leftSideDiagramTitle.classList.add(
          "weOfferYou__leftSideContainer__topContainer__title__leftSideDiagramTitleIn"
        );
        leftSideDiagramTitle.classList.remove(
          "weOfferYou__leftSideContainer__topContainer__title__leftSideDiagramTitleOut"
        );
        leftSideDiagramTopCard.classList.add(
          "weOfferYou__leftSideContainer__topCard__leftSideDiagramTopCardIn"
        );
        leftSideDiagramTopCard.classList.remove(
          "weOfferYou__leftSideContainer__topCard__leftSideDiagramTopCardOut"
        );
        leftSideDiagramText.classList.remove(
          "weOfferYou__leftSideContainer__text__leftSideDiagramTextOut"
        );
        leftSideDiagramText.classList.add(
          "weOfferYou__leftSideContainer__text__leftSideDiagramTextIn"
        );
        diagramSecond.classList.add("weOfferYou__diagramSecond__animationIn");
        diagramFirst.classList.add("weOfferYou__diagramFirst__animationIn");
        diagramFirst.classList.remove("weOfferYou__diagramFirst__animationOut");
        diagramSecond.classList.remove(
          "weOfferYou__diagramSecond__animationOut"
        );
      }
      weOfferYouSection.classList.remove("weOfferYou__hidden");
    }
  });
  setTimeout(() => {
    header.classList.add("header__active");
    mainBtnContainer.classList.add("main__textAndBtnsContainer__active");
    mainTitleContainer.classList.add("main__titleContainer__active");
  }, 1200);
}

document
  .getElementById("header__menu__toggle")
  .addEventListener("change", function () {
    const svgIconOne = document.querySelector(".svg-icon-one");
    const svgIconTwo = document.querySelector(".svg-icon-two");

    if (this.checked) {
      svgIconOne.style.display = "none";
      svgIconTwo.style.display = "block";
    } else {
      svgIconOne.style.display = "block";
      svgIconTwo.style.display = "none";
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const dropDownContainers = document.querySelectorAll(
    ".askAnswer__dropDownContainer"
  );

  dropDownContainers.forEach(function (container) {
    container.addEventListener("click", function (event) {
      event.stopPropagation();

      dropDownContainers.forEach(function (item) {
        if (item !== container) {
          item.classList.remove("askAnswer__dropDownContainer__active");
        }
      });

      this.classList.toggle("askAnswer__dropDownContainer__active");
    });
  });

  document.addEventListener("click", function () {
    dropDownContainers.forEach(function (container) {
      container.classList.remove("askAnswer__dropDownContainer__active");
    });
  });
});

const contentContainerIsNotAll =
  IsNotAllSection.querySelector(".isNotAll__content");
const titleContainerIsNotAll = IsNotAllSection.querySelector(
  ".isNotAll__titleContainer"
);

const itemsIsNotAll = IsNotAllSection.querySelectorAll(".isNotAll__item");
function handleThirdStage(stage) {
  switch (stage) {
    case 0:
      // Этап 0: Начальное состояние
      itemsIsNotAll[0].classList.remove("isNotAll__item__activeStage1");
      itemsIsNotAll[1].classList.remove("isNotAll__item__activeStage1");
      titleContainerIsNotAll.style.display = "flex";
      titleContainerIsNotAll.classList.remove(
        "isNotAll__titleContainer__activeStage1"
      );
      setTimeout(() => {
        contentContainerIsNotAll.style.display = "none";
      }, 500);
      break;
    case 1:
      // Этап 1: Показываем contentContainer
      contentContainerIsNotAll.style.display = "flex";
      contentContainerIsNotAll.style.justifyContent = "space-between";
      contentContainerIsNotAll.style.gap = "80px";
      titleContainerIsNotAll.classList.add(
        "isNotAll__titleContainer__activeStage1"
      );
      titleContainerIsNotAll.classList.remove(
        "isNotAll__titleContainer__activeStage2"
      );
      itemsIsNotAll[0].classList.remove("isNotAll__item__activeStage2");
      itemsIsNotAll[1].classList.remove("isNotAll__item__activeStage2");
      itemsIsNotAll[2].classList.remove("isNotAll__item__activebottomItems");
      itemsIsNotAll[3].classList.remove("isNotAll__item__activebottomItems");
      titleContainerIsNotAll.style.display = "flex";
      setTimeout(() => {
        itemsIsNotAll[0].classList.add("isNotAll__item__activeStage1");
        itemsIsNotAll[1].classList.add("isNotAll__item__activeStage1");
      }, 100);
      break;
    case 2:
      itemsIsNotAll[0].classList.add("isNotAll__item__activeStage2");
      itemsIsNotAll[1].classList.add("isNotAll__item__activeStage2");
      titleContainerIsNotAll.classList.add(
        "isNotAll__titleContainer__activeStage2"
      );
      setTimeout(() => {
        itemsIsNotAll[2].classList.add("isNotAll__item__activebottomItems");
        itemsIsNotAll[3].classList.add("isNotAll__item__activebottomItems");
      }, 100); // Задержка перед запуском анимации
      break;
    default:
      break;
  }
}

const feedBackTitle = document.querySelector(".feedBack__title");
const feedBackItemCard = document.getElementsByClassName("feedBack__item");
function handleFeedBackStage(stage) {
  switch (stage) {
    case 0:
      feedBackTitle.classList.remove("feedBack__title__first");
      feedBackItemCard[0].classList.remove("feedBack__item__first__top");
      break;
    case 1:
      feedBackItemCard[0].classList.add("feedBack__item__first__top");
      feedBackItemCard[0].classList.remove("feedBack__item__first__hide");
      feedBackItemCard[1].classList.remove("feedBack__item__second__top");
      feedBackTitle.classList.add("feedBack__title__first");
      feedBackTitle.classList.remove("feedBack__title__second");
      break;
    case 2:
      feedBackItemCard[0].classList.add("feedBack__item__first__hide");
      feedBackItemCard[1].classList.add("feedBack__item__second__top");
      feedBackItemCard[1].classList.remove("feedBack__item__second__hide");
      feedBackItemCard[2].classList.remove("feedBack__item__third__top");
      feedBackTitle.classList.add("feedBack__title__second");
      feedBackTitle.classList.remove("feedBack__title__third");
      break;
    case 3:
      feedBackTitle.classList.add("feedBack__title__third");
      feedBackItemCard[1].classList.add("feedBack__item__second__hide");
      feedBackItemCard[2].classList.add("feedBack__item__third__top");
      break;
    default:
      break;
  }
}

const diagramFirst = document.querySelector(".weOfferYou__diagramFirst");
const diagramSecond = document.querySelector(".weOfferYou__diagramSecond");

const leftSideContainer = document.querySelector(
  ".weOfferYou__leftSideContainer"
);
const leftSideContainerSecondStage = document.querySelector(
  ".weOfferYou__leftSideContainerSecondStage"
);
const rightSideSecondStage = document.querySelector(
  ".weOfferYou__rightSideSecondStage"
);
const rightSide = document.querySelector(".weOfferYou__rightSide");

const leftSideDiagramText = document.querySelector(
  ".weOfferYou__leftSideContainer__text"
);
const leftSideDiagramTopCard = document.querySelector(
  ".weOfferYou__leftSideContainer__topCard"
);
const leftSideDiagramTitle = document.querySelector(
  ".weOfferYou__leftSideContainer__topContainer__title"
);
const leftSideDiagramTextSecondStage = document.querySelector(
  ".weOfferYou__leftSideContainerSecondStage__text"
);
const leftSideDiagramTopCardSecondStage = document.querySelector(
  ".weOfferYou__leftSideContainerSecondStage__topCard"
);
const leftSideDiagramTitleSecondStage = document.querySelector(
  ".weOfferYou__leftSideContainerSecondStage__topContainer__title"
);

const firstLeadCard = document.querySelector(
  ".weOfferYou__leftSideContainerSecondStage__item"
);
const secondLeadCard = document.querySelector(
  ".weOfferYou__leftSideContainerSecondStage__item__medium"
);
const thirdLeadCard = document.querySelector(
  ".weOfferYou__leftSideContainerSecondStage__item__small"
);

const leftSideContainerThirdStage = document.querySelector(
  ".weOfferYou__leftSideContainerThirdStage"
);
const rightSideThirdStage = document.querySelector(
  ".weOfferYou__rightSideThirdStage"
);
const leftSideDiagramTextThirdStage = document.querySelector(
  ".weOfferYou__leftSideContainerThirdStage__text"
);
const leftSideDiagramTopCardThirdStage = document.querySelector(
  ".weOfferYou__leftSideContainerThirdStage__topCard"
);
const leftSideDiagramTitleThirdStage = document.querySelector(
  ".weOfferYou__leftSideContainerThirdStage__topContainer__title"
);
const taskCards = document.getElementsByClassName(
  "weOfferYou__rightSideThirdStage__taskItem"
);

let firstAnimWeOfferUFlag = false;

function handleWeOfferUStage(stage) {
  switch (stage) {
    case 0:
      if (firstAnimWeOfferUFlag) {
        leftSideDiagramTitle.classList.add(
          "weOfferYou__leftSideContainer__topContainer__title__leftSideDiagramTitleIn"
        );
        leftSideDiagramTitle.classList.remove(
          "weOfferYou__leftSideContainer__topContainer__title__leftSideDiagramTitleOut"
        );
        leftSideDiagramTopCard.classList.add(
          "weOfferYou__leftSideContainer__topCard__leftSideDiagramTopCardIn"
        );
        leftSideDiagramTopCard.classList.remove(
          "weOfferYou__leftSideContainer__topCard__leftSideDiagramTopCardOut"
        );
        leftSideDiagramText.classList.remove(
          "weOfferYou__leftSideContainer__text__leftSideDiagramTextOut"
        );
        leftSideDiagramText.classList.add(
          "weOfferYou__leftSideContainer__text__leftSideDiagramTextIn"
        );
        diagramSecond.classList.add("weOfferYou__diagramSecond__animationIn");
        diagramFirst.classList.add("weOfferYou__diagramFirst__animationIn");
        diagramFirst.classList.remove("weOfferYou__diagramFirst__animationOut");
        diagramSecond.classList.remove(
          "weOfferYou__diagramSecond__animationOut"
        );
      }
      firstAnimWeOfferUFlag = false;
      leftSideDiagramTitleSecondStage.classList.remove(
        "weOfferYou__leftSideContainerSecondStage__topContainer__title__leftSideDiagramTitleIn"
      );
      leftSideDiagramTopCardSecondStage.classList.remove(
        "weOfferYou__leftSideContainerSecondStage__topCard__leftSideDiagramTopCardIn"
      );
      leftSideDiagramTextSecondStage.classList.remove(
        "weOfferYou__leftSideContainerSecondStage__text__leftSideDiagramTextIn"
      );
      leftSideDiagramTitleSecondStage.classList.add(
        "weOfferYou__leftSideContainerSecondStage__topContainer__title__leftSideDiagramTitleOut"
      );
      leftSideDiagramTopCardSecondStage.classList.add(
        "weOfferYou__leftSideContainerSecondStage__topCard__leftSideDiagramTopCardOut"
      );
      leftSideDiagramTextSecondStage.classList.add(
        "weOfferYou__leftSideContainerSecondStage__text__leftSideDiagramTextOut"
      );

      firstLeadCard.classList.remove(
        "weOfferYou__leftSideContainerSecondStage__item__animationFirstIn"
      );
      firstLeadCard.classList.add(
        "weOfferYou__leftSideContainerSecondStage__item__animationFirstOut"
      );

      secondLeadCard.classList.remove(
        "weOfferYou__leftSideContainerSecondStage__item__animationSecondIn"
      );
      secondLeadCard.classList.add(
        "weOfferYou__leftSideContainerSecondStage__item__animationSecondOut"
      );

      thirdLeadCard.classList.remove(
        "weOfferYou__leftSideContainerSecondStage__item__animationThirdIn"
      );
      thirdLeadCard.classList.add(
        "weOfferYou__leftSideContainerSecondStage__item__animationSecondOut"
      );

      setTimeout(() => {
        leftSideContainerSecondStage.style.display = "none";
        rightSideSecondStage.style.display = "none";
        leftSideContainer.style.display = "flex";
        rightSide.style.display = "flex";
      }, 600);
      break;
    case 1:
      firstAnimWeOfferUFlag = true;
      diagramSecond.classList.add("weOfferYou__diagramSecond__animationOut");
      diagramFirst.classList.add("weOfferYou__diagramFirst__animationOut");
      diagramFirst.classList.remove("weOfferYou__diagramFirst__animationIn");
      diagramSecond.classList.remove("weOfferYou__diagramSecond__animationIn");
      leftSideDiagramText.classList.remove(
        "weOfferYou__leftSideContainer__text__leftSideDiagramTextIn"
      );
      leftSideDiagramText.classList.add(
        "weOfferYou__leftSideContainer__text__leftSideDiagramTextOut"
      );
      leftSideDiagramTopCard.classList.add(
        "weOfferYou__leftSideContainer__topCard__leftSideDiagramTopCardOut"
      );
      leftSideDiagramTopCard.classList.remove(
        "weOfferYou__leftSideContainer__topCard__leftSideDiagramTopCardIn"
      );
      leftSideDiagramTitle.classList.add(
        "weOfferYou__leftSideContainer__topContainer__title__leftSideDiagramTitleOut"
      );
      leftSideDiagramTitle.classList.remove(
        "weOfferYou__leftSideContainer__topContainer__title__leftSideDiagramTitleIn"
      );

      leftSideDiagramTitleThirdStage.classList.remove(
        "weOfferYou__leftSideContainerThirdStage__topContainer__title__leftSideDiagramTitleIn"
      );
      leftSideDiagramTopCardThirdStage.classList.remove(
        "weOfferYou__leftSideContainerThirdStage__topCard__leftSideDiagramTopCardIn"
      );
      leftSideDiagramTextThirdStage.classList.remove(
        "weOfferYou__leftSideContainerThirdStage__text__leftSideDiagramTextIn"
      );
      leftSideDiagramTitleThirdStage.classList.add(
        "weOfferYou__leftSideContainerThirdStage__topContainer__title__leftSideDiagramTitleOut"
      );
      leftSideDiagramTopCardThirdStage.classList.add(
        "weOfferYou__leftSideContainerThirdStage__topCard__leftSideDiagramTopCardOut"
      );
      leftSideDiagramTextThirdStage.classList.add(
        "weOfferYou__leftSideContainerThirdStage__text__leftSideDiagramTextOut"
      );
      taskCards[1].classList.remove(
        "weOfferYou__rightSideThirdStage__taskItem__animationFirstTaskIn"
      );
      taskCards[1].classList.add(
        "weOfferYou__rightSideThirdStage__taskItem__animationFirstTaskOut"
      );

      taskCards[0].classList.remove(
        "weOfferYou__rightSideThirdStage__taskItem__animationLastTaskIn"
      );
      taskCards[0].classList.add(
        "weOfferYou__rightSideThirdStage__taskItem__animationLastTaskOut"
      );
      taskCards[2].classList.remove(
        "weOfferYou__rightSideThirdStage__taskItem__animationLastTaskIn"
      );
      taskCards[2].classList.add(
        "weOfferYou__rightSideThirdStage__taskItem__animationLastTaskOut"
      );

      setTimeout(() => {
        leftSideContainerThirdStage.style.display = "none";
        rightSideThirdStage.style.display = "none";
        leftSideContainer.style.display = "none";
        rightSide.style.display = "none";
        leftSideContainerSecondStage.style.display = "flex";
        rightSideSecondStage.style.display = "flex";

        firstLeadCard.classList.add(
          "weOfferYou__leftSideContainerSecondStage__item__animationFirstIn"
        );
        firstLeadCard.classList.remove(
          "weOfferYou__leftSideContainerSecondStage__item__animationFirstOut"
        );
        secondLeadCard.classList.add(
          "weOfferYou__leftSideContainerSecondStage__item__animationSecondIn"
        );
        secondLeadCard.classList.remove(
          "weOfferYou__leftSideContainerSecondStage__item__animationSecondOut"
        );

        thirdLeadCard.classList.add(
          "weOfferYou__leftSideContainerSecondStage__item__animationThirdIn"
        );
        thirdLeadCard.classList.remove(
          "weOfferYou__leftSideContainerSecondStage__item__animationSecondOut"
        );

        leftSideDiagramTitleSecondStage.classList.add(
          "weOfferYou__leftSideContainerSecondStage__topContainer__title__leftSideDiagramTitleIn"
        );
        leftSideDiagramTopCardSecondStage.classList.add(
          "weOfferYou__leftSideContainerSecondStage__topCard__leftSideDiagramTopCardIn"
        );
        leftSideDiagramTextSecondStage.classList.add(
          "weOfferYou__leftSideContainerSecondStage__text__leftSideDiagramTextIn"
        );
        leftSideDiagramTitleSecondStage.classList.remove(
          "weOfferYou__leftSideContainerSecondStage__topContainer__title__leftSideDiagramTitleOut"
        );
        leftSideDiagramTopCardSecondStage.classList.remove(
          "weOfferYou__leftSideContainerSecondStage__topCard__leftSideDiagramTopCardOut"
        );
        leftSideDiagramTextSecondStage.classList.remove(
          "weOfferYou__leftSideContainerSecondStage__text__leftSideDiagramTextOut"
        );
      }, 600);
      break;
    case 2:
      firstLeadCard.classList.remove(
        "weOfferYou__leftSideContainerSecondStage__item__animationFirstIn"
      );
      firstLeadCard.classList.add(
        "weOfferYou__leftSideContainerSecondStage__item__animationFirstOut"
      );
      secondLeadCard.classList.remove(
        "weOfferYou__leftSideContainerSecondStage__item__animationSecondIn"
      );
      secondLeadCard.classList.add(
        "weOfferYou__leftSideContainerSecondStage__item__animationSecondOut"
      );

      thirdLeadCard.classList.remove(
        "weOfferYou__leftSideContainerSecondStage__item__animationThirdIn"
      );
      thirdLeadCard.classList.add(
        "weOfferYou__leftSideContainerSecondStage__item__animationSecondOut"
      );

      leftSideDiagramTitleSecondStage.classList.remove(
        "weOfferYou__leftSideContainerSecondStage__topContainer__title__leftSideDiagramTitleIn"
      );
      leftSideDiagramTopCardSecondStage.classList.remove(
        "weOfferYou__leftSideContainerSecondStage__topCard__leftSideDiagramTopCardIn"
      );
      leftSideDiagramTextSecondStage.classList.remove(
        "weOfferYou__leftSideContainerSecondStage__text__leftSideDiagramTextIn"
      );
      leftSideDiagramTitleSecondStage.classList.add(
        "weOfferYou__leftSideContainerSecondStage__topContainer__title__leftSideDiagramTitleOut"
      );
      leftSideDiagramTopCardSecondStage.classList.add(
        "weOfferYou__leftSideContainerSecondStage__topCard__leftSideDiagramTopCardOut"
      );
      leftSideDiagramTextSecondStage.classList.add(
        "weOfferYou__leftSideContainerSecondStage__text__leftSideDiagramTextOut"
      );

      setTimeout(() => {
        leftSideContainerThirdStage.style.display = "flex";
        rightSideThirdStage.style.display = "flex";
        leftSideContainerSecondStage.style.display = "none";
        rightSideSecondStage.style.display = "none";

        taskCards[1].classList.add(
          "weOfferYou__rightSideThirdStage__taskItem__animationFirstTaskIn"
        );
        taskCards[1].classList.remove(
          "weOfferYou__rightSideThirdStage__taskItem__animationFirstTaskOut"
        );
        taskCards[0].classList.add(
          "weOfferYou__rightSideThirdStage__taskItem__animationLastTaskIn"
        );
        taskCards[0].classList.remove(
          "weOfferYou__rightSideThirdStage__taskItem__animationLastTaskOut"
        );
        taskCards[2].classList.add(
          "weOfferYou__rightSideThirdStage__taskItem__animationLastTaskIn"
        );
        taskCards[2].classList.remove(
          "weOfferYou__rightSideThirdStage__taskItem__animationLastTaskOut"
        );

        leftSideDiagramTitleThirdStage.classList.add(
          "weOfferYou__leftSideContainerThirdStage__topContainer__title__leftSideDiagramTitleIn"
        );
        leftSideDiagramTopCardThirdStage.classList.add(
          "weOfferYou__leftSideContainerThirdStage__topCard__leftSideDiagramTopCardIn"
        );
        leftSideDiagramTextThirdStage.classList.add(
          "weOfferYou__leftSideContainerThirdStage__text__leftSideDiagramTextIn"
        );
        leftSideDiagramTitleThirdStage.classList.remove(
          "weOfferYou__leftSideContainerThirdStage__topContainer__title__leftSideDiagramTitleOut"
        );
        leftSideDiagramTopCardThirdStage.classList.remove(
          "weOfferYou__leftSideContainerThirdStage__topCard__leftSideDiagramTopCardOut"
        );
        leftSideDiagramTextThirdStage.classList.remove(
          "weOfferYou__leftSideContainerThirdStage__text__leftSideDiagramTextOut"
        );
      }, 600);
      break;
    default:
      break;
  }
}

const btnsFeatureListingsContainer = document.querySelector(
  ".featuredListings__btnAllPrjctContainer"
);
const projectsFeatureListingsContainer = document.querySelector(
  ".featuredListings__prjctsContainer"
);
const titleFeatureListingsContainer = document.querySelector(
  ".featuredListings__title"
);
function handleFeaturedListings(stage) {
  switch (stage) {
    case 0:
      projectsFeatureListingsContainer.style.top = "70px";
      titleFeatureListingsContainer.style.top = "70px";
      titleFeatureListingsContainer.style.opacity = "1";
      titleFeatureListingsContainer.style.visability = "visible";
      btnsFeatureListingsContainer.classList.add(
        "featuredListings__btnAllPrjctContainer__animationOut"
      );
      btnsFeatureListingsContainer.classList.remove(
        "featuredListings__btnAllPrjctContainer__animationIn"
      );
      break;
    case 1:
      projectsFeatureListingsContainer.style.top = "0px";
      titleFeatureListingsContainer.style.top = "0";
      titleFeatureListingsContainer.style.opacity = "0";
      titleFeatureListingsContainer.style.visability = "hidden";
      btnsFeatureListingsContainer.classList.remove(
        "featuredListings__btnAllPrjctContainer__animationOut"
      );
      btnsFeatureListingsContainer.classList.add(
        "featuredListings__btnAllPrjctContainer__animationIn"
      );

      break;
    default:
      break;
  }
}

const titlePaymentPlan = document.querySelector(".paymentPlan__title");
const paymentPlanOneTimePaymentPaymentPlan = document.querySelector(
  ".paymentPlan__oneTimePayment"
);
const plansContainerPaymentPlan = document.querySelector(
  ".paymentPlan__plansContainer"
);
function handlePaymentPlan(stage) {
  switch (stage) {
    case 0:
      titlePaymentPlan.style.bottom = "-270px";
      titlePaymentPlan.style.opacity = "1";
      titlePaymentPlan.style.visability = "visible";
      paymentPlanOneTimePaymentPaymentPlan.style.bottom = "-270px";
      plansContainerPaymentPlan.style.bottom = "-270px";
      break;
    case 1:
      titlePaymentPlan.style.bottom = "0";
      titlePaymentPlan.style.opacity = "0";
      titlePaymentPlan.style.visability = "hidden";
      paymentPlanOneTimePaymentPaymentPlan.style.bottom = "0";
      plansContainerPaymentPlan.style.bottom = "0";
      break;
    default:
      break;
  }
}
