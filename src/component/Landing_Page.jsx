import Hero from './hero_section/hero.jsx'
import Features from './Features.jsx'
import Login_Page from '../pages/loginPage.jsx'
import About from "../pages/About.jsx"
import How_it_work from '../pages/How_it_works.jsx'
import Team from '../pages/Team.jsx'

function Landing_Page() {
  return (
    <div>
<Hero />
<Features/>
<About/>
<Login_Page />
<Team/>
<How_it_work/>


    </div>
  )
}

export default Landing_Page