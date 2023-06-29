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
  localStorage.setItem("userData-formatter", JSON.stringify({language, platform, enabledCookie, positionUser, sizeScreen}))
  
  try {
    const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({ language, platform, enabledCookie, positionUser, sizeScreen })
      })
    return response
  } catch (error) {
    throw Error("Server Error")
  } 
  
  
  

}

export default userInfo