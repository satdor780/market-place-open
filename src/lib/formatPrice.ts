export function formatPrice(num: number | string | null | undefined): string {
  if (!num) return '';

  const str = num.toString().replace(/\./g, '');

  let result = '';
  let count = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    result = str[i] + result;
    count++;

    if (count % 3 === 0 && i !== 0) {
      result = '.' + result;
    }
  }

  return result;
}
