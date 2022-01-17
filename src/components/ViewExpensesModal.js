import React from "react";
import { Button, Modal, Stack } from "react-bootstrap";
import { useBudgets } from "../contexts/BudgetsContext";

export default function ViewExpensesModal({ show, handleClose }) {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudgets();

  return (
    <Modal show={budgetId != null} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Stack direction="horizontal" gap="2">
            <div>Expenses - {budget.name} </div>
          </Stack>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef} type="text" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="max">
          <Form.Label>Maximum Spending</Form.Label>
          <Form.Control
            ref={maxRef}
            type="number"
            required
            min={0}
            step={0.01}
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit">
            Add
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
