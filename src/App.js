import './App.css';
import { HomeCardCollection, NavBarHeader, MarketingFooter} from './ui-components'

function App() {
return (
<div className="App">
<NavBarHeader  width={"100vw"}/>
<HomeCardCollection isPaginated itemsPerPage={1}/>
<MarketingFooter  width={"100vw"}/>
</div>
);
}

export default App;