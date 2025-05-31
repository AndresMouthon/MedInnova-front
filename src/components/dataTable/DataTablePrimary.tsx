import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

interface DataTablePrimaryProps {
    data: any[],
    columns: any[],
    loading: boolean
}

ModuleRegistry.registerModules([AllCommunityModule]);

function DataTablePrimary({ data, columns, loading }: DataTablePrimaryProps) {

    const defaultColDef = {
        resizable: true,
        sortable: true,
        filter: true,
        floatingFilter: true,
    };
    return (
        <div className="ag-theme-alpine" style={{ width: "100%", overflowX: "auto" }}    >
            <div style={{ minWidth: "800px" }}>
                {data.length === 0 ? (
                    <div className="flex justify-center items-center text-gray-500 h-40">
                        No hay datos
                    </div>
                ) : (
                    <AgGridReact
                        rowData={data || []}
                        columnDefs={columns}
                        defaultColDef={defaultColDef}
                        domLayout="autoHeight"
                        suppressHorizontalScroll={true}
                        loadingOverlayComponent={<>Cargando...</>}
                        loading={loading}
                        pagination={true}
                    />
                )}
            </div>
        </div>
    )
}

export default DataTablePrimary
