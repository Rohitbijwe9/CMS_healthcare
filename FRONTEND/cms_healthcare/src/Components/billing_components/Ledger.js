import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Ledger() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await axios.post('http://127.0.0.1:8000/bill/Ledger/', data);
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="sd" className="form-label">
            Start Date
          </label>
          <input
            type="date"
            id="sd"
            className={`form-control ${errors.start_date ? 'is-invalid' : ''}`}
            {...register('start_date', {
              required: 'Start date is required',
            })}
          />
          {errors.start_date && <div className="invalid-feedback">{errors.start_date.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="ed" className="form-label">
            End Date
          </label>
          <input
            type="date"
            id="ed"
            className={`form-control ${errors.end_date ? 'is-invalid' : ''}`}
            {...register('end_date', {
              required: 'End date is required',
            })}
          />
          {errors.end_date && <div className="invalid-feedback">{errors.end_date.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="si" className="form-label">
            Sum Insured
          </label>
          <input
            type="text"
            id="si"
            className={`form-control ${errors.sum_insured ? 'is-invalid' : ''}`}
            {...register('sum_insured', {
              required: 'Sum Insured is required',
            })}
          />
          {errors.sum_insured && <div className="invalid-feedback">{errors.sum_insured.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="ba" className="form-label">
            Balance Amount
          </label>
          <input
            type="number"
            id="ba"
            className={`form-control ${errors.balance_amount ? 'is-invalid' : ''}`}
            {...register('balance_amount', {
              required: 'Balance amount is required',
            })}
          />
          {errors.balance_amount && <div className="invalid-feedback">{errors.balance_amount.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="payerc" className="form-label">
            Payer Code
          </label>
          <input
            type="text"
            id="payerc"
            className={`form-control ${errors.payer_code ? 'is-invalid' : ''}`}
            {...register('payer_code', {
              required: 'Payer code is required',
            })}
          />
          {errors.payer_code && <div className="invalid-feedback">{errors.payer_code.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="patientc" className="form-label">
            Patient Code
          </label>
          <input
            type="text"
            id="patientc"
            className={`form-control ${errors.patient_code ? 'is-invalid' : ''}`}
            {...register('patient_code', {
              required: 'Patient code is required',
            })}
          />
          {errors.patient_code && <div className="invalid-feedback">{errors.patient_code.message}</div>}
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" id="ia" {...register('is_applicable')} className="form-check-input" checked />
          <label htmlFor="ia" className="form-check-label">
            Is Applicable
          </label>
        </div>

        <div className="mb-3">
          <input
            type="submit"
            value="SAVE DATA"
            className="btn btn-outline-success col-12 btn-lg"
          />
        </div>
      </form>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Ledger;
