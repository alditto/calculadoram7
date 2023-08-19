import Button from "./Boton"
import "./panelDeBotones.css"
export default function PanelDeBotones({clickHandler}){
    const handlerClick= nombreDeBoton=>clickHandler(nombreDeBoton);

    return(
        <div>
            <div className="component-button-panel">
                <Button name="AC" clickHandler={handlerClick} gray/>
                <Button name="+/-" clickHandler={handlerClick} gray/>
                <Button name="%" clickHandler={handlerClick} gray/>
                <Button name="/" clickHandler={handlerClick} orange/>
            </div>
            <div>
                <Button name="7" clickHandler={handlerClick}/>
                <Button name="8" clickHandler={handlerClick}/>
                <Button name="9" clickHandler={handlerClick}/>
                <Button name="x" clickHandler={handlerClick} orange/>
            </div>
            <div>
                <Button name="4" clickHandler={handlerClick}/>
                <Button name="5" clickHandler={handlerClick}/>
                <Button name="6" clickHandler={handlerClick}/>
                <Button name="-" clickHandler={handlerClick} orange/>
            </div>
            <div>
                <Button name="1" clickHandler={handlerClick}/>
                <Button name="2" clickHandler={handlerClick}/>
                <Button name="3" clickHandler={handlerClick}/>
                <Button name="+" clickHandler={handlerClick} orange/>
            </div>
            <div>
                <Button name="0" clickHandler={handlerClick} wide/>
                <Button name="." clickHandler={handlerClick}/>
                <Button name="=" clickHandler={handlerClick} orange/>
            
            </div>
        </div>
    )
}