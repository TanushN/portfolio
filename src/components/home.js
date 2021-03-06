import React, { useState} from "react";
import {
  Container,
  Grid,
  Card,
  Image,
  Icon,
  GridColumn,
  Button,
  Menu,
} from "semantic-ui-react";
import profile from "../assets/profile.JPG";
import GetContent from "./content/index";

const Home = () => {
  const [ActiveMenuItem, setActiveMenuItem] = useState("About");

  const handleItemChange = (e, { name }) => {
    setActiveMenuItem(name);
  };


  return (
    
      <Container centered style={{position:"absolute!importatnt"}}>
        <Grid centered columns={2} doubling verticalAlign="top">
          <GridColumn style={{marginTop:"10%"}}>
            <Card centered inverted >
              <Image src={profile} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Tanushsrisai Nadimpalli</Card.Header>
                <Card.Meta>
                  <span> Minnesota</span>
                </Card.Meta>
                <Card.Description>
                  Computer Science student at U of MN: Twin Cities
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <a href={"mailto:tanushnadimpalli3@gmail.com"}>
                  <Icon name="mail" size="large" />
                </a>
                <a>
                  <Icon
                    name="linkedin"
                    size="large"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/tanushsrisai-nadimpalli-4060a7197/"
                      )
                    }
                  />
                </a>
                <a>
                  <Icon
                    name="github"
                    size="large"
                    onClick={() => window.open("https://github.com/TanushN")}
                  />
                </a>
                <a>
                  <Icon
                    name="instagram"
                    size="large"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/tanush.nadimpalli/"
                      )
                    }
                  />
                </a>
                <a>
                  <Icon
                    name="file outline"
                    size="large"
                    onClick={() =>
                      window.open(
                        "https://firebasestorage.googleapis.com/v0/b/tanushn-portfolio.appspot.com/o/my_resume.pdf?alt=media&token=54bb5289-acd1-476f-a498-9804c51304db"
                      )
                    }
                  />
                </a>
              </Card.Content>
            </Card>
          </GridColumn>

          <GridColumn textAlign="center" style={{marginTop:"10%"}} >
            <Menu pointing compact>
              <Menu.Item
                name="About"
                active={ActiveMenuItem === "About"}
                onClick={handleItemChange}
              />
              <Menu.Item
                name="Education"
                active={ActiveMenuItem === "Education"}
                onClick={handleItemChange}
              />
              <Menu.Item
                name="Experience"
                active={ActiveMenuItem === "Experience"}
                onClick={handleItemChange}
              />
              <Menu.Item
                name="Projects"
                active={ActiveMenuItem === "Projects"}
                onClick={handleItemChange}
              />
            </Menu>
            <div>{<GetContent mode={ActiveMenuItem} />}</div>
          </GridColumn>
        </Grid>
      </Container>
    
  );
};

export default Home;
