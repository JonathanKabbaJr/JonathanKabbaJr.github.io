const main = document.getElementById("main");

async function getBusRoute() {
  let busRoute = document.getElementById("busroute").value;

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute;

    try {
       
        const resRaw = await fetch(busRouteURL);
        const route = await resRaw.json();
        let title, latMax, latMin, lonMax, lonMin;
        let message = "";
        if (typeof route.title !== "undefined") {
          title = route.title;
          latMax = route.lat_max;
          latMin = route.lat_min;
          lonMax = route.lon_max;
          lonMin = route.lon_min;
          sessionStorage.setItem('title', title);
          sessionStorage.setItem('latMax', latMax);
          sessionStorage.setItem('latMin', latMin);
          sessionStorage.setItem('lonMax', lonMax);
          sessionStorage.setItem('lonMin', lonMin);
          message =
            title +
            " <br>Lat max : " +
            latMax +
            " <br>Lat min : " +
            latMin +
            " <br>Lon Max : " +
            lonMax +
            " <br>Lon Min :" +
            lonMin;
        } else {
          message = "No bus info available";
        }
        console.log(title);
        main.innerHTML = "Bus Route Info: " + message;
    } catch (err) {
        console.log(err);
        main.innerHTML = "Invalid bus route";
    }
      
  } else {
    main.innerHTML = "No value provided";
  }
}
