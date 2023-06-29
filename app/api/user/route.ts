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

    const data: IUserInfo = { language, platform, enabledCookie, sizeScreen, positionUser }
    await User.create(data)
    
    return new Response("Items add successfully", { status: 201 })
  } catch (error) {
    return new Response(JSON.stringify("Server Error" + error), { status: 500 })
  }
}