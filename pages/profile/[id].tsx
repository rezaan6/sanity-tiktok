import axios from "axios"
import { BASE_URL } from "../../utils"

interface IProps{
  data:{
    user:IUser,
    userVideos:VIdeo[],
    userLikedVideos:Video[],
  }
}

const Profile = (data:IProps) => {
  return <div className="">Profile</div>
}

export const getServerSideProps = async ({
  params: { id },
}: {
  params: { id: string }
}) => {
    const res = await axios.get(`${BASE_URL}/profile/${id}`)

    return {
      props:{data: res.data}
    }
}

export default Profile
