import React from 'react';
import LandingPage from "./LandingPage";
import  PdfOperations  from "./PdfOperations";
import { Switch, Route } from 'react-router-dom';

export default function RoutesPage() {
    return (
        <Switch>
            <Route path='/' exact component={PdfOperations}/>
            <Route path='/pdfOperations' component={PdfOperations} />          
        </Switch>
    )
}