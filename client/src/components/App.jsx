import React from "react";
import NavigationBar from './NavigationBar';
import Banner from './Banner';
import Footer from "./Footer";
import { Routes, Route} from 'react-router-dom';
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";
import Admin from "./Admin";
import AllPosts from "./AllPosts";
function App() {
    // function createCard() {
    //     return <Card clName
    // }
    return (
        <> {/*empty fragment*/}
        <NavigationBar />  {/*sab page par present hoga*/}
        <Routes>{/*anything outside this will be presented on  every page */}
            <Route path="/" element={<Banner/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/allposts" element={<AllPosts/>}/>
        </Routes>
        <Footer />
        </>
    );
}
export default App;