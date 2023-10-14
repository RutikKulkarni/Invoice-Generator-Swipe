# Invoice-Generator-Swipe  - React App
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses [jspdf-react](https://www.npmjs.com/package/jspdf-react) to capture the data from the modal and covert it from canvas -> pdf.

### Live Demo
[https://invoice-generator-react.netlify.app/](https://invoive-generator.netlify.app/)

### Screenshots
<img src="https://i.imgur.com/wRetnxk.png" style="max-width: 100px; width: 100%; height: auto;">
<img src="https://i.imgur.com/AZChaei.png" style="max-width: 100px; width: 100%; height: auto;">
<img src="https://i.imgur.com/Bz3K3DE.png" style="max-width: 100px; width: 100%; height: auto;">

### Installation

```
[git clone https://github.com/RutikKulkarni/Invoice-Generator-Swipe

npm install

npm start / npm run build
```

### To-Do
- [x] Finish parsing data into Preview Modal

- [x] Currency Picker

- [x] Calculate Tax and Discounts

- [ ] Store invoices in Firebase DB

## File Structure

```plaintext
invoice-generator
│   .gitignore
│   package.json
│   README.md
│
├── node_modules
│   # Node.js modules (automatically generated)
│
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── delete.svg
    ├── edit.svg
    ├── index.css
    ├── index.html
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    ├── setupTests.js
    ├── view.svg
    │
    ├── components
    │   ├── EditableField.js
    │   ├── Invoice.js
    │   ├── InvoiceForm.js
    │   ├── InvoiceItem.js
    │   ├── InvoiceModal.js
    │   └── Invoices.js
    │
    └── redux
        ├── action.js
        ├── invoiceReducer.js
        └── store.js
```
