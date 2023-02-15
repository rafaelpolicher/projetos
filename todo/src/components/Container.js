import Form from "./Form"
import List from "./List"
import Title from "./Title"
import '../styles/Container.sass';

function Container(){
    return(
        <div className="Container">
        <Title/>
        <Form />
        <List />            
        </div>

    )
}
export default Container