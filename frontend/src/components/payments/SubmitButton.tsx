export const SubmitButton = ({ processing, error, children, disabled }) => (
  <button
    className={` className="py-2 px-7 mt-4 w-48 bg-primary-600 text-base text-primary-50 font-semibold rounded-[10px] self-end" ${
      error ? 'SubmitButton--error' : ''
    }`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? 'Processing...' : children}
  </button>
);
