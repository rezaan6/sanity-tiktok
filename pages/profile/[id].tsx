import axios from "axios"
import Image from "next/image"
import { GoVerified } from "react-icons/go"
import { BASE_URL } from "../../utils"

interface IProps{
  data:{
    user:IUser,
    userVideos:VIdeo[],
    userLikedVideos:Video[],
  }
}

const Profile = (data:IProps) => {
  const {user, userVideos, userLikedVideos} = data
  return <div className="w-full">
    <div className="flex gap-6 md:gap-10 mb-4 bg-white w-full">
    <div className="w-16 h-16 md:w-31 md:h-32">
                <Image
                  src={user.image}
                  width={34}
                  height={34}
                  className="rounded-full"
                  alt="user profile"
                  layout="responsive"
                />
              </div>
              <div className="flex felx-col justify-center">
                <p className="md:text=2xl flex gap-1 items-center text-md font-bold text-primary lowercase">
                  {user.userName.replaceAll(' ', '')}
                  <GoVerified className="text-blue-400" />
                </p>
                <p className="capitalize text-gray-400"></p>
              </div>
    </div>
    
  </div>
}

export const getServerSideProps = async ({
  params: { id },
}: {
  params: { id: string }
}) => {
    const res = await axios.get(`${BASE_URL}/api/profile/${id}`)

    return {
      props:{data: res.data}
    }
}

export default Profile
