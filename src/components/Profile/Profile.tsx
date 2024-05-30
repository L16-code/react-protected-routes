import { useSelector } from "react-redux"
import { RootState } from "../../types/RootInterface"

const Profile = () => {
  // const UserData=useSelector
  const UserData=useSelector((state:RootState)=>state.root.user)
  const CartData=useSelector((state:RootState)=>state.root.item)

  console.log(CartData)
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '500px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: "aliceblue"}}>
        <div style={{ marginBottom: '15px', display:"grid" }}>
          <img src="https://i.pravatar.cc/300" alt="sdfds"  height={"100px"} width={"100px"} style={{borderRadius:"50%", border:"2px solid black"}}/>
        </div>
        <div style={{ marginBottom: '15px', display: "flex" }}>
          <h3>UserName:-</h3>
          <h4 style={{ margin: '5px' }}>{UserData?.username}</h4>
        </div>
        <div style={{ marginBottom: '15px', display: "flex" }}>
          <h3>Email:-</h3>
          <h4 style={{ margin: '5px' }}>{UserData?.email}</h4>
        </div>
        <div style={{ marginBottom: '15px', display: "flex" }}>
          <h3>Occupation:-</h3>
          <h4 style={{ margin: '5px' }}>Mern Stack Developer</h4>
          {/* <h4>{CartData.items[id]}</h4> */}
        </div>
      </div>
    </div>

  )
}

export default Profile