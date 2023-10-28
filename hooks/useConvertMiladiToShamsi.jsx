export function convertMiladiToShamsi(miladiDate) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };

  const dateObject = new Date(miladiDate);
  const convertShamsiDate = dateObject.toLocaleDateString("fa-IR", options);
  const shamsiDate = convertShamsiDate.split(",")[0].trim();

  return shamsiDate;
}
