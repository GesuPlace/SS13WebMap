
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
//import ReactDOM from 'react-dom';
//import $ from 'jquery';
// Table from react-bootstrap
//import { Table } from "react-bootstrap";
import { Collapsible, CollapsibleItem, Icon, Container } from 'react-materialize';

//import "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.1/js/materialize.min.js";
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'
import 'react-materialize';

// ToDo: http://react-materialize.github.io/react-materialize/?path=/story/javascript-collapsible--accordion


function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <div className={match ? "active" : ""}>
            {match && "> "}
            <Link to={to}>{label}</Link>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

class PSALink extends React.Component{
    render(){
        return (
            <Router>
                <div>
                <OldSchoolMenuLink
                    activeOnlyWhenExact={true}
                    to="/"
                    label="Home"
                />
                <OldSchoolMenuLink to="/about" label="About" />

                <hr />

                <Switch>
                    <Route exact path="/">
                    <Home />
                    </Route>
                    <Route path="/about">
                    <About />
                    </Route>
                </Switch>
                </div>
            </Router>
        );
    }
}

export class webmapAnnouncements extends Component {
    render() {
        return (
            <Container>
                <Collapsible accordion>
                    <CollapsibleItem
                        expanded={false}
                        header={(<a href='https://en.wikipedia.org/wiki/Public_service_announcement'>PSA</a>)} //"NOTICE - PSA For Server Headcoders/Maintainers"
                        icon={<Icon>filter_drama</Icon>}
                        node="div"
                    >
                        Better safe than sorry. That's my motto.
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="Yeah, you do seem to have a little 'shit creek' action going."
                        icon={<Icon>place</Icon>}
                        node="div"
                    >
                        Yeah, you do seem to have a little 'shit creek' action going.
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
                        icon={<Icon>whatshot</Icon>}
                        node="div"
                    >
                        You know, FYI, you can buy a paddle. Did you not plan for this contingency?
                    </CollapsibleItem>
                </Collapsible>
            </Container>
        );
    }
}

export class webmapBuilds extends Component {
    render() {
        return (
            <Container style={{ marginLeft: '40px !important' }}>
                <Collapsible accordion>
                <CollapsibleItem
                    expanded={false}
                    header="Better safe than sorry. That's my motto."
                    icon={<Icon>filter_drama</Icon>}
                    node="div"
                    >
                    Better safe than sorry. That's my motto.
                    </CollapsibleItem>
                    <CollapsibleItem
                    expanded={false}
                    header="Yeah, you do seem to have a little 'shit creek' action going."
                    icon={<Icon>place</Icon>}
                    node="div"
                    >
                    Yeah, you do seem to have a little 'shit creek' action going.
                    </CollapsibleItem>
                    <CollapsibleItem
                    expanded={false}
                    header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
                    icon={<Icon>whatshot</Icon>}
                    node="div"
                    >
                    You know, FYI, you can buy a paddle. Did you not plan for this contingency?
                    </CollapsibleItem>
                </Collapsible>
            </Container>
        );
    }
}

export default webmapAnnouncements;
