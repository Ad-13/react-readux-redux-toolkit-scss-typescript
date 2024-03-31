import React, { FC, useState } from 'react';
import { FieldProps } from 'formik';
import classNames from 'classnames';

import InputError from '@components/inputs/InputError';

import styles from './InputFile.module.scss';

interface IProps extends FieldProps {
  label: string;
  btnText: string;
  isShowError: boolean;
  disabled: boolean;
  multiple: boolean;
}

const InputFile: FC<IProps> = ({
  field: { name, value, onBlur },
  form: { touched, errors, setFieldValue },
  label,
  btnText = 'Choose file',
  isShowError = true,
  disabled,
  multiple,
}) => {
  const [selectedFileNames, setSelectedFileNames] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedFileNames(Array.from(files).map(f => f.name));
      setFieldValue(name, Array.from(files));
    }
  };

  const handleRemoveFile = (fileName: string) => {
    setSelectedFileNames(prevFiles => prevFiles.filter(f => f !== fileName));
    setFieldValue(
      name,
      selectedFileNames.filter(f => f !== fileName),
    );
  };

  const error = (touched[name] && errors[name]) as string;

  return (
    <div className={classNames(styles.inputGroup, { [styles.invalid]: error })}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={styles.fileInput}>
        <input
          type="file"
          id={name}
          name={name}
          onBlur={onBlur}
          onChange={handleFileChange}
          value={''}
          disabled={disabled}
          className={styles.hiddenInput}
          multiple={multiple}
        />
        {selectedFileNames.length > 0 && (
          <div className={styles.selectedFileNames}>
            {selectedFileNames.map((file, index) => (
              <div key={index} className={styles.fileItem}>
                <span>{file}</span>
                <button type="button" onClick={() => handleRemoveFile(file)}>
                  X
                </button>
              </div>
            ))}
          </div>
        )}
        <label htmlFor={name} className={styles.customFileInput}>
          {btnText}
        </label>
      </div>
      {isShowError && error && <InputError error={error} />}
    </div>
  );
};

export default InputFile;
