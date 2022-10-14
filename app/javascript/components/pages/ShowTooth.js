import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, Button } from "reactstrap"
const ShowTooth = ({ collectors }) => {
  const { id } = useParams()
  let currentCollector = collectors?.find((collector) => collector.id === +id)
  console.log(currentCollector)
  return (
    <>
      <h3>Profile of {currentCollector.name}</h3>
      <Card>
        {currentCollector && (
        <>
          <img
            src={currentCollector.image}
            alt={`profile of a collector named ${currentCollector.name}`}
          />
            <CardBody>
              <CardTitle tag="h5">
                {currentCollector.name} has been collecting teeth for {currentCollector.tenure} years. This tooth collector gives back to the tooth fairy community through {currentCollector.power}.
              </CardTitle>
              <Button>See the Adventures of {currentCollector.name}</Button>
            </CardBody>
          </>
        )}
      </Card>
    </>
  )
}

export default ShowTooth