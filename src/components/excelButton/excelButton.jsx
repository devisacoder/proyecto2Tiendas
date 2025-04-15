import { useExcel } from "../../hooks/useExcelButton"
import "./excelButton.css"

export const BotonExcel = () => {
    const { handleExcel } = useExcel()

    return(
        <button className="botonExcel" onClick={handleExcel}>Export files to excel</button>
    )
}