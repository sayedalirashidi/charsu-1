import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

// list of items
const list = [
  { name: 'item1',
    img:'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340'
  },
  { name: 'item2',
    img:'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340'
  },
  { name: 'item3',
    img:'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340'
  },
  { name: 'item4',
    img:'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340'
  },
  { name: 'item5',
    img:'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340'
  },
  { name: 'item6',
    img:'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340'
  },
  { name: 'item7',
    img:'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340'
  },
  { name: 'item8',
    img:'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340'
  },
  { name: 'item9',
    img:'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340'
  }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, img, selected }) => {
  return (
    <div className="menu-item" >
      <img width='100px' src={img} />
      <p>{text}</p>
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (list) => list.map(({name, img}) => {

  return (
    <MenuItem
      img={img}
      text={name}
      key={name}
    />
  );
});


const Arrow = ({ text, className }) => {
  return (
    <div
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

class ScrollingMenu extends Component {
  state = {
    selected: 0
  };
  
  onSelect = key => {
    this.setState({ selected: key });
  }

  
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = Menu(list, selected);

    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default ScrollingMenu;
