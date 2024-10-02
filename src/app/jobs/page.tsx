//import header in job route
import Header from "../components/header";
//import footer in job route
import Footer from "../components/footer";

//function call
export default function Jobs(){
    return(
        <div>
            <Header/>
            <h1>I am a Job page.</h1>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}