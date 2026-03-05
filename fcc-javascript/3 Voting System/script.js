const poll = new Map();

const addOption = (option) => {
  if (!option) {
    return "Option cannot be empty.";
  }

  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }

  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
};

const vote = (option, voterId) => {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const voters = poll.get(option); //Get do Map retorna referencia, não valor 

  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voterId); //Add direto dentro do Map, usando o Set especifico
  return `Voter ${voterId} voted for "${option}".`;
};

const displayResults = () => {
  let lines = ["Poll Results:"];

  //for...of por ser um Map, e ficar organizado
  for (let [option, voters] of poll) {
    lines.push(`${option}: ${voters.size} votes`);
  }

  return lines.join("\n");
};

addOption("Turkey");
addOption("Morocco");
addOption("Brazil");

vote("Turkey", 1);
vote("Turkey", 2);
vote("Morocco", 3);

console.log(displayResults());
