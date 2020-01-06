# Questionnaire Generator
 This package helps to create multiple choice  questionnaire.

----
1. This package allows one to add questions, options for question and select right answer.
2. Options can be deleted in same UI,
3. Once questions is created, that can be deleted.

----
## Usage
This component will accept `onDone` property which is a callback function. This is used to return questions to the parents component.

----
## Install
    npm i LanguageTranslator

## Code

    ...
    import LanguageTranslator from 'LanguageTranslator';
    ...
    ...
    <LanguageTranslator 
        onDone={(data)=>{console.log(data)}}
    />
    ...
    ...


[Demo link](https://taskmonk.github.io/QuestionnaireGenerator)

[GitHub link](https://github.com/taskmonk/QuestionnaireGenerator)

