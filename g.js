const subjects = ['NodeJS', 'Android', 'iOS', 'PHP', 'Javascript', 'React'];

// subjects[1] = 'Angular';
// subjects.pop();
// subjects.shift();
// subjects.push('Angular', 'Java');
// subjects.unshift('Angular', 'Java');

// subjects.splice(2, 2);
subjects.splice(3, 0, 'Angular', 'Java');

console.log(subjects);
