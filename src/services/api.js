export const loginAdmin = async (data) => {
  const res = await fetch("https://sstechworksbackend.onrender.com/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};
