// JavaScript code goes here

// Older Movies

const movieList = [
  {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6,
  },
  {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0,
  },
  {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4,
  },
  {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7,
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0,
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5,
  },
];

console.log(
  movieList.filter((movie) => movie.year < 2000).map((movie) => movie.title)
);

// ############################################################################

// Government Forms

const governmentForms = [
  {
    name: "Plutocracy",
    definition: "Rule by the wealthy",
  },
  {
    name: "Oligarchy",
    definition: "Rule by a small number of people",
  },
  {
    name: "Kleptocracy",
    definition: "Rule by the thieves",
  },
  {
    name: "Theocracy",
    definition: "Rule by a religious elite",
  },
  {
    name: "Democracy",
    definition: "Rule by the people",
  },
  {
    name: "Autocracy",
    definition: "Rule by a single person",
  },
];

const formsEndingWithCy = governmentForms
  .filter((govForm) => govForm.name.endsWith("cy"))
  .map((govForm) => govForm.name);

console.log(formsEndingWithCy);

// ############################################################################

// Arrays Sum

const arrays = [[1, 4], [11], [3, 5, 7]];

const arraysSum = arrays.reduce((acc, value) => {
  return (
    acc +
    value.reduce((acc, value) => {
      return acc + value;
    }, 0)
  );
}, 0);

console.log(arraysSum);

// ############################################################################

// Student Results

const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4],
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4],
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3],
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2],
  },
];

// Compute female student results
const femaleStudentsResults = [];
for (const student of students) {
  if (student.sex === "f") {
    let gradesSum = 0;
    for (const grade of student.grades) {
      gradesSum += grade;
    }
    const averageGrade = gradesSum / student.grades.length;
    femaleStudentsResults.push({
      name: student.name,
      avgGrade: averageGrade,
    });
  }
}

/* let femaleStudentsResults2 = students.filter((student) => student.sex === "f");
console.log(femaleStudentsResults2);

femaleStudentsResults2 = femaleStudentsResults2.map(function (student) {
  return {
    name: student.name,
    grades: student.grades,
  };
});
console.log(femaleStudentsResults2);

femaleStudentsResults2 = femaleStudentsResults2.map(function (student) {
  return {
    name: student.name,
    avgGrade:
      student.grades.reduce((acc, value) => acc + value, 0) /
      student.grades.length,
  };
}); */

let femaleStudentsResults2 = students
  .filter((student) => student.sex === "f")
  .map((student) => {
    return {
      name: student.name,
      avgGrade:
        student.grades.reduce((acc, value) => acc + value, 0) /
        student.grades.length,
    };
  });

console.log(femaleStudentsResults2);
console.log(femaleStudentsResults);
