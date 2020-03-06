import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Menu, Grid, Icon, Dropdown } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <div>
          <Menu borderless style={{ border: "none", boxShadow: "none" }}>
            <Grid container>
              <Grid.Row>
                <Menu.Item position={'left'}>
                  <Image className={'logo'}
                         src="https://cdn.shopify.com/s/files/1/2373/4163/t/1/assets/deadkooks_corp-logo.svg"/>
                </Menu.Item>

                <Menu.Item>Home</Menu.Item>
                <Dropdown item text="Shortboards" icon="angle down icon">
                  <Dropdown.Menu>
                    <Dropdown.Item>Riches RF</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text="Mid-lengths" icon="angle down icon">
                  <Dropdown.Menu>
                    <Dropdown.Item>Hellhound</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text="Longboards" icon="angle down icon">
                  <Dropdown.Menu>
                    <Dropdown.Item>Nausea</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text="Shop" icon="angle down icon">
                  <Dropdown.Menu>
                    <Dropdown.Item>Surfboards</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown item text="About" icon="angle down icon">
                  <Dropdown.Menu>
                    <Dropdown.Item>Stockists</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item>Custom Order</Menu.Item>

                <Menu.Item position={'right'}>
                  <Icon name={"search large icon"}/>
                  <Icon name={"shopping bag large icon"}/>
                </Menu.Item>
              </Grid.Row>


            </Grid>
          </Menu>
        </div>
    );
  }
}

class MidMenu extends React.Component {
  render() {
    return (
        <div>
          <Image className="image" fluid src={"deadkooks.png"}/>
        </div>
    );
  }
}


// <div className="midsection">
//   <img className="ui fluid image" src="deadkooks.png">
//
// </div>

// <div className="footer divider">
//   <div className="ui center aligned grid">
//     <div className="five wide column"></div>
//     <div className="six wide column">
//       <p className="top">SUBSCRIBE TO OUR NEWSLETTER</p>
//       <p className="bottom"> Keep up-to-date with new boards and Dead Kooks news</p>
//       <div className="ui labeled input email">
//         <input type="text" placeholder="Email address">
//           <div className="ui black label">
//             Subscribe
//           </div>
//       </div>
//     </div>
//     <div className="five wide column"></div>
//   </div>
// </div>

class Deadkooks extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <MidMenu/>
        </div>

    );
  }
}

ReactDOM.render(<Deadkooks/>, document.getElementById('root'));