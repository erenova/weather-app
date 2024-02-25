import "./tailwind.css";
import "./style.css";
import "./additional.css";
import "./modules/API/handleApi";
import "./modules/interface/desktopUI";
import "./modules/interface/mobileUI";
import "./modules/function/clock";
import "./modules/interface/weatherBlocks";
import "./modules/interface/popup";
import setSearchResult from "./modules/function/searchForm";
import { loadingEffect } from "./modules/interface/generalUI";

/* Start Page Result */
loadingEffect(true);
// setSearchResult("Istanbul");
