export const useExcel = () => {
    
    const  handleExcel = async () => {
        try{
            const response = await fetch("http://localhost:8081/products/export", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if(!response.ok){
                throw new Error("Error al generar el archivo Excel");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "productos.xlsx";
            a.click(); 
            a.remove();
            window.URL.revokeObjectURL(url); 
        } catch (error) {
            console.error("Error al descargar el archivo Excel:", error);
        }
    
    }

    return { handleExcel }
}