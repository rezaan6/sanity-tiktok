import axios from "axios"
import { BASE_URL } from "../../utils"

const Profile = () => {
  return <div className="">Profile</div>
}

export const getServerSideProps = async ({
  params: { id },
}: {
  params: { id: string }
}) => {
    const res = await axios.get(`${BASE_URL}/profile/${id}`)
}

export default Profile
