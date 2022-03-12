let testData = [
  {
    title: "test_1",
    views: 11,
    id: 1,
    comments: 111,
    createdAt: "1 days ago",
  },
  {
    title: "test_2",
    views: 22,
    id: 2,
    comments: 222,
    createdAt: "2 days ago",
  },
  {
    title: "test_3",
    views: 33,
    id: 3,
    comments: 333,
    createdAt: "3 days ago",
  },
  {
    title: "test_4",
    views: 44,
    id: 4,
    comments: 4,
    createdAt: "4 days ago",
  },
];
export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", testData });
};
export const see = (req, res) => {
  res.render("watch");
};
export const edit = (req, res) => {
  res.render("edit");
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
