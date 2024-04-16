import React, { FC } from 'react';
import { FieldProps } from 'formik';
import classNames from 'classnames';

import InputError from '@components/inputs/InputError';
import Button from '@components/general/Button';

import { baseUrl } from '@constants/api';

import styles from './InputFileImage.module.scss';

interface IProps extends FieldProps<(string | File)[]> {
  label: string;
  btnText: string;
  isShowError: boolean;
  disabled: boolean;
  multiple: boolean;
}

const InputFileImage: FC<IProps> = ({
  field: { name, onBlur, value },
  form: { touched, errors, setFieldValue },
  label,
  btnText = 'Choose file',
  isShowError = true,
  disabled,
  multiple,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setFieldValue(name, [...value, ...Array.from(files)]);
    }
  };

  const handleRemoveFile = (fileName: string) => {
    setFieldValue(
      name,
      value.filter(f => (typeof f === 'string' ? f !== fileName : f.name !== fileName)),
    );
  };

  const getFileUrl = (item: string | File) =>
    typeof item === 'string' ? `${baseUrl}/${item}` : URL.createObjectURL(item);

  const error = (touched[name] && errors[name]) as string;

  return (
    <div className={classNames(styles.inputGroup, { [styles.invalid]: error })}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={styles.fileInput}>
        {value.length > 0 && (
          <div className={styles.selectedFileNames}>
            {value.map((valueItem, index) => {
              const item = typeof valueItem === 'string' ? valueItem : valueItem.name;
              return (
                <div key={index} className={styles.fileItem}>
                  <Button type="button" onClick={() => handleRemoveFile(item)}>
                    <i className="fa-regular fa-trash-can" />
                  </Button>
                  <span>{item}</span>
                  <img className={styles.previewImg} src={getFileUrl(valueItem)} alt="Preview" />
                </div>
              );
            })}
          </div>
        )}
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
          accept="image/*"
        />
        <label className={styles.customFileInput} htmlFor={name}>
          {btnText}
        </label>
      </div>
      {isShowError && error && <InputError error={error} />}
    </div>
  );
};

export default InputFileImage;
