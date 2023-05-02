import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bath from "./Bath"
import Bedroom from "./Bedroom"
import Patio from "./Patio"


function FloorPlan(props) {
  return (
    <>
    <h1>Floor Plan</h1>
      <LivingRoom/>
      <Kitchen/>
      <Bedroom bedNum="3"/>
      <Bath size="Full"/>
      <Bath size="Half"/>
      <Patio/>
    </>
  )
}

export default FloorPlan