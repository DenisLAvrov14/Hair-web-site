import { Main } from '../Main/Main'
import { MainStory } from '../MainStory/MainStory'
import { MainBottom } from '../Mainbottom/Mainbottom'
import Footer from '../../components/Footer/Footer'

export const Home = () => {
    return (
        <div>
            <Main />
            <MainBottom />
            <MainStory />
            <Footer />
        </div>
    )
}

export default Home
