import React from 'react';

const Invoice = ({ val, view, edit, remove }) => {
  return (
    <div className="invoice">
      <div className=''>
        Invoice No: {val.invoiceNumber}
        <span className="right">
          Date: {val.dateOfIssue}{' '}
          <img
            className="image"
            onClick={view}
            src="././svg's/view.svg"
            alt="View"
          />
        </span>
      </div>
      <div>
        From: {val.billFrom}
        <span className="right">
          To: {val.billTo}
          <img
            className="image"
            onClick={edit}
            src="././svg's/edit.svg"
            alt="Edit"
          />
        </span>
      </div>
      <div>
        {val.billFromEmail}
        <span className="right">
          {val.billToEmail}
          <img
            className="image"
            onClick={remove}
            src="././svg's/delete.svg"
            alt="Delete"
          />
        </span>
      </div>
    </div>
  );
};

export default Invoice;
