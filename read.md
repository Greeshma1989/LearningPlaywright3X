# LearningPlaywright3X

This repository is a beginner-friendly JavaScript learning workspace that contains practice files and examples organized by chapter. It focuses on JavaScript fundamentals such as syntax, identifiers, literals, operators, and basic coding concepts.

## Repository structure

- Chapter_00_RICEPOT_Prompt/ - prompt and test plan files related to RICE POT Prompt practice.
- Chapter_01_JS_Basics/ - basic JavaScript examples such as Hello World and first code exercises.
- Chapter_02_JS_Concept/ - JavaScript concept practice materials.
- Chapter_03_identifier/ - identifier rules, comments, and identifier-related examples.
- Chapter_04_Literal/ - literal values, null/undefined handling, and number examples.
- Chapter_05_operators/ - assignment, arithmetic, comparison, logical, string, ternary, and nested ternary operator examples.
- Chapter_06_Incre&Decre_operaters/ - increment and decrement operator practice files.
- Chapter_07_switch/ - nested switch, scenario-based switch, and switch question examples.
- Chapter_08_Loops/ - loop practice materials.
- Chapter_08_Userinputs/ - JavaScript input, Node.js input, and file input examples.
- Hackerank-interview-coding/ - interview-style JavaScript practice files, including conditional logic exercises.
- Task_23July/ - standalone task exercises for additional JavaScript practice.

## How to use this repository

1. Open any chapter folder and read the JavaScript files.
2. Run the scripts with Node.js, for example:
   - node Chapter_01_JS_Basics/01_HelloWorld.js
3. Practice by editing the code and observing the output.
4. For input-based programs, enter the value in the terminal when prompted.

Note about PowerShell and special characters: Quote paths that contain special characters such as `&` when running them in PowerShell. For example:

```powershell
node 'Chapter_06_Incre&Decre_operaters/24_Increment&decrement'
```

## Suggested learning path

- Start with Chapter_01_JS_Basics for basic syntax.
- Move to Chapter_03_identifier and Chapter_04_Literal for core language rules.
- Study Chapter_05_operators to understand how expressions work.
- Finish with Chapter_06_Incre&Decre_operaters for increment/decrement practice.
- Continue with Chapter_07_switch, Chapter_08_Loops, and Chapter_08_Userinputs.
- Use Hackerank-interview-coding and Task_23July for coding practice and interview-style exercises.

## Notes

- File names are descriptive and usually indicate the topic being covered.
- This repository is suitable for beginner-level JavaScript learning and practice.
- You can run most files with Node.js directly from the terminal.

## Try it

- Interactive (prompts and accepts Enter):

```powershell
node 'Chapter_08_Userinputs/31_fileinput.js'
```

- Piped input (non-interactive):

```powershell
cmd /c "echo 15 | node \"Chapter_08_Userinputs\\31_fileinput.js\""
```

- From a file as stdin:

```powershell
node Chapter_08_Userinputs/31_fileinput.js < input.txt
```

## Requirements

- Node.js version: recommend Node.js 14 or newer (current LTS or later).
