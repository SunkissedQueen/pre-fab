import React from "react"
import { useParams } from "react-router-dom"

const ShowTooth = ({ collectors }) => {
  const { id } = useParams()
  let currentCollector = collectors?.find((collector) => collector.id === +id)
  console.log(currentCollector)
  return (
    <>
      <h3>This is the ShowTooth Page</h3>
    </>
  )
}

export default ShowTooth