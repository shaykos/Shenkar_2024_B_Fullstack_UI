import { useContext } from "react"
import { MemberContext } from "./context/memberContext";
import { member } from "./types/memberTypes";
import Regsiter from "./components/Regsiter";

export default function App() {

  const { members } = useContext(MemberContext);

  return (
    <>
      <div>App</div>
      <h1>Total members: {members.length}</h1>
      <Regsiter />
    </>
  )
}
