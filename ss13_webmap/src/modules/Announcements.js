
import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import ReactDOM from 'react-dom';
//import $ from 'jquery';
// Table from react-bootstrap
//import { Table } from "react-bootstrap";
import { Collapsible, CollapsibleItem, Icon, Container } from 'react-materialize';

//import "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.1/js/materialize.min.js";
///import 'materialize-css';
//import 'materialize-css/dist/css/materialize.min.css'

// ToDo: http://react-materialize.github.io/react-materialize/?path=/story/javascript-collapsible--accordion


export class webmapAnnouncements extends Component {
    render() {
        return (
            <Container>
                <Collapsible accordion>
                    <CollapsibleItem
                        expanded={false}
                        header={
                            [
                                // https://youtu.be/4MlBrEQNhcs?t=67
                                'NOTICE - ', 
                                <a href='https://en.wikipedia.org/wiki/Public_service_announcement'>&nbsp;PSA&nbsp;</a>,
                                ' For Server Headcoders/Maintainers'
                            ]
                        }
                        icon={<Icon>whatshot</Icon>}
                        node="div"
                    >
                        I do <b>NOT</b> actively track repositories and their map rotation. <br />
                        Getting a new map added or an old map removed is entirely on you or your playerbase to request.
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="FAQ"
                        icon={<Icon>place</Icon>}
                        node="div"
                    >
                        <b>What is this?</b><br />
                        This is a small project made by me to help newcomers learn the SS13 maps easier.<br /><br />

                        <b>How do I get a map here?</b><br />
                        Join the discord, and head to the #request-maps channel.<br /><br />

                        <b>How often is this updated?</b><br />
                        All current codebases will automatically update any time a map edit on a specific codebase is made.<br /><br />

                        <b>Why do some servers have fancy names and icons?</b><br />
                        These servers have been granted fancy status. In return, they get fancy parralax, co-ordinate readout on the maps, their icon in the list, pipenet overlays (some conditions apply) and a color in the list. <br /><br />

                        <b>How do I get fancy status?</b><br />
                        Simply post a link to this to your playerbase, and say you approve of the project, then you will be granted fancy status.
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="Recent Changes"
                        icon={<Icon>filter_drama</Icon>}
                        node="div"
                    >
                        W.I.P.
                    </CollapsibleItem>
                </Collapsible>
            </Container>
        );
    }
}

export default webmapAnnouncements;
