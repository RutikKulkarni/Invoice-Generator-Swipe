import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Invoice from "./Invoice";
import InvoiceModal from "./InvoiceModal";
import { deleteInvoice } from "../redux/action";

const Invoices = () => {
  const invoices = useSelector((state) => state.invoices);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ref, setRef] = useState(1);
  useEffect(() => {}, [ref]);

  const [invoiceState, setInvoiceState] = useState({
    isOpen: false,
    currency: "$",
    currentDate: "",
    dateOfIssue: "",
    billTo: "",
    billToEmail: "",
    billToAddress: "",
    billFrom: "",
    billFromEmail: "",
    billFromAddress: "",
    notes: "",
    total: "0.00",
    subTotal: "0.00",
    taxRate: "",
    taxAmount: "0.00",
    discountRate: "",
    discountAmount: "0.00",
    invoiceNumber: "",
    closeModal: false,
    items: [
      {
        id: 0,
        name: "",
        description: "",
        quantity: 1,
        price: "1.00",
      },
    ],
  });

  const [isOpen, setIsOpen] = useState(false);

  const openInvoice = (props) => {
    setInvoiceState(props);
    setIsOpen(true);
  };

  const editInvoice = (props) => {
    navigate(`/edit-invoice/${props.invoiceNumber}`);
  };

  const removeInvoice = (props) => {
    dispatch(deleteInvoice(props));
    setRef((prevRef) => prevRef + 1);
  };

  const closeModal = () => setIsOpen(false);

  const InvoicesDetails = () => {
    return invoices
      .filter((inv) => inv.billFrom !== "")
      .map((inv) => (
        <Invoice
          key={inv.invoiceNumber}
          val={inv}
          view={() => openInvoice(inv)}
          edit={() => editInvoice(inv)}
          remove={() => removeInvoice(inv)}
        />
      ));
  };

  return (
    <div className="homePage">
      <Row>
        <Col>
          <h1 className="invoiceGenerator">Invoice Generator</h1>
        </Col>
        <Col>
          <Link to="/create-invoice">
            <Button variant="primary">Create Invoice</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        {invoices.length === 1 ? (
          <h5>No Invoices Available</h5>
        ) : (
          <InvoicesDetails />
        )}
      </Row>
      <InvoiceModal
        showModal={isOpen}
        closeModal={closeModal}
        info={invoiceState}
        items={invoiceState.items}
        currency={invoiceState.currency}
        subTotal={invoiceState.subTotal}
        taxAmount={invoiceState.taxAmount}
        discountAmount={invoiceState.discountAmount}
        total={invoiceState.total}
      />
    </div>
  );
};

export default Invoices;
