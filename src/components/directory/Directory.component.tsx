import * as React from "react";
import MenuItem from "../menu-item/MenuItem.component";

import DirectoryWrapper from "./Directory.styles";

export interface Category {
  id?: number;
  title: string;
  preview: string;
  url: string;
}

interface Props {}

interface State {
  categories: Array<Category>;
}

class Directory extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
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
  }

  render() {
    const { categories } = this.state;
    return (
      <DirectoryWrapper>
        {categories.map(({ id, title, preview, url }: Category) => (
          <MenuItem key={id} title={title} preview={preview} url={url} />
        ))}
      </DirectoryWrapper>
    );
  }
}

export default Directory;
