import { Container } from "react-bootstrap"
import DetailProfile from "../Components/DetailProfile"
import NavProfile from "../Components/Navbar"
import CardHistory from "../Components/CardTripHistory"
import Footer from "../Components/Footer"

const Profile = () => {
    return (
        <>
        <NavProfile />
        <DetailProfile />
        <Container className="historyTrip">
            <h1 style={{position: 'relative',left:'120px',marginTop: '140px'}}>History Trip</h1>
        </Container>
        <CardHistory />
        <div style={{position: 'relative', top: '-1800px'}}>
        <Footer />
        </div>
        </>
    )
}

export default Profile