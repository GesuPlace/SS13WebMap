
import React, { Component } from "react";
//import ReactDOM from 'react-dom';
//import $ from 'jquery';
// Table from react-bootstrap
import { Table } from "react-bootstrap";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// To make rows collapsible
import "bootstrap/js/src/collapse.js";

//import "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.1/js/materialize.min.js";
import 'materialize';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'
import 'react-materialize';

// ToDo: http://react-materialize.github.io/react-materialize/?path=/story/javascript-collapsible--accordion

export class Example1 extends Component {
    render() {
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            data-toggle="collapse"
                            data-target=".multi-collapse1"
                            aria-controls="multiCollapseExample1"
                        >
                            <td>1</td>
                            <td>TEST 123</td>
                            <td>test123@test.com</td>
                        </tr>
                        <tr class="collapse multi-collapse1" id="multiCollapseExample1">
                            <td>Child col 1</td>
                            <td>Child col 2</td>
                            <td>Child col 3</td>
                        </tr>
                        <tr
                            data-toggle="collapse"
                            data-target=".multi-collapse2"
                            aria-controls="multiCollapseExample2"
                        >
                            <td>2</td>
                            <td>TEST 456</td>
                            <td>test456@test.com</td>
                        </tr>
                        <tr class="collapse multi-collapse2" id="multiCollapseExample2">
                            <td>Child col 1</td>
                            <td>Child col 2</td>
                            <td>Child col 3</td>
                        </tr>
                    </tbody>
                </Table>
    <div class="container center">
        <h1 class="white-text">SS13 WebMap</h1>
        <p class="white-text"><b>Created by AffectedArc07</b></p>
        <p class="white-text">Special thanks to <b>Letter_N</b> (For HTML theming).</p>
        <a class="btn ss13-blue" href="https://github.com/AffectedArc07/SS13WebMap"><i class="fab fa-github"></i>&nbsp;&nbsp;GitHub</a>
        <a class="btn ss13-blue" href="https://github.com/AffectedArc07/SS13WebMap/tree/master/MAP_REQUESTING.md"><i class="fas fa-folder-plus"></i>&nbsp;&nbsp;How to get your map on here</a>
        <a class="btn ss13-blue" href="https://ko-fi.com/affectedarc07"><i class="fas fa-pound-sign"></i>&nbsp;&nbsp;Donate</a>
        <a class="btn ss13-blue" href="https://affectedarc07.co.uk/webmap/status.php"><i class="fas fa-server"></i>&nbsp;&nbsp;Status</a>
        <ul class="collapsible">
            <li>
                <div class="collapsible-header white-text valign-wrapper black"><i class="material-icons">arrow_drop_down</i><span class="cyan-text">NOTICE&nbsp;- PSA For Server Headcoders/Maintainers</span></div>
                <div class="collapsible-body white-text left-align">
                    I do <b>NOT</b> actively track repositories and their map rotation. Getting a new map added or an old map removed is entirely on you or your playerbase to request.
                </div>
            </li>
            <li>
                <div class="collapsible-header white-text valign-wrapper"><i class="material-icons">arrow_drop_down</i><b>! FAQ !</b></div>
                <div class="collapsible-body white-text left-align">
                    <h5>What is this?</h5>
                    <p>This is a small project made by me to help newcomers learn the SS13 maps easier</p>
                    <h5>How do I get a map here?</h5>
                    <p>Join the discord, and head to the <i>#request-maps</i> channel.</p>
                    <h5>How often is this updated?</h5>
                    <p>All current codebases will automatically update any time a map edit on a specific codebase is made.</p>
                    <h5>Why do some servers have fancy names and icons?</h5>
                    <p>These servers have been granted fancy status. In return, they get fancy parralax, co-ordinate readout on the maps, their icon in the list, pipenet overlays (some conditions apply) and a color in the list</p>
                    <h5>How do I get fancy status?</h5>
                    <p>Simply post a link to this to your playerbase, and say you approve of the project, then you will be granted fancy status</p>
                </div>
            </li>
        </ul>
    </div>
            </>
        );
    }
}

export default Example1;
