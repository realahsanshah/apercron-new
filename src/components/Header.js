import React from "react";
import { useState } from "react";
import logo from "../assets/img/main-logo.png";
import logoSmall from "../assets/img/logo_sm.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Dropdown,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { connectWallet, switchNetwork } from "../utils/web3-helpers";
import { setSelectedNetwork } from "../store/web3-slice";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { configEnv } from "../utils/configEnv";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { userAddress, selectedChainID } = useSelector(
    (state) => state?.web3Slice
  );
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="header">
      <Navbar color="light" expand="md">
        <NavbarBrand href="/" className={`mx-auto ${isOpen ? "mt-3" : ""}`}>
          <img src={logo} className="d-none d-md-block" />
          <img src={logoSmall} className="d-block d-md-none" />
        </NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        <NavbarToggler onClick={toggle} className="mx-auto">
          {isOpen ? (
            <i
              aria-hidden="true"
              tabindex="0"
              className="far fa-window-close"
            ></i>
          ) : (
            <i class="fa fa-list"></i>
          )}
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className={`ml-auto ${isOpen ? "mt-2" : ""}`} navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              {/* <HashLink
                to="/#launchpadlist"
                scroll={(el) => {
                  el.scrollIntoView({
                    behavior: "auto",
                    block: "start",
                  });
                }}
              >
                Launchpadlist
              </HashLink> */}
              <NavLink tag={Link} to="/launchpads">
                Launchpadlist
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/createtoken">
                Create/Sale
              </NavLink>
              {/* <HashLink
                to="/#createtoken"
                scroll={(el) => {
                  el.scrollIntoView({
                    behavior: "auto",
                    block: "start",
                  });
                }}
              >
                Sale/Token{" "}
              </HashLink> */}
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/locker">
                Locker
              </NavLink>
            </NavItem>
            {userAddress?.toLowerCase()===configEnv.ownerAddress &&
            <NavItem>
            <NavLink tag={Link} to='/admin'>
              Approve Launches
            </NavLink>
          </NavItem>
            }
            
            {/* <NavItem>
              <NavLink>
                <Button className="custome-btn">
                  <i className="fa fa-plus mr-2"></i> Create
                </Button>
              </NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink>
                <Button className="custome-btn" onClick={()=>connectWallet()}>{userAddress?userAddress?.replace(userAddress?.slice(5,36),'***'):"Connect"}</Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Button className="custome-btn" onClick={()=>{
                  if(selectedChainID===80001){
                    switchNetwork(4);
                  }else{
                    switchNetwork(80001);
                  }
                }}>Switch Network</Button>
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink className="custome-btn connect-button-container ">
                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggleDropdown}
                  as={NavItem}
                  className="connect-button-dropdown position-relative"
                >
                  <DropdownToggle caret>
                    {userAddress
                      ? userAddress?.replace(userAddress?.slice(5, 36), "***")
                      : "Connect"}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      as={Button}
                      onClick={() => {
                        dispatch(setSelectedNetwork(4));
                        connectWallet();
                        setDropdownOpen(false);
                      }}
                    >
                      Connect to ETH
                    </DropdownItem>
                    <DropdownItem
                      as={Button}
                      onClick={() => {
                        dispatch(setSelectedNetwork(80001));
                        connectWallet();
                        setDropdownOpen(false);
                      }}
                    >
                      Connect to CRO
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
