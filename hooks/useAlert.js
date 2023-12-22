import { useState } from "react";

export default function useAlert() {
  const [alert, setAlert] = useState({ show: false, text: "", type: "danger" });

  function showAlert(newAlert) {
    setAlert(newAlert);
  }

  function hideAlert() {
    setAlert({
      show: false,
      text: "",
      type: "danger",
    });
  }

  return { alert, showAlert, hideAlert };
}
