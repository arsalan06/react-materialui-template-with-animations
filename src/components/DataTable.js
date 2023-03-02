import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";
import { getUsers } from "../redux/slices/UsersSlice";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.first_name || ""} ${params.row.last_name || ""}`,
  },
  {
    field: "first_name",
    headerName: "First name",
    width: 100,
    hide: true,
  },
  { field: "last_name", headerName: "Last name", width: 100, hide: true },
  { field: "email", headerName: "Email", width: 200 },
  { field: "gender", headerName: "Gender", width: 90 },
  { field: "date_of_birth", headerName: "DOB", width: 100 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 40,
  },
  {
    field: "country",
    headerName: "Country",
    width: 90,
  },
  { field: "phone", headerName: "Phone", width: 120 },
];

export default function DataTable() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUsersAPI = () => {
      dispatch(getUsers());
    };
    getUsersAPI();
  }, [dispatch]);

  const { users, loading, error } = useSelector((state) => state.users);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 400,
        width: "85%",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="h5">{error}</Typography>
      ) : (
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      )}
    </Box>
  );
}
