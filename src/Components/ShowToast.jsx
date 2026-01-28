const ShowToast = () => {
    const showToast = () => {
      Toastify({
        text: "Imported Toastify works in React 🚀",
        duration: 2500,
        gravity: "top",
        position: "right",
        close: true,
        backgroundColor: "#22c55e",
      }).showToast();
    };
    
  return (
    <button onClick={showToast}>
      Show Toast
    </button>

  )
}

export default ShowToast