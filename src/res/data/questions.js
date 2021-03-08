const questions = [
    {
        id: "2",
        Question: "An algebraic expression containing three terms is called a",
        Option1: "monomial",
        Option2: "binomial",
        Option3: "trinomial",
        Option4: "all of these",
        CorrectOption: "3",
        MarksAllocated: "1",
        DifficultyLevel: "Easy"
    },
    {
        id: "3",
        Question: "Number of terms in the expression 3.x^2.y - 2.y^2.z - z^2.x + 5 is",
        Option1: "2",
        Option2: "3",
        Option3: "4",
        Option4: "5",
        CorrectOption: "3",
        MarksAllocated: "1",
        DifficultyLevel: "Easy"
    },
    {
        id: "4",
        Question: "The terms of expression 4.x^2 - 3.x.y are:",
        Option1: "4.x^2 and -3.x.y",
        Option2: "4.x^2 and 3.x.y",
        Option3: "4.x^2 and -x.y",
        Option4: "x^2 and x.y",
        CorrectOption: "1",
        MarksAllocated: "1",
        DifficultyLevel: "Easy"
    },
    {
        id: "5",
        Question: "Factors of -5.x^2.y^2.z are",
        Option1: "-5.x.y.z",
        Option2: "-5.x^2.y.z",
        Option3: "-5.x.x.y.y.z",
        Option4: "-5.x.y.z^2",
        CorrectOption: "3",
        MarksAllocated: "1",
        DifficultyLevel: "Medium"
    },
    {
        id: "6",
        Question: "Coefficient of x in -9.x.y^2.z is",
        Option1: "9.y.z",
        Option2: "-9.y.z",
        Option3: "9.y^2.z",
        Option4: "-9.y^2.z",
        CorrectOption: "4",
        MarksAllocated: "1",
        DifficultyLevel: "Medium"
    },
    {
        id: "7",
        Question: "The subtraction of 5 times of y from x is",
        Option1: "5x - y",
        Option2: "y - 5x",
        Option3: "x - 5y",
        Option4: "5y - x",
        CorrectOption: "3",
        MarksAllocated: "1",
        DifficultyLevel: "Easy"
    },
    {
        id: "8",
        Question: "The side length of the top of a square table is x. The expression for perimeter is:",
        Option1: "4 + x",
        Option2: "2x",
        Option3: "4x",
        Option4: "8x",
        CorrectOption: "3",
        MarksAllocated: "1",
        DifficultyLevel: "Medium"
    },
    {
        id: "9",
        Question: "The expression for the number of diagonals that we can make from one vertex of a n sided polygon is:",
        Option1: "2n + 1",
        Option2: "n - 2",
        Option3: "5n + 2",
        Option4: "n - 3",
        CorrectOption: "4",
        MarksAllocated: "1",
        DifficultyLevel: "Hard"
    },
    {
        id: "10",
        Question: "123.x^2.y - 138.x^2.y is a like term of",
        Option1: "10.x.y",
        Option2: "-15.x.y",
        Option3: "-15.x.y^2",
        Option4: "10.x^2.y",
        CorrectOption: "4",
        MarksAllocated: "1",
        DifficultyLevel: "Hard"
    },
    {
        id: "11",
        Question: "The value of 3.x^2 - 5.x + 3 when x = 1 is",
        Option1: "1",
        Option2: "0",
        Option3: "-1",
        Option4: "11",
        CorrectOption: "1",
        MarksAllocated: "1",
        DifficultyLevel: "Easy"
    },
    {
        id: "12",
        Question:  "(2^20 ÷ 2^15) × 2^3 =",
        Option1: "2^15",
        Option2: "2^8",
        Option3: "2^5",
        Option4: "None of these",
        CorrectOption: "2",
        MarksAllocated: "1",
        DifficultyLevel: "Hard"
    },
    {
        id: "13",
        Question: "(5/6)^0 =",
        Option1: "1",
        Option2: "6/5",
        Option3: "0",
        Option4: "None of these",
        CorrectOption: "1",
        MarksAllocated: "1",
        DifficultyLevel: "Easy"
    },
    {
        id: "14",
        Question: "(2^2)^n = (2^3)^4, then n = ",
        Option1: "4",
        Option2: "3",
        Option3: "12",
        Option4: "6",
        CorrectOption: "4",
        MarksAllocated: "1",
        DifficultyLevel: "Medium"
    },
    {
        id: "15",
        Question: "(-7/5)^-1 =",
        Option1: "5/7",
        Option2: "-5/7",
        Option3: "7/5",
        Option4: "None of these",
        CorrectOption: "2",
        MarksAllocated: "1",
        DifficultyLevel: "Medium"
    },
    {
        id: "16",
        Question: "81^5 ÷ (3^2)^5 =",
        Option1: "3^10",
        Option2: "3^2",
        Option3: "3^5",
        Option4: "None of these",
        CorrectOption: "1",
        MarksAllocated: "1",
        DifficultyLevel: "Medium"
    },
    {
        id: "17",
        Question: "(8^2 × 8^4) - 2^18 =",
        Option1: "2^2",
        Option2: "2^4",
        Option3: "0",
        Option4: "None of these",
        CorrectOption: "3",
        MarksAllocated: "1",
        DifficultyLevel: "Hard"
    },
    {
        id: "18",
        Question: "(3^7) ÷ (81 × 3^3) =",
        Option1: "3",
        Option2: "3^2",
        Option3: "3^0",
        Option4: "None of these",
        CorrectOption: "3",
        MarksAllocated: "1",
        DifficultyLevel: "Hard"
    },
    {
        id: "19",
        Question: "(1/4)^-3 - (1/3)^-3 =",
        Option1: "37",
        Option2: "1/37",
        Option3: "-37",
        Option4: "-1/37",
        CorrectOption: "1",
        MarksAllocated: "1",
        DifficultyLevel: "Medium"
    },
    {
        id: "20",
        Question: "(10 × 5^(n+1)+ 25 × 5^n) ÷ (3 × 5^(n+2)+ 10 × 5^(n+1))",
        Option1: "3/5",
        Option2: "1",
        Option3: "0",
        Option4: "5",
        CorrectOption: "1",
        MarksAllocated: "1",
        DifficultyLevel: "Hard"
    },
    {
        id: "21",
        Question:  "(-1)^50 × (-1)^51 × (1)^100 × (-1)^101 =",
        Option1: "-1",
        Option2: "1",
        Option3: "0",
        Option4: "2",
        CorrectOption: "2",
        MarksAllocated: "1",
        DifficultyLevel: "Easy"
    },
    {
        id: "22",
        Question: "Find the mode for the data set, which shows the heights( in inches ) of 10 students in a class: 60, 65, 63, 62, 65, 70, 62, 68, 60, 65",
        Option1: "62",
        Option2: "65",
        Option3: "70",
        Option4: "60",
        CorrectOption: "2",
        MarksAllocated: "1",
        DifficultyLevel: "Hard"
    }
  ]
  
  
export default questions;
//   export default (diff, n = 4) =>
//           Promise.resolve(qbank.filter(qs=>qs.DifficultyLevel.includes(diff)).sort(() => 0.5 - Math.random()).slice(0, n));
  