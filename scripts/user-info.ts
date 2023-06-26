async function userInfo() {

  const language = navigator.language;
  const platform = navigator.userAgent;
  const enabledCookie = navigator.cookieEnabled;
  const sizeScreen = window.innerWidth <= 768 ? "Mobile device" : "Desktop";
  const positionUser = {
    latitude: 0,
    longitude: 0
  }

  const getLatLong = new Promise((resolve) => {
    navigator.geolocation?.getCurrentPosition(position => {
      positionUser.latitude = position.coords.latitude
      positionUser.longitude = position.coords.longitude
      resolve(true)
    }) 
  })

  await getLatLong 
  //TODO: Cadastra no banco de dados
  console.log("No Granted", language, platform, enabledCookie, positionUser, sizeScreen);

// if (navigator.permissions && navigator.permissions.query) {
//   navigator.permissions.query({ name: "geolocation" })
//     .then(permissionStatus => {
//       if(permissionStatus.state === "granted") {
//          navigator.geolocation?.getCurrentPosition(position => {
//           positionUser.latitude = position.coords.latitude
//           positionUser.longitude = position.coords.latitude
//           }) 
//         console.log("No Granted", language, platform, enabledCookie, positionUser.latitude, positionUser.longitude) 
//       } else if(permissionStatus.state === "prompt") {
//         console.log("No Prompt", language, platform, enabledCookie, positionUser)
//       } else {
//         console.log("No denied", language, platform, enabledCookie)
//       }
//       console.log(permissionStatus.state)
//     }).catch(err => console.log(err))
//   }
}

export default userInfo