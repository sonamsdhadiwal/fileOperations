import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import jsPDF from 'jspdf';
import { TextareaAutosize } from '@material-ui/core';

class FilesDragDropPdfText extends Component {
	constructor() {
		super();
		this.state = {
			files: [],
			hasFiles: false,
			modalOpen: false,
			modalLoading: false,
			modalMsg: {
				err: null,
				success: null
			},
			textValue: '',
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ textValue: event.target.value });
	}

	generatePDF = () => {
		var doc = new jsPDF("p", "px", "a4");
		doc.html(document.querySelector("#content"), {
			callback: function (pdf) {
				pdf.save("output.pdf");
			}
		})
	}

	render() {
		const { classes } = this.props;
		console.log("props", this.props);

		return (
			<div className="files">
				<Grid container spacing={16} justify="center">
					<Grid item>
						<TextareaAutosize maxRows={4000} aria-label="maximum height" placeholder="Maximum 4000 rows"
							value={this.state.textValue}
							onChange={this.handleChange}>
						</TextareaAutosize>
						<div id="content">
							{this.state.textValue}
						</div>

						<Button variant="contained" color="primary"
							disabled={!this.state.textValue}
							className={classes.mergeButton}
							onClick={this.generatePDF}>
							SUBMIT
						</Button>
					</Grid>
					<Grid item>
						{/* <Button variant="outlined" color="secondary" onClick={this.filesClearAndRemoveAll} 
								className={classes.mergeButton}>
							RESET FILES
						</Button> */}
					</Grid>
				</Grid>
			</div>
		);
	}
}

const styles = theme => ({
	gridContainer: {
		paddingTop: '10px'
	},
	mergeButton: {
		margin: '10px',
		width: '166px'
	}
});

export default withStyles(styles, { name: 'MuiFilesDragDrop' })(FilesDragDropPdfText);
