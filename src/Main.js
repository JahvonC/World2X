import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';







function Main() {
  return (
    <Container>
        <Row>
            <Card className='bg-dark mt-5'>
                <Container style={{'width': '100%'}} fluid className="mt-1">
                     <iframe width="100%" height='200' frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1447871143&color=%23acc53a&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe> 
                </Container>
                <Container fluid>
                    <iframe style={{'width': '100%', 'height': '200px'}} src="https://www.youtube.com/embed/1_mfHLMyzao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Container>
            </Card>
        </Row>
    </Container>
  )
}

export default Main;