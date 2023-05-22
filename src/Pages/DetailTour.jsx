import Detail from '../Components/Detail'
import Footer from '../Components/Footer'
import NavBackground from '../Components/Navbar'

const Detailtour = () => {
    return (
        <div style={{background: '#e5e5e5'}}>
        <NavBackground />
        <Detail />
        <div style={{position: 'relative', top: '-1800px'}}>
        <Footer />
        </div>
        </div>
    )
    
}

export default Detailtour