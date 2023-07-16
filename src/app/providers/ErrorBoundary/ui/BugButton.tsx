import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const throwError = () => {
    setError(true);
  };

  return (
    <button type="button" onClick={throwError}>
      {t('Throw error')}
    </button>
  );
};
