import React from 'react';

import {useTranslation} from '../i18n';

export const useConventions = () => {
  const {t} = useTranslation();
  const [terms, setTerms] = React.useState<boolean>(false);
  const [privacy, setPrivacy] = React.useState<boolean>(false);
  const [processing, setProcessing] = React.useState<boolean>(false);

  const disabled = !terms || !privacy || !processing;

  const acceptPrivacy = {
    text: t('privacyPolicy'),
    url: 'https://example.com/privacy-policy',
    onValueChange: () => setPrivacy(!privacy),
    value: privacy,
  };

  const acceptTerms = {
    text: t('theTermsOfTheUserAgreement'),
    url: 'https://example.com/terms-of-service',
    onValueChange: () => setTerms(!terms),
    value: terms,
  };

  const acceptProcessing = {
    text: t('personalDataProcessingPolicy'),
    url: 'https://example.com/cookie-policy',
    onValueChange: () => setProcessing(!processing),
    value: processing,
  };

  const switches = [acceptTerms, acceptPrivacy, acceptProcessing];

  return {disabled, switches};
};
