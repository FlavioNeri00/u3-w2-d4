import { Col, Container, ListGroup, Row } from "react-bootstrap"
import { FaTrash } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"


const FavouriteCompany = () => {
const companies = useSelector(state => state.company.content)
const dispatch = useDispatch()
    return(

      <Container>
        <h1 className="text-center mt-3">Your favourite companies</h1>
        
            <ListGroup className="mt-5">
            
            {companies.map((comp, index) => (<ListGroup.Item className="fs-3" key={comp._id}>
            <Row>
          
            <Col xs={11}>   <span className="me-3 text-danger fs-5 ">{index + 1}</span>
            <Link className="text-decoration-none text-black"  to={comp.url}> {comp.company_name}
            </Link></Col>
           <Col xs={1}> <span className="text-end text-danger"><FaTrash onClick={() => 
    {
      dispatch({
       type: "CANCEL_FROM_YOUR_FAVOURITES",
       payload: index
      })}}/></span></Col>
           </Row>
           </ListGroup.Item>
           
           ))}
           
          </ListGroup>
          
      </Container>
    )
}

export default FavouriteCompany