import Navbar from '../Components/Navbar'
import Cards from '../Components/Card'
import Jumbotron from '../Components/Jumbotron'
import Contents from '../Components/Group'
import Footer from '../Components/Footer'




const Home = () => {
    
    return (
        <>
       
        <Navbar />
        <Jumbotron />
        <div style={{position: 'relative', top: '-56px'}}> 

        <Cards />
        </div>
        <Contents />
        <Footer />
        </>

       
    )
}

export default Home