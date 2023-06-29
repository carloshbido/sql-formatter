import User from '@/model/user'
import connectDb from '@/config/dbConn';

interface IUserInfo {
  language: string, 
  platform: string, 
  enabledCookie: boolean, 
  sizeScreen: string, 
  positionUser?: { 
    latitude: string,
    longitude: string
  }
}

export const POST = async(request: any, response: any) => {
  const { language, platform, enabledCookie, sizeScreen, positionUser } = await request.json()
  
  try {
    await connectDb();
<<<<<<< HEAD

    const data: IUserInfo = { language, platform, enabledCookie, sizeScreen, positionUser }
    await User.create(data)
    
=======
    const data: IUserInfo = { language, platform, enabledCookie, sizeScreen, positionUser }
    const user = await User.create(data)
>>>>>>> 4ac6c27d855e6cf17a693e2bb3463dc8b7c953d4
    return new Response("Items add successfully", { status: 201 })
  } catch (error) {
    return new Response("Server Error", { status: 500 })
  }
}