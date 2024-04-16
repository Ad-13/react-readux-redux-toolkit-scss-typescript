import React, { useEffect, useCallback, useRef } from 'react';
import { useFormikContext } from 'formik';

interface IProps {
  debounce?: number;
}

const AutoSubmit: React.FC<IProps> = ({ debounce = 0 }) => {
  const { values, initialValues, isSubmitting, submitForm } = useFormikContext();
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  const handleSubmit = useCallback(() => {
    submitForm();
  }, []);

  useEffect(() => {
    if (values !== initialValues) {
      if (isSubmitting) return;

      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);

      timeoutIdRef.current = setTimeout(() => {
        handleSubmit();
        timeoutIdRef.current = null;
      }, debounce);
    }
  }, [values]);

  return null;
};

export default AutoSubmit;
