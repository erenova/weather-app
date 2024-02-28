import setSearchResult from "../function/searchForm";

const successCallback = (position) => {
  setSearchResult(
    `${position.coords.latitude},${position.coords.longitude}`,
    true,
  );
};

const errorCallback = () => {
  setSearchResult("Istanbul");
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
