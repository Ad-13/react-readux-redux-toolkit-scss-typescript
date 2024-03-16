import { showError } from '@components/general/Toast/toastHeplers';

export default function handleInterceptorsError(errors: [{ message: string }]) {
  console.error('An error occurred:', errors[0].message);
  showError('An error occurred: ' + errors[0].message);
}
