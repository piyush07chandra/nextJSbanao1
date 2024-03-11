import Footer from "./components/Footer"
import FirstComponent from '../app/components/FirstComponent'
import Navbars from './components/Navbars'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'

const page = () => {
  return (
    <>
<Navbars/>
<FirstComponent/>
<SecondComponent/>
<ThirdComponent/>
 <Footer/>
    </>
  )
}

export default page