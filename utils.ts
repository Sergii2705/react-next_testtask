import { MS_IN_DAY } from "./constants";

export const howLongAgoPosted = (date: string):string => {
  const dateNow = new Date();
  const datePast = new Date(date)
  const daysLag = Math.ceil(Math.abs(dateNow.getTime() - datePast.getTime()) / MS_IN_DAY);
  let timeHasPassed: string;

  if (daysLag === 0) {
    timeHasPassed = `Posted today`;
  } else if (daysLag < 7) {
    timeHasPassed = `Posted ${daysLag} day${daysLag > 1 ? 's' : ''} ago`;
  } else if (daysLag < 30) {
    const weeksPassed = Math.floor(daysLag / 7);
    timeHasPassed = `Posted ${weeksPassed} week${weeksPassed > 1 ? 's' : ''} ago`;
  } else if (daysLag < 365) {
    const monthPassed = Math.floor(daysLag / 30);
    timeHasPassed = `Posted ${monthPassed} month${monthPassed > 1 ? 's' : ''} ago`;
  } else {
    const yearsPassed = Math.floor(daysLag / 365);
    timeHasPassed = `Posted ${yearsPassed} year${yearsPassed > 1 ? 's' : ''} ago`;
  }

  return timeHasPassed;
}

export type DescriptionType = [_first: string, _responsopilities: string[], _compensationAndBenefits: string[]];

export const parseDescription = (description: string):DescriptionType => {
  const beginning = description.slice(0, description.indexOf('Responsopilities:'));
  const responsopilities = description
    .slice(description.indexOf('Responsopilities:'), description.indexOf('Compensation & Benefits:'))
    .replace('Responsopilities:', '')
    .split('.')
    .slice(0, -1)
    .map(item => item + '.');
  const compensationAndBenefits = description
    .slice(description.indexOf('Compensation & Benefits:'))
    .replace('Compensation & Benefits:', '')
    .split('.')
    .slice(0, -1);

  return [beginning, responsopilities, compensationAndBenefits]; 
}

export const formatSalary = (salary: string): string => {
  return '€ ' + salary.split('-').map(item => item.replace('k', ' 000')).join('—');
}