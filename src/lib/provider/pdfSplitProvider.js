import { PDFDocumentFactory, PDFDocumentWriter } from 'pdf-lib';

function splitBetweenPdf(pdfFileList, value1, value2) {
	let returnObj = { pdfFile: null, pdfNotMergedList: [] }
	let splitFileObj = { pdfFile: null, pdfNotMergedList: [] }

	if (pdfFileList.length > 0) {
		const reader = new FileReader();
		reader.onload = function (evt) { console.log(evt.target.result); };

		const pdfDoc = PDFDocumentFactory.create();
		const splitPdfDoc = PDFDocumentFactory.create();
		let iterPdfDoc = PDFDocumentFactory.create();
		// let iterPdfDocBytes;
		let pdfFilePromiseArrayBufferList = [];
		let pdfNotMergedList = [];
		let pdfSplitfileList = [];
		let iterPdfDocPages = [];
		let iterPdfSplitDocPages = [];

		// Get all file URLs into a list using Promises and fetch API
		pdfFileList.forEach((pdfFile) => {
			// console.log(pdfFile)
			pdfFilePromiseArrayBufferList.push(
				fetch(URL.createObjectURL(pdfFile))
					.then(res => res.arrayBuffer())
			)
		})

		return Promise
			.all(pdfFilePromiseArrayBufferList)
			.then((pdfArrayBufferFileList) => {
				for (let i = 0; i < pdfArrayBufferFileList.length; i++) {
					// console.log(pdfArrayBufferFileList[i])
					// iterPdfDocBytes = reader.readAsArrayBuffer(pdfBlob)
					try {
						iterPdfDoc = PDFDocumentFactory.load(new Uint8Array(pdfArrayBufferFileList[i]))
						iterPdfDocPages = iterPdfDoc.getPages();
						//iterPdfSplitDocPages = iterPdfDoc.getPages();
						iterPdfDoc = PDFDocumentFactory.create();
						// Add each page in a temp file to check if all pages from this PDF can be added in the final one
						iterPdfDocPages.forEach((pdfPage) => {
							console.log("pdfPages", pdfPage);
							iterPdfDoc.addPage(pdfPage);
						})

						for (let j = value1-1; j < value2-1; j++) {
							splitPdfDoc.addPage(iterPdfDocPages[j]);
						}
						// No errors? Then add all pages to the final PDF
						iterPdfDocPages.forEach((pdfPage) => {
							//pdfSplitfileList.push(pdfPage);
							pdfDoc.addPage(pdfPage)
						})
					} catch (err) {
						console.log(err)
						// console.log("File " + pdfFileList[i].name + " not merged due to the following error: " + err.message)
						pdfNotMergedList.push(pdfFileList[i].name);
						pdfSplitfileList.push(pdfFileList[i].name);
					}
				}

				returnObj.pdfFile = PDFDocumentWriter.saveToBytes(pdfDoc);
				splitFileObj.pdfFile = PDFDocumentWriter.saveToBytes(splitPdfDoc);
				returnObj.pdfNotMergedList = pdfNotMergedList
				return splitFileObj
			})
			.catch((err) => {
				console.log(err)
				returnObj.pdfFile = null
				returnObj.pdfNotMergedList = pdfNotMergedList
				return returnObj
			})
	}
}

export default {
	splitBetweenPdf
}
