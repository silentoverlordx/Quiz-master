export async function fetchQuestions(amount = 5) {
  const res = await fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple`);
  const data = await res.json();
  return data.results;
}

