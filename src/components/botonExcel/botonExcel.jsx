import { useExcel } from "../../hooks/useExcel"
import "./botonExcel.css"

export const BotonExcel = () => {
    const { handleExcel } = useExcel()

    return(
        <button className="botonExcel" onClick={handleExcel}>Export files to excel</button>
    )
}