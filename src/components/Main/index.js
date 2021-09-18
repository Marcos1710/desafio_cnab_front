import React from "react";
import { useHistory } from "react-router-dom";

import { Grid, Icon, Menu, Sidebar, Popup, Divider } from "semantic-ui-react";
import { AiFillFileText } from "react-icons/ai";

import { removeToken, getUser } from "../../utils/localStorage";

import "./styles.css";

function Main(props) {

  const history = useHistory();

  const exit = () => {
    removeToken();
    history.push("/");
  };

  const contentAvatar = () => {
    return (
      <>
        <h4>{getUser() ? getUser().split("@")[0].toUpperCase() : null}</h4>
        <p>{getUser()}</p>
        <Divider />
        <p className="exit" onClick={() => exit()}>
          Sair
        </p>
      </>
    );
  };

  const handleItemClick = (e, { name }) => {
    if (name === "arquivos") {
      history.push("/files");
    } else if (name === "enviar") {
      history.push("/files/register");
    }
  };

  return (
    <Grid className="color">
      <Grid.Column>
        <Sidebar.Pushable>
          <Sidebar.Pusher>
            <Grid.Column>
              <Grid.Row>
                <Grid.Column>
                  <Menu inverted attached="top">
                    <Menu.Menu position="left">
                      <div className="toolbar" style={{ marginLeft: 35 }}>
                        <div>
                          <AiFillFileText
                            style={{ fontSize: 38 }}
                            color="#FFF"
                          />
                        </div>
                        <div style={{ marginLeft: 10, color: "#FFF" }}>
                          <h3>{props.title}</h3>
                          Bem vindo! ao cadastro de CNABS.
                        </div>
                      </div>

                      <div className="buttons-menu">
                          <Menu.Item
                            name="arquivos"
                            icon="folder"
                            onClick={handleItemClick}
                          />
                          <Menu.Item
                            name="enviar"
                            icon="upload"
                            data-testid="button-upload"
                            onClick={handleItemClick}
                          />
                        </div>
                    </Menu.Menu>

                    <Menu.Menu position="right">
                      <div className="avatar">
                        <Popup
                          trigger={
                            <Icon name="sign-out" size="large" circular />
                          }
                          content={contentAvatar()}
                          position="top left"
                          on="click"
                        />
                      </div>
                    </Menu.Menu>
                  </Menu>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>{props.children}</Grid.Row>
            </Grid.Column>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}

export default Main;
