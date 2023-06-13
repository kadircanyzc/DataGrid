import React, { useEffect, useState } from "react";
import DataGrid, {
  Column,
  Paging,
  HeaderFilter,
} from "devextreme-react/data-grid";
import { Pager } from "devextreme-react/tree-list";
import "devextreme-react/text-area";
import SearchBar from "../ToolBox/SearchBar";
import DialogBar from "../ToolBox/DialogBar";
import "../../Styles/Datagrid.css";
import "devextreme/dist/css/dx.light.css";
import { Box } from "@mui/material";
import { employees } from "../Datagrid/Data";
const defaultPageSize = [5, 10, 20];

export default function Datagrid() {
  const [dataSource, setDataSource] = useState([]);
  const [dataJsData, setDataJsData] = useState([]);

  const addNewData = (data) => {
    setDataSource((prevState) => {
      const newList = [...prevState, data];
      localStorage.setItem("datasource", JSON.stringify(newList));
      return newList;
    });
  };

  useEffect(() => {
    if (localStorage.getItem("datasource")) {
      setDataSource(JSON.parse(localStorage.getItem("datasource")));
    }
    setDataJsData(employees);
  }, []);

  return (
    <div className="DataGridDiv">
      <Box sx={{ display: "flex" }}>
        <SearchBar />
        <DialogBar addNewData={addNewData} />
      </Box>
      <DataGrid
        rowAlternationEnabled
        id="gridContainer"
        dataSource={[...dataJsData, ...dataSource]}
        keyExpr="ID"
        showBorders={true}
        className="DataGrid"
      >
        <Paging enabled={true} defaultPageSize={6} />
        <Pager
          visible={true}
          showPageSizeSelector={true}
          defaultPageSize={defaultPageSize}
          showNavigationButtons={true}
          displayMode={"compact"}
        />
        <HeaderFilter visible={true} />

        <Column dataField="link" />
        <Column dataField="name" />
        <Column dataField="description" />
      </DataGrid>
    </div>
  );
}
