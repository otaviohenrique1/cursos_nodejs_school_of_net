const PDFKit = require('pdfkit');
const fs = require('fs');

// Cria arquivo pdf

const pdf = new PDFKit();
const myConst = 'Leonan';

// HEADER
pdf
    .image('logo.png', 50, 50, { width: 50, height: 50})
    .text('Company', 120, 50, { align: 'right' })
    .text('Address, 1', 200, 70, { align: 'right' })
    .text('City - State', 200, 85, { align: 'right' });
// BODY
pdf
    .text('My text Lorem ipsum', 50, 200)
    .text(`Date: ${new Date()}`, 50, 220)
    .text(`Name: ${myConst}`, 50, 240);
// FOOTER
pdf
    .fontSize(12)
    .text('School of net LTDA', 50, 700, { align: 'center' });

pdf.pipe(fs.createWriteStream('first.pdf'));
pdf.end();