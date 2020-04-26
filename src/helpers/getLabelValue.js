import { LABELS_TO_TYPES } from 'constants/typesLabels';
const EXTRA_LABELS = {
  C: '°C',
  F: '°F',
};
export const getLabelValue = label => ({
  label: EXTRA_LABELS[label] || label,
  value: LABELS_TO_TYPES[label],
});
