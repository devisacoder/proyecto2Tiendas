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
                alert("Error generating Excel file, try it later");
                throw new Error("Error generating Excel file");
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
            alert("Error downloading Excel file, try it later");
            console.error("Error downloading Excel file:", error);
        }
    
    }

    return { handleExcel }
}