export const trending = (req, res) => {
  res.render("home");
};
export const see = (req, res) => {
  res.send("Watch video");
};
export const edit = (req, res) => {
  res.send("Edit video");
};
export const search = (req, res) => {
  res.send("Search");
};
export const upload = (req, res) => {
  res.send("upload");
};
export const deleteVideo = (req, res) => {
  res.send("delete");
};
