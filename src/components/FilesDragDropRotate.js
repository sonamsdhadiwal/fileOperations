import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Files from 'react-files';
import ModalLoadingAlert from './ModalLoadingAlert';
import PDFProvider from '../lib/provider/PdfRotateProvider';
import { saveSync } from 'save-file';
import { Document, Page } from 'react-pdf';
import PdfRotateProvider from '../lib/provider/PdfRotateProvider';

class FilesDragDropRotate extends Component {
	state = {
		files: [],
		hasFiles: false,
		modalOpen: false,
		modalLoading: false,
		modalMsg: {
			err: null,
			success: null
		},
		active: 0
	}

	onFilesChange = (files) => {
		console.log("files", files);
		this.setState({
			files,
			hasFiles: files.length > 0 ? true : false
		}, () => {
			// console.log(this.state)
		})
	}

	onFilesError = (error, file) => {
		console.log('[LOG] Error code ' + error.code + ': ' + error.message)
	}

	filesRemoveOne = (file) => {
		this.refs.files.removeFile(file)
	}

	filesClearAndRemoveAll = () => {
		this.setState({
			modalOpen: false,
			modalLoading: false,
			modalMsg: {
				err: null,
				success: null
			}
		}, () => {
			this.filesRemoveAll()
		})
	}

	filesRemoveAll = () => {
		this.setState({
			files: [],
			hasFiles: false
		}, () => {
			this.refs.files.removeFiles()
		})
	}

	startMerge = () => {
		this.active = 1;

// 		const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
		let tempMsg
		this.setState({
			files: this.state.files,
			hasFiles: false,
			modalOpen: true,
			modalLoading: true
		}, () => {
			// this.refs.modal.handleOpen()
			console.log("[LOG] Starting merge...")
		})

		function onDocumentLoadSuccess({ numPages }) {
			console.log("Document load success ")
			// setNumPages(numPages);
		  }

		// return (
		// 	<div>
			
		// 	  <Document
		// 		file={this.state.files}
		// 		onLoadSuccess={onDocumentLoadSuccess}
		// 	  >
		// 		<Page pageNumber={1} scale={1.5} rotate={90} />
		// 	  </Document>
		// 	  {/* <p>Page {pageNumber} of {numPages}</p> */}
		// 	</div>
		//   );

		// PDFProvider.mergeBetweenPDF(this.state.files) 
			// .then((res) => {
			// 	// console.log(res)
			// 	if (res && res.hasOwnProperty("pdfFile")) {
			// 		if (res.pdfFile) {
			// 			if (res.pdfNotMergedList.length !== this.state.files.length) {
			// 				const fileName = "output_merge_" + new Date().toISOString().replace(":", "_").replace("T", "_").replace("Z", "") + ".pdf"
			// 				saveSync(res.pdfFile, fileName)
			// 			}

			// 			if (res.pdfNotMergedList.length > 0) {
			// 				if (res.pdfNotMergedList.length > 0 && res.pdfNotMergedList.length === this.state.files.length) {
			// 					tempMsg = "No merge PDF output could be done. Following files have problem and need to be merged manually: " + res.pdfNotMergedList.join(", ")
			// 				} else {
			// 					tempMsg = "Following files have problem and need to be merged manually: " + res.pdfNotMergedList.join(", ")
			// 				}

			// 				console.log("[LOG] " + tempMsg)
			// 				this.setState({
			// 					modalOpen: true,
			// 					modalLoading: false,
			// 					modalMsg: {
			// 						err: tempMsg,
			// 						success: null
			// 					}
			// 				}, () => { console.log("[LOG] Modal closed.") })
			// 			}
			// 			else {
			// 				tempMsg = "Merge totally successfull. Please check download folder!!"
			// 				console.log("[LOG] " + tempMsg)
			// 				this.setState({
			// 					modalOpen: true,
			// 					modalLoading: false,
			// 					modalMsg: {
			// 						err: null,
			// 						success: tempMsg
			// 					}
			// 				}, () => { console.log("[LOG] Closed modal") })
			// 			}
			// 		}
			// 	} else {
			// 		tempMsg = "Internal error at merging! Send this error to the developer in charge."
			// 		console.log(tempMsg)
			// 		this.setState({
			// 			modalOpen: true,
			// 			modalLoading: false,
			// 			modalMsg: {
			// 				err: tempMsg,
			// 				success: null
			// 			}
			// 		}, () => { console.log("[LOG] Closed modal") })
			// 	}
			// })
			// .catch((err) => {
			// 	console.log("[LOG] " + err)
			// })
			// .finally(() => this.filesRemoveAll())
	}

	onDocumentLoadSuccess = ( numPages ) => {
		numPages = 2;
		// setNumPages(numPages);
	  }

	render() {
		const { classes } = this.props;
		console.log("props", this.props);

		return (
			<div className="files">
				<Grid container spacing={10} justify="center" className={classes.gridContainer}>
					<Grid item className={classes.dropFilesGridZone}>

						<Files

							ref='files'
							className={classes.dropFilesZone}
							onChange={this.onFilesChange}
							onError={this.onFilesError}
							accepts={['.pdf']}
							multiple
							maxFiles={1}
							maxFileSize={10000000}
							minFileSize={0}
							clickable
						>
							<div className={classes.dropFilesZoneDiv}>Drop files here or click to upload</div>
						</Files>
					</Grid>
				</Grid>

				<Grid container spacing={32} justify="center">
					{
						this.state.files.length > 0
							?
							<Grid item className={classes.dropFilesGridZone}>
								<div className='files-list'>
									<ul>{this.state.files.map((file) =>
										<li className='files-list-item' key={file.id}>
											<div className='files-list-item-content'>
												<div className='files-list-item-content-item files-list-item-content-item-1'>{file.name}</div>
												<div className='files-list-item-content-item files-list-item-content-item-2'>{file.sizeReadable}</div>
											</div>
											<div
												id={file.id}
												className='files-list-item-remove'
												onClick={this.filesRemoveOne.bind(this, file)} // eslint-disable-line
											/>
										</li>
									)}</ul>
								</div>
							</Grid>
							:
							<Grid item className={classes.dropFilesWarningGridZone}>
								<div className='files-list'>
									Please Select files
								</div>
							</Grid>
					}
				</Grid>

				<Grid container spacing={16} justify="center">
					<Grid item>
						<Button variant="contained" color="primary"
							disabled={!this.state.hasFiles}
							className={classes.mergeButton}
							onClick={this.startMerge}>
							   SUBMIT
						</Button>

						{this.active === 1 && <PdfRotateProvider/>}

					</Grid>
					<Grid item>
						<Button variant="outlined" color="secondary" onClick={this.filesClearAndRemoveAll} 
								className={classes.mergeButton}>
							RESET FILES
						</Button>
					</Grid>
				</Grid>

				<ModalLoadingAlert
					isOpen={this.state.modalOpen}
					isLoading={this.state.modalLoading}
					msg={this.state.modalMsg}
					clearModalStatus={this.filesClearAndRemoveAll} />
			</div>
		);
	}
}

const styles = theme => ({
	dropFilesGridZone: {
		width: '70%'
	},
	dropFilesZone: {
		padding: '2em',
		border: '2px dashed rgba(0, 0, 0, .1)',
		color: 'rgba(0, 0, 0, .4)',
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		boxSizing: 'border-box',
		textAlign: 'center'
	},
	dropFilesZoneDiv: {
		width: '100%'
	},
	dropFilesWarningGridZone: {
		width: '70%',
		textAlign: 'center',
		color: 'red',
		fontWeight: 'bold'
	},

	gridContainer: {
		paddingTop: '10px'
	},
	mergeButton: {
		margin: '10px',
		width: '166px'
	}
});

export default withStyles(styles, { name: 'MuiFilesDragDrop' })(FilesDragDropRotate);