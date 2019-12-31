export interface Category {
  id?: number;
  title: string;
  preview: string;
  url: string;
}

export interface Directory {
  directory: {
    categories: Array<Category>;
  };
}

export interface DirectoryState {
  categories: Array<Category>;
}
const initDirectoryState: DirectoryState = {
  categories: [
    {
      id: 1,
      title: "Hats",
      preview: "https://i.ibb.co/cvpntL1/hats.png",
      url: "hats"
    },
    {
      id: 2,
      title: "Jackets",
      preview: "https://i.ibb.co/px2tCc3/jackets.png",
      url: ""
    },
    {
      id: 3,
      title: "Sneakers",
      preview: "https://i.ibb.co/0jqHpnp/sneakers.png",
      url: ""
    },
    {
      id: 4,
      title: "Womens",
      preview: "https://i.ibb.co/GCCdy8t/womens.png",
      url: ""
    },
    {
      id: 5,
      title: "Mens",
      preview: "https://i.ibb.co/R70vBrQ/men.png",
      url: ""
    }
  ]
};

const directoryReducer = (
  state: DirectoryState = initDirectoryState,
  action: any
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
