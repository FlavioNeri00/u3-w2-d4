import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {FaPlusSquare} from "react-icons/fa"

const Job = ({ data }) => {
  const dispatch = useDispatch()

  



  return(
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
     <Col xs={1}><FaPlusSquare onClick={() => 
    {
      dispatch({
       type: "ADD_TO_YOUR_FAVOURITES",
       payload: data
      })}}/> </Col>
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={8}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
   
  </Row>
)}

export default Job
