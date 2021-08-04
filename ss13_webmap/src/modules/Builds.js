
import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import ReactDOM from 'react-dom';
//import $ from 'jquery';
// Table from react-bootstrap
//import { Table } from "react-bootstrap";
import {
    Button,
    Collapsible,
    CollapsibleItem,
    Container,
    Icon,
} from 'react-materialize';

//import "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.1/js/materialize.min.js";
///import 'materialize-css';
//import 'materialize-css/dist/css/materialize.min.css'

// ToDo: http://react-materialize.github.io/react-materialize/?path=/story/javascript-collapsible--accordion


export class webmapBuilds extends Component {
    render() {
        return (
            <Container>
                <Collapsible accordion>
                    <CollapsibleItem
                        expanded={false}
                        header="Baystation 12"
                        icon={<Icon>place</Icon>}
                        node="div"
                    >
                        <Button
                            disabled
                            node="button"
                            small
                            style={{
                                marginRight: '5px'
                            }}
                            waves="light"
                        >
                            SEV TORCH
                        </Button>
                    </CollapsibleItem>
                </Collapsible>
            </Container>
        );
    }
}

export default webmapBuilds;
