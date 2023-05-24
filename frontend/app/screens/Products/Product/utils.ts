export const currencyFormatter = (currency = "USD", format = "en-US") => {
  const formatter = new Intl.NumberFormat(format, {
    style: "currency",
    currency,
  });

  return (value: number) => formatter.format(value);
};

export const calculateDiscount = (price: number, discountPercentage: number | null) => {
    if (!discountPercentage) return null;

    const discountAmount = (price * discountPercentage) / 100;
    return discountAmount;
  };