export default function DateTimeFormat({ dateString }: { dateString: string }) {
  const date = new Date(dateString);
  // request a weekday along with a long date
  let options: any = { year: 'numeric', month: 'long', day: 'numeric' };
  // const date = parseISO(dateString);
  return <time dateTime={dateString}>{new Intl.DateTimeFormat('en-US', options).format(date)}</time>;
}
