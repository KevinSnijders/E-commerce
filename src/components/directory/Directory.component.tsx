import * as React from "react";
import MenuItem from "../menu-item/MenuItem.component";

import DirectoryWrapper from "./Directory.styles";

export interface Category {
  id?: number;
  title: string;
  preview: string;
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
          preview: "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
          id: 2,
          title: "Jackets",
          preview: "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
          id: 3,
          title: "Sneakers",
          preview: "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
          id: 4,
          title: "Womens",
          preview: "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
          id: 5,
          title: "Mens",
          preview: "https://i.ibb.co/R70vBrQ/men.png"
        }
      ]
    };
  }

  render() {
    const { categories } = this.state;
    return (
      <DirectoryWrapper>
        {categories.map(({ id, title, preview }: Category) => (
          <MenuItem key={id} title={title} preview={preview} />
        ))}
      </DirectoryWrapper>
    );
  }
}

export default Directory;
