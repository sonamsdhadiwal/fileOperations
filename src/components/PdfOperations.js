import React from 'react';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components';
import FilesDragDrop from './FilesDragDrop';
import SplitFilesDragDrop from './splitFiles/SplitFilesDragDrop';
import FilesDragDropPdfText from './FilesDragDropPdfText';
import PdfToWord from './wordConversionFiles/PdfToWord';
import { CardHeader, rgbToHex, TextareaAutosize } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import FilesDragDropRotate from './FilesDragDropRotate';

const { PDFDocument } = require('pdf-lib');
var fs = require('fs');



const Styles = styled.div`
  .coming-soon {
      font-family: Comic Sans MS;
      font-weight: bold;
      color: blue;
      font-style: Italic;
  }

  .pdf-file {
    font-family: Comic Sans MS;
    font-weight: bold;
    color: dark-grey;
    font-style: Italic;
  }

  .card {
      background-color: #E1F2F2;
  }

  .card-header {
      background-color: #0000F1;
      color: white;
      font-size: 22px;
  }
`;

// var merger = new PDFMerger();
var files;
var file2;

const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

function pdfToPowerpoint() {
    console.log('merge');
}

function rotateClockwisePdf() {
    console.log('split');
}

function rotateAnticlockwisePdf() {
    console.log('merge');
}

function htmlToPdf() {
    console.log('split');
}

function PdfToText() {
    console.log('merge');
}

function protectPdf() {
    console.log('split');
}

function organizePdf() {
    console.log('split');
}

function repairPdf() {
    console.log('merge');
}

function signPdf() {
    console.log('split');
}

function onChange(e) {
    files = e.target.files;
    console.warn("data files", files);
}

export default function PdfOperations() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Styles>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Card className={classes.root} variant="outlined" >
                                    <CardHeader className='card-header'
                                        avatar={
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                                M
                                            </Avatar>
                                        }

                                        title="Merge PDF"
                                        titleTypographyProps={{ variant: 'h5' }}
                                    />

                                    <CardContent className='card'>
                                        <Typography variant="body2" component="p">
                                            <div>
                                                <FilesDragDrop>
                                                </FilesDragDrop>
                                            </div>
                                        </Typography>
                                    </CardContent>


                                </Card>
                            </TableCell>
                            <TableCell>
                                <Card className={classes.root} variant="outlined">

                                    <CardHeader className='card-header'
                                        avatar={
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                                S
                                            </Avatar>
                                        }

                                        title="Split PDF"
                                        titleTypographyProps={{ variant: 'h5' }}
                                    />
                                    <CardContent className='card'>
                                        <Typography variant="body2" component="p">
                                            <div>
                                                <SplitFilesDragDrop></SplitFilesDragDrop>
                                            </div>
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </TableCell>
                            <TableCell>
                                {/* <Card className={classes.root} variant="outlined" onClick={() => pdfToPowerpoint()} > */}
                                    {/* <a href='./Trial'>Link</a> */}
                                    {/* <CardContent className='card'> */}
                                        {/* <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            PDF to Powerpoint
                                        </Typography> */}
                                        {/* <Typography variant="h5" component="h2" className='pdf-file'>
                                            pdf to powerpoint
                                        </Typography> */}
                                        {/* <Typography variant="h5" component="h2" className='coming-soon'> */}
                                            {/* <img src='../images/coming4.jpeg' width='50px' height='50px'></img> */}
                                            {/* Coming Soon!!! */}
                                        {/* </Typography> */}
                                    {/* </CardContent> */}
                                {/* </Card> */}
                            </TableCell>
                            <TableCell>
                                <Card className={classes.root} variant="outlined" onClick={() => rotateClockwisePdf()}>
                                    <CardContent className='card'>
                                        <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            Rotate PDF Clockwise 90
                                        </Typography>
                                        <Typography variant="h6" component="h2" className='pdf-file'>
                                            Rotate pdf 90 degree clockwise
                                        </Typography>
                                        <FilesDragDropRotate>
                                                </FilesDragDropRotate>
                                        {/* <Typography variant="h5" component="h2" className='coming-soon'>
                                            <img src='../images/coming4.jpeg' width='50px' height='50px'></img>
                                             Coming Soon!!!
                                        </Typography> */}
                                    </CardContent>

                                </Card> 
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {/* <TableCell> */}
                                {/* <Card className={classes.root} variant="outlined" onClick={() => rotateAnticlockwisePdf()} >
                                    <CardContent className='card'> */}
                                        {/* <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            Rotate PDF Anticlockwise 90
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            Rotate pdf anticlockwise 90
                                        </Typography> */}

                                        {/* <Typography variant="h6" component="h2" className='pdf-file'>
                                            Rotate pdf 90 degree anticlockwise
                                        </Typography>
                                        <Typography variant="h5" component="h2" className='coming-soon'> */}
                                            {/* <img src='../images/coming4.jpeg' width='50px' height='50px'></img> */}
                                            {/* Coming Soon!!!
                                        </Typography>
                                    </CardContent>
                                </Card> */}
                            {/* </TableCell> */}
                            <TableCell>
                                <Card className={classes.root} variant="outlined" onClick={() => htmlToPdf()} >

                                    <CardContent className='card'>
                                        {/* <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            HTML to PDF
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            html to pdf
                                        </Typography> */}

                                        <Typography variant="h6" component="h2" className='pdf-file'>
                                            Text to pdf
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            Please enter text here to convert to pdf
                                            <br />
                                            <div>
                                                <FilesDragDropPdfText>
                                                </FilesDragDropPdfText>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </TableCell>
                            <TableCell>
                                {/* <Card className={classes.root} variant="outlined" onClick={() => PdfToText()}>

                                    <CardContent className='card'> */}
                                        {/* <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            PDF to Text
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            unlock pdf
                                        </Typography> */}

                                        {/* <Typography variant="h6" component="h2" className='pdf-file'>
                                            unlock pdf
                                        </Typography>
                                        <Typography variant="h5" component="h2" className='coming-soon'> */}
                                            {/* <img src='../images/coming4.jpeg' width='50px' height='50px'></img> */}
                                            {/* Coming Soon!!!
                                        </Typography>
                                    </CardContent>
                                </Card> */}
                            </TableCell>
                            <TableCell>
                                {/* <Card className={classes.root} variant="outlined" onClick={() => protectPdf()}>
                                    <CardContent className='card'> */}
                                        {/* <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            Pdf to Word
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            Convert Pdf to word file
                                            <br/>
                                            <PdfToWord></PdfToWord>
                                        </Typography> */}

                                        {/* <Typography variant="h6" component="h2" className='pdf-file'>
                                            Pdf to Word
                                        </Typography>
                                        <Typography variant="h5" component="h2" className='coming-soon'> */}
                                            {/* <img src='../images/coming4.jpeg' width='50px' height='50px'></img> */}
                                            {/* Coming Soon!!!
                                        </Typography>
                                    </CardContent>
                                </Card> */}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                {/* <Card className={classes.root} variant="outlined" onClick={() => organizePdf()} >

                                    <CardContent className='card'> */}
                                        {/* <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            Organize PDF
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            organize pdf
                                        </Typography> */}

                                        {/* <Typography variant="h6" component="h2" className='pdf-file'>
                                            organize pdf
                                        </Typography>
                                        <Typography variant="h5" component="h2" className='coming-soon'> */}
                                            {/* <img src='../images/coming4.jpeg' width='50px' height='50px'></img> */}
                                            {/* Coming Soon!!!
                                        </Typography>
                                    </CardContent>
                                </Card> */}
                            </TableCell>
                            {/* <TableCell>
                                <Card className={classes.root} variant="outlined" onClick={() => repairPdf()}>

                                    <CardContent className='card'> */}
                                        {/* <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            Repair PDF
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            repair pdf
                                        </Typography> */}
                                        {/* <Typography variant="h6" component="h2" className='pdf-file'>
                                            repair pdf
                                        </Typography>
                                        <Typography variant="h5" component="h2" className='coming-soon'> */}
                                            {/* <img src='../images/coming4.jpeg' width='50px' height='50px'></img> */}
                                            {/* Coming Soon!!!
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </TableCell> */}
                            {/* <TableCell>
                                <Card className={classes.root} variant="outlined" onClick={() => signPdf()}>

                                    <CardContent className='card'> */}
                                        {/* <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            Sign PDF
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            sign pdf
                                        </Typography> */}
                                        {/* <Typography variant="h6" component="h2" className='pdf-file'>
                                            sign pdf
                                        </Typography>
                                        <Typography variant="h5" component="h2" className='coming-soon'> */}
                                            {/* <img src='../images/coming4.jpeg' width='50px' height='50px'></img> */}
                                            {/* Coming Soon!!!
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </TableCell> */}
                            {/* <TableCell>
                                <Card className={classes.root} variant="outlined" onClick={() => protectPdf()}>

                                    <CardContent className='card'> */}
                                        {/* <Typography
                                            className={classes.title}
                                            color="textSecondary"
                                            gutterBottom>
                                            Protect PDF
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            protect pdf
                                        </Typography> */}

                                        {/* <Typography variant="h6" component="h2" className='pdf-file'>
                                            Protect PDF
                                        </Typography>
                                        <Typography variant="h5" component="h2" className='coming-soon'> */}
                                            {/* <img src='../images/coming4.jpeg' width='50px' height='50px'></img> */}
                                            {/* Coming Soon!!!
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    </TableBody>
                </Table>
            </TableContainer>
        </Styles>
    )
}