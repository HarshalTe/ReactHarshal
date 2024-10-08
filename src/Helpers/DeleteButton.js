import React from "react";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function DeleteButton(props) {
  async function deleteMethod() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        props.deleteFunction();
        // Swal.fire("Deleted!", "Your file has been deleted.", "success").then(
        //   () => {

        //   }
        // );
      }
    });
  }
  return (
    // <Button color="danger p-1" size="sm" onClick={deleteMethod}>
    //   <i className="fa fa-trash" />
    // </Button>
    <IconButton aria-label="delete" color="error" onClick={deleteMethod}>
      <DeleteIcon fontSize="medium" />
    </IconButton>
  );
}

export default DeleteButton;
