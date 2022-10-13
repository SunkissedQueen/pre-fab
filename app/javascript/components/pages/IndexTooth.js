import React from "react"
import { Card, CardBody } from "reactstrap"

const IndexTooth = ({ collectors }) => {
  console.log(collectors)
  return (
    <>
      <h3>Greetings from the Tooth Collectors</h3>
      {collectors?.map((collector, index) => {
        return (
          <Card
            style={{ width: "14rem"}}
            key={index}
          >
            <CardBody>
              <p>{collector.name}</p>
            </CardBody>
            <img src={collector.image} alt={`profile of a Tooth Collector ${collector.name}`} />
          </Card>
        )
      })}
    </>
  )
}

export default IndexTooth